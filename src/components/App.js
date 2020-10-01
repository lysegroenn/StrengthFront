import React, { Component, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import Container from './Container';
import Scrolltest from './Scrolltest';
import Sidebar from './Sidebar';
import '../css/main.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
        this.props.getTempsStockholm()

        window.onscroll = () => {
            //console.log(document.scrollingElement.scrollTop)
            this.pathRef.style.strokeDashoffset = 3000-(document.scrollingElement.scrollTop+200);
        }
    }

    setRef(input) {
        this.pathRef = input;
    }


 
    render () {
        console.log(this.props.tempStockholm)
        return (
            <div>
                <Container setRef={this.setRef} tempStockholm={this.props.tempStockholm} dates={this.props.dates} >
                    <div>
                    </div>
                    <Scrolltest />
                </Container>

            </div>
        )
    }
}

export default App;