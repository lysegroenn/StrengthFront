import React from 'react';

const GenerateSVG = ({ pointsStockholm, pointsVara, dates, setRefStockholm, setRefVara, addToLineRefs, addToTextRefs }) => {
    let Avg; 
    if(pointsStockholm.length > 0) {
        Avg = (pointsStockholm.reduce((acc, curr) => (acc + curr), 0))/pointsStockholm.length;
    } else {
        Avg = 1;
    }
    let fact = 300/Avg;

    //console.log(`Generate fact: ${fact}`)
    let PathStockholm = 'M100 100';
    let PathVara = 'M100 100';
    //console.log(points.length)
    //console.log(`dates: ${dates.length}`)
    for(let i = 0 ; i < pointsStockholm.length ; i++) {
        let curve = ' Q';
        let x1Px = pointsStockholm[i]>=pointsStockholm[i-1] ? pointsStockholm[i]*1.2*fact.toString() : pointsStockholm[i]*0.8*fact.toString(); 
        //let y1Px = ((i)*250+350).toString();
        let x2Px = pointsStockholm[i]*fact.toString();
        let y2Px = ((i)*500+600).toString();
        let y1Px = ((i)*500+350).toString();
        
        curve += x1Px;
        curve += ' ';
        curve += y1Px

        curve += ', '
        curve += x2Px;
        curve += ' ';
        curve += y2Px

        PathStockholm += curve; 
    }

    for(let i = 0 ; i < pointsVara.length ; i++) {
        let curve = ' Q';
        let x1Px = pointsVara[i]>=pointsVara[i-1] ? pointsVara[i]*1.2*fact.toString() : pointsVara[i]*0.8*fact.toString(); 
        //let y1Px = ((i)*250+350).toString();
        let x2Px = pointsVara[i]*fact.toString();
        let y2Px = ((i)*500+600).toString();
        let y1Px = ((i)*500+350).toString();
        
        curve += x1Px;
        curve += ' ';
        curve += y1Px

        curve += ', '
        curve += x2Px;
        curve += ' ';
        curve += y2Px

        PathVara += curve; 
    }
    console.log(PathStockholm)
    console.log(PathVara)
    return (
        <svg width="1000" height="8000">
            <path ref={setRefStockholm} id="pathStockholm" stroke="blue" strokeWidth="5" fill="none" d={PathStockholm} />
            <path ref={setRefVara} id="pathVara" stroke="red" strokeWidth="5" fill="none" d={PathVara} />
            {pointsStockholm.map((p,i) => (<line ref={addToLineRefs} stroke="black" strokeWidth="5" fills="none" x1="0" y1={i*500+600} x2="600" y2={i*500+600} />))}
            {pointsStockholm.map((p,i) => (<text ref={addToTextRefs} fontSize={30} x={p*fact+20} y={i*500+590} >{p}</text>))}
            {dates.map((d,i) => (<text ref={addToTextRefs} fontSize={30} x={650} y={i*500+610} >{d.slice(0, 10)}</text>))}

        </svg>
    )
}

export default GenerateSVG;