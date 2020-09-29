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
        this.setRef = this.setRef.bind(this);

        window.onscroll = () => {
            
            //console.log(document.scrollingElement.scrollTop)
            this.pathRef.style.strokeDashoffset = 3000-(document.scrollingElement.scrollTop+200);
            /*if(
                window.innerHeight - document.scrollingElement.scrollTop
                < 350
                //=== document.scrollingElement.offsetHeight
            ) {
                console.log(document.scrollingElement.offsetHeight - document.scrollingElement.scrollTop)
                this.props.getMoreRecords()
            } */
        }
    }

    setRef(input) {
        this.pathRef = input;
    }


 
    render () {
        console.log(this.props)
        return (
            <div>
                <button onClick={e => this.props.getMoreRecords()}>Get</button>
                <Container records={this.props.records} setRef={this.setRef}>
                    <div>
                    </div>
                    <Scrolltest records={this.props.records} />
                </Container>

            </div>
        )
    }
}

export default App;