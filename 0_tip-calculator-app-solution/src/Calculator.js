import React, { useState } from "react";
import BillForm from "./BillForm";
import "./Calculator.css";
import PeopleForm from "./PeopleForm";
import ResultPanel from "./ResultPanel";
import Buttons from "./Buttons";

function Calculator() {
    return (
        <div className="Calculator">
            <div className="Calculator-input">
                <div className="InputComp">
                    <label htmlFor="bill">Bill</label>
                    <BillForm />
                </div>
                <div className="InputComp middle-button">
                    <label htmlFor="bill">Select Tip %</label>
                    <Buttons />
                </div>
                <div className="InputComp">
                    <label htmlFor="people">Number of People</label>
                    <PeopleForm/>
                </div>
              
            </div>
            <div className="Calculator-output">
                <ResultPanel />
            </div>
        </div>
    );
}

export default Calculator;
