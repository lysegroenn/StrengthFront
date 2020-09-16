import React, { Component } from 'react';
import Scrolltest from './Scrolltest';
import Sidebar from './Sidebar';
import '../css/main.css'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        console.log(this.props)
        return (
            <div>
                <button onClick={e => this.props.getRecords()}>Get</button>
                <div>
                </div>
                <Scrolltest records={this.props.records} />
            </div>
        )
    }
}

export default App;