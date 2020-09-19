import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import {TweenMax, Power3 } from 'gsap';


const StyledContainer = styled.div`
height: 200vh;
width: 100vw;
background-color: #47474d;
margin-bottom: 20px;
display: grid;
grid-template-columns: 20vw auto 20vw;
grid-template-rows: 40vh 40vh auto;
`;


const Container = ({ beginY, endY }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [slideIn, setSlideIn] = useState('out');

    const handleScroll = () => {
        const position = window.pageYOffset;
        console.log(position)

        if(position > beginY && position < endY) {
            setSlideIn('in')   
        } else {
            setSlideIn('out')
        }
    }


const SlidingContent = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;

    height: 100%;
    width: 100%;
    background-color: red;
    
`;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const ons = () => console.log('hey');
    return (
        <StyledContainer>
            <Transition in={slideIn == 'in'} timeout={700}>
                {state => (
                    <SlidingContent className={`sliding-content-${state}`} />
                )}
            </Transition>
        </StyledContainer>
    )
};

export default Container;