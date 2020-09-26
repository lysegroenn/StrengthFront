import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
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

        mockRefs.current.forEach((el, index) => {

            const isLeft = ((index%4)<2)
            const initX = isLeft ? -200 : 200;
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
                    start: 'top center+=200',
                    toggleActions: 'play none none reverse',
                    markers: false
                }
            })

        })


    }, [])

    const mockContent = [1, 2, 3, 4, 5, 6, 7, 8];
    let SlideItem = useRef(null);
    let SlideItem2 = useRef(null);

    const mockRefs = useRef([]);
    mockRefs.current = [];

    const addToRefs = (el) => {
        if(el && !mockRefs.current.includes(el)){
            mockRefs.current.push(el);
        }
    }

    return (
        <StyledContainer>
    { /*        <Transition in={slideIn == 'in'} timeout={700}>
                {state => (
                    <SlidingContent className={`sliding-content-${state}`} />
                )}
                </Transition>  */}
            <SlidingContent style={{'gridColumn': '2/3', 'gridRow': '3/4'}} ref={el => {SlideItem2 =el} }></SlidingContent>
            <SlidingContent style={{'gridColumn': '2/3', 'gridRow': '4/5'}} ref={el => {SlideItem = el} } />
            <div id='mock-container'>
                {mockContent.map((e, i) => (<div className='mock-item' ref={addToRefs} key={i}>{e}</div>))}
            </div>
        </StyledContainer>
    )
};

export default Container;