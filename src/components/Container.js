import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {gsap, TweenMax, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GenerateSVG from './Graph.js';

gsap.registerPlugin(ScrollTrigger);

const StyledContainer = styled.div`

width: 100vw;
background-color: #47474d;
padding-top: 500px;

`;

const SlidingContent = styled.div`

    height: 50%;
    width: 50%;
    background-color: red;
    
`;

const Container = ({ setRef, tempStockholm }) => {


    useEffect(() => {

        console.log(textRefs)

        lineRefs.current.forEach((el, index) => {
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
                    id: `line${index}`,
                    trigger: el,
                    start: 'top center+=300',
                    toggleActions: 'play none none reverse',
                    markers: false
                }
            })
        })

        textRefs.current.forEach((el, index) => {
            const isLeft = ((index%4)<2)
            const initX = -200//isLeft ? -200 : 200;
            TweenMax.fromTo(el, {
                autoAlpha: 0,
                y: initX
            }, {
                duration: .35,
                autoAlpha: 1,
                ease: 'none',
                y: 0,
                scrollTrigger: {
                    id: `text${index}`,
                    trigger: el,
                    start: 'top center',
                    toggleActions: 'play none none reverse',
                    markers: false
                }
            })
        })


    }, [tempStockholm])

    const lineRefs = useRef([]);
    lineRefs.current = [];
    const textRefs = useRef([]);
    textRefs.current = [];

    const addToLineRefs = (el) => {
        if(el && !lineRefs.current.includes(el)){
            lineRefs.current.push(el);
        }
    }

    const addToTextRefs = (el) => {
        if(el && !textRefs.current.includes(el)){
            textRefs.current.push(el);
        }
    }


    return (
        <StyledContainer>
            <GenerateSVG points={tempStockholm} setRef={setRef} addToLineRefs={addToLineRefs} addToTextRefs={addToTextRefs} />

        </StyledContainer>
    )
};

export default Container;