import React, { useState, useRef } from 'react';
import styled from 'styled-components';


const StyledScrolltest = styled.div`
width: 500px;
height: 100px;
background-color: green;

`;

const StyledStatCard = styled.div`
heigth: 40px;
width: 80%;

`;


const StatCard = ({ record }) => (
    <StyledStatCard>
        <p>{(record) ? `Bänk: ${record.stats.b}kg | Böj: ${record.stats.k}kg | Mark: ${record.stats.m}` : null}</p>
    </StyledStatCard>
)



//<StyledScrolltest onScroll={e => ons}/>
const Scrolltest = ({ records }) => {
    const ons = () => console.log('scrolled')
    const [scrollP, setScrollP] = useState(0);
    return(
        <StyledScrolltest onScroll={ons} onWheel={(e) => {setScrollP(scrollP + e.deltaY); console.log(scrollP)}}>
            <StatCard record={records[5]} />
            <StatCard record={records[5]} />
            <StatCard record={records[5]} />
            <StatCard record={records[5]} />
            <StatCard record={records[5]} />
            <StatCard record={records[5]} />
            <StatCard record={records[5]} />
            <StatCard record={records[5]} />
        </StyledScrolltest>
    )
}

export default Scrolltest;