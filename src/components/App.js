import React, { Component } from 'react';
import Scrolltest from './Scrolltest';
import Sidebar from './Sidebar';
import '../css/main.css'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Sidebar />
                <h1>Hej!</h1>
                <button onClick={e => this.props.getRecords()}>Get</button>
                <div>
        {this.props.records.map((r) => <p>{r.stats.b}</p>)}
                </div>
                <Scrolltest />
            </div>
        )
    }
}

export default App;