import React from 'react';
import "./ResultPanel.css"

function ResultPanel(props){
    const{bill, people, tip} = props;
    const tipAmountPer = (bill * tip/people).toFixed(2);
    const totalPer = ((bill * (1 + tip))/people).toFixed(2);
    return(
        <div className="ResultPanel">
            <div className="ResultPanel-item">
                <div className="ResultPanel-label"> <span className="label-highlight"> Tip Amount</span> <br /> person</div>
                <div className="ResultPanel-value">
                    <h1 className="result-value">{`$ ${tipAmountPer > 0 ? tipAmountPer : "0.00"}`}</h1>
                </div>
            </div>
            <div className="ResultPanel-item">
                <div className="ResultPanel-label"><span className="label-highlight">Total</span> <br /> /person </div>
                <div className="ResultPanel-value">
                    <h1 className="result-value">{`$ ${totalPer > 0 ?  totalPer:"0.00"}`}</h1>
                </div>
            </div>
            <button className="button toggled reset">RESET</button>
            
            
            
           
        </div>
    )
}

export default ResultPanel