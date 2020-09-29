import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {gsap, TweenMax, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GenerateSVG from './Graph.js';

gsap.registerPlugin(ScrollTrigger);

const StyledContainer = styled.div`

width: 100vw;
background-color: #47474d;

display: grid;
grid-template-columns: 20vw auto 20vw;
grid-template-rows: 60vh 20vh 20vh 20vh auto;
`;

const SlidingContent = styled.div`

    height: 50%;
    width: 50%;
    background-color: red;
    
`;

const Container = ({records, setRef}) => {


    useEffect(() => {

        console.log(mockRefs)

        mockRefs.current.forEach((el, index) => {

            const isLeft = ((index%4)<2)
            const initX = -200//isLeft ? -200 : 200;
            TweenMax.fromTo(el, {
                autoAlpha: 0,
                x: initX
            }, {
                duration: .5,
                autoAlpha: 1,
                ease: 'none',
                x: 0,
                scrollTrigger: {
                    id: `moock-item${index}`,
                    trigger: el,
                    start: 'top center',
                    toggleActions: 'play none none reverse',
                    markers: false
                }
            })

        })


    }, [records])

    const mockRefs = useRef([]);
    mockRefs.current = [];

    const addToRefs = (el) => {
        if(el && !mockRefs.current.includes(el)){
            mockRefs.current.push(el);
        }
    }

    return (
        <StyledContainer>
            <GenerateSVG points={[200, 300, 200, 400, 200]} setRef={setRef} addToRefs={addToRefs} />

        </StyledContainer>
    )
};

export default Container;