import React, { Component } from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h1>Hej!</h1>
                <button onClick={e => this.props.getRecords()}>Get</button>
                <div>
        {this.props.records.map((r) => <p>{r.stats.b}</p>)}
                </div>
            </div>
        )
    }
}

export default App;