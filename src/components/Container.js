import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import {gsap, TweenMax, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StyledContainer = styled.div`
height: 200vh;
width: 100vw;
background-color: #47474d;
margin-bottom: 20px;
display: grid;
grid-template-columns: 20vw auto 20vw;
grid-template-rows: 60vh 20vh 20vh 20vh auto;
`;


const Container = () => {

const SlidingContent = styled.div`


    height: 50%;
    width: 50%;
    background-color: red;
    
`;

    useEffect(() => {
        console.log(SlideItem);
        TweenMax.fromTo(SlideItem, 
            {autoAlpha: 0, y: 200},
            { autoAlpha: 1,
              x: 400,
              y: 0,
              duration: .5,
              scrollTrigger: { 
                  trigger: SlideItem,
                  start: 'top center+=200',
                  toggleActions: 'play none none reverse' 
                } 
            });
        TweenMax.fromTo(SlideItem2, 
            {autoAlpha: 0, x: 800, y: 200},
            { autoAlpha: 1,
                x: 400,
                y: 0,
                duration: .5,
                scrollTrigger: { 
                    trigger: SlideItem2,
                    start: 'top center+=200',
                    toggleActions: 'play none none reverse' 
                }
        });
              
    }, [])

    let SlideItem = useRef(null);
    let SlideItem2 = useRef(null);

    return (
        <StyledContainer>
    { /*        <Transition in={slideIn == 'in'} timeout={700}>
                {state => (
                    <SlidingContent className={`sliding-content-${state}`} />
                )}
                </Transition>  */}
            <SlidingContent style={{'grid-column': '2/3', 'grid-row': '3/4'}} ref={el => {SlideItem2 =el} } />
            <SlidingContent style={{'grid-column': '2/3', 'grid-row': '4/5'}} ref={el => {SlideItem = el} } />
        </StyledContainer>
    )
};

export default Container;