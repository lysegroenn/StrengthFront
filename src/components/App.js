import React, { Component, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import Container from './Container';
import Scrolltest from './Scrolltest';
import Sidebar from './Sidebar';
import '../css/main.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.setRefStockholm = this.setRefStockholm.bind(this);
        this.setRefVara = this.setRefVara.bind(this);
        this.props.getTempsStockholm()
        this.props.getTempsVara()

        window.onscroll = () => {
            //console.log(document.scrollingElement.scrollTop)
            this.pathRefStockholm.style.strokeDashoffset = 3000-(document.scrollingElement.scrollTop+200);
            this.pathRefVara.style.strokeDashoffset = 3000-(document.scrollingElement.scrollTop+200);
        }
    }

    setRefStockholm(input) {
        this.pathRefStockholm = input;
    }

    setRefVara(input) {
        this.pathRefVara = input;
    }

 
    render () {
        console.log(this.props.tempVara)
        return (
            <div>
                <Container setRefStockholm={this.setRefStockholm} setRefVara={this.setRefVara} tempStockholm={this.props.tempStockholm} tempVara={this.props.tempVara} dates={this.props.dates} >
                    <div>
                    </div>
                    <Scrolltest />
                </Container>

            </div>
        )
    }
}

export default App;