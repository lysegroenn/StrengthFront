import React, { Component, useState, useEffect } from 'react';
import debounce from 'lodash.debounce'; 
import Container from './Container';
import Scrolltest from './Scrolltest';
import Sidebar from './Sidebar';
import '../css/main.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.getRecords()

        window.onscroll = debounce(() => {
            if(
                window.innerHeight - document.scrollingElement.scrollTop
                < 350
                //=== document.scrollingElement.offsetHeight
            ) {
                console.log(document.scrollingElement.offsetHeight - document.scrollingElement.scrollTop)
                this.props.getMoreRecords()
            }
        }, 100)
    }

 
    render () {
        console.log(this.props)
        return (
            <div>
                <button onClick={e => this.props.getMoreRecords()}>Get</button>
                <Container records={this.props.records}>
                    <div>
                    </div>
                    <Scrolltest records={this.props.records} />
                </Container>

            </div>
        )
    }
}

export default App;