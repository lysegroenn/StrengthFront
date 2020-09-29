import React from 'react';

const GenerateSVG = ({ points, setRef, addToRefs }) => {
    let Path = 'M100 100';
    console.log(points.length)
    for(let i = 0 ; i < points.length ; i++) {
        let curve = ' Q';
        let x1Px = points[i]>points[i-1] ? points[i]*1.2.toString() : points[i]*0.8.toString(); 
        //let y1Px = ((i)*250+350).toString();
        let x2Px = points[i].toString();
        let y2Px = ((i)*500+600).toString();
        let y1Px = ((i)*500+350).toString();
        
        curve += x1Px;
        curve += ' ';
        curve += y1Px

        curve += ', '
        curve += x2Px;
        curve += ' ';
        curve += y2Px

        Path += curve; 
    }
    console.log(Path)
    return (
        <svg width="800" height="4000">
            <path ref={setRef} id="path" stroke="black" strokeWidth="5" fill="none" d={Path} />
            {points.map((p,i) => (<line ref={addToRefs} stroke="black" strokeWidth="5" fills="none" x1="0" y1={i*500+100} x2="600" y2={i*500+100} />))}
    {points.map((p,i) => (<text x="550" y={i*500+590} >{p}</text>))}

        </svg>
    )
}

export default GenerateSVG;