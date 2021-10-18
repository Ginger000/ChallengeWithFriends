import React, {useContext} from 'react';
import "./ResultPanel.css"
import { BillContext } from './Contexts/BillContext';
import { TipContext } from "./Contexts/TipContext";
import { PeopleContext } from './Contexts/PeopleContext';

function ResultPanel(props){
    const {bill, resetBill} = useContext(BillContext);
    const {buttonTip, resetTip} = useContext(TipContext);
    const {people, resetPeople} = useContext(PeopleContext); 
    // console.log(buttonTip);
    // console.log(customTip);
    const tip = parseFloat(buttonTip)/100.0;
    // console.log(tip);
    const tipAmountPer = (bill * tip/people).toFixed(2);
    const totalPer = ((bill* (1 + tip))/people).toFixed(2);

    
    return(
        <div className="ResultPanel">
            <div className="ResultPanel-item">
                <div className="ResultPanel-label"> <span className="label-highlight"> Tip Amount</span> <br /> person</div>
                <div className="ResultPanel-value">
                    <h1 className="result-value">{`$ ${ (bill && tip && people && tipAmountPer > 0) ? tipAmountPer : "0.00"}`}</h1>
                </div>
            </div>
            <div className="ResultPanel-item">
                <div className="ResultPanel-label"><span className="label-highlight">Total</span> <br /> /person </div>
                <div className="ResultPanel-value">
                    <h1 className="result-value">{`$ ${ (bill && tip && people && totalPer > 0) ?  totalPer:"0.00"}`}</h1>
                </div>
            </div>
            <button 
                name="resetButton"
                onClick={()=>{
                    resetBill();
                    resetPeople();
                    resetTip(); 
                }} 
                className="button reset "
            >
                RESET
            </button>
            
            
            
           
        </div>
    )
}

export default ResultPanel