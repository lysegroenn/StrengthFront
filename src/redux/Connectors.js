import { connect } from 'react-redux';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';
import App from '../components/App';



// Test action
const test = (medd) => (
    {
        type: 'TEST', 
        data: medd
    }
)

const receiveRecords = (records) => (
    {
        type: 'RECEIVE_RECORDS',
        data: records
    }
)

const getRecords = () => {
    return (dispatch) => {
        fetch('https://www.lysegroenn.com/strength/api/testGet')
        .then(res => res.json())
        .then(json => dispatch(receiveRecords(json.data)))
    }
}

const reducer = (state = {test: '', records: []}, action) => {
    switch(action.type) {
        case 'TEST' : 
            return {...state, test: action.data};
        case 'RECEIVE_RECORDS' :
            return {...state, records: action.data}
        default:
            return state;
    }
}

const mapState = (state) => {
    return {
        test: state.test,
        records: state.records
    }
}

const mapDispatch = (dispatch) => {
    return {
        test: (medd) => {
            dispatch(test(medd))
        },
        getRecords: () => {
            dispatch(getRecords())
        }
    }
}


const store = createStore(reducer, applyMiddleware(thunk));

const Connectors = {
    App: connect(mapState, mapDispatch)(App),
    store: store
};

export default Connectors;