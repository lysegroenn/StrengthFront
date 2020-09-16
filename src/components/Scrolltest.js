import React, { useState, useRef } from 'react';
import styled from 'styled-components';


const StyledScrolltest = styled.div`
width: 300px;
height: 100px;
background-color: green;

`;
//overflow: scroll;
//<StyledScrolltest onScroll={e => ons}/>
const Scrolltest = () => {
    const ons = () => console.log('scrolled')

    return(
        <StyledScrolltest onScroll={e => ons}/>
    )
}

export default Scrolltest;