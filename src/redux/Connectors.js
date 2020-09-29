import { connect } from 'react-redux';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';
import App from '../components/App';

const BaseURL = 'https://opendata-download-metfcst.smhi.se';

// Test action
const test = (medd) => (
    {
        type: 'TEST', 
        data: medd
    }
)


const receiveTempsStockholm = (temps) => (
    {
        type: 'RECEIVE_STOCKHOLM',
        data: temps
    }
)

const getTempsStockholm = () => {
    return (dispatch) => {
        fetch(BaseURL + '/api/category/pmp3g/version/2/geotype/point/lon/18.037834/lat/59.300078/data.json')
        .then(res => res.json())
        .then(data => dispatch(receiveTempsStockholm(extractTemps(data.timeSeries))))
        .catch(err => console.log(err))
    }
}

const extractTemps = (data) => {
    try {
        let temps = [];
        for(let i = 0 ; i < data.length ; i++) {
            if (data[i].validTime.slice(10, 16) == "T12:00") { 
               data[i].parameters.forEach((el) => {
                   if (el.name == "t") temps.push(el.values[0])    //; console.log(`Pushing temp: ${el.values[0]}`)}
            })
          }
        }
        return temps;        
    } catch (error) {
        console.log(`ERROR FROM REDUX: ${error}`)
        return ['Höööj'];
    }

 //   console.log(temps.length)
}


const reducer = (state = {test: '', tempStockholm: []}, action) => {
    switch(action.type) {
        case 'TEST' : 
            return {...state, test: action.data};
        case 'RECEIVE_STOCKHOLM' :
            return {...state, tempStockholm: action.data}
        default:
            return state;
    }
}

const mapState = (state) => {
    return {
        test: state.test,
        tempStockholm: state.tempStockholm
    }
}

const mapDispatch = (dispatch) => {
    return {
        test: (medd) => {
            dispatch(test(medd))
        },
        getTempsStockholm: () => {
            dispatch(getTempsStockholm())
        }
    }
}


const store = createStore(reducer, applyMiddleware(thunk));

const Connectors = {
    App: connect(mapState, mapDispatch)(App),
    store: store
};

export default Connectors;