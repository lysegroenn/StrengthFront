import React, { Component, useState, useEf } from 'react';
import Container from './Container';
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
                <Container beginY={300} endY={700}>
                    <button onClick={e => this.props.getRecords()}>Get</button>
                    <div>
                    </div>
                    <Scrolltest records={this.props.records} />
                </Container>

            </div>
        )
    }
}

export default App;