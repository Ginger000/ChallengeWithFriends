import React, { useState } from 'react';
import BillForm from './BillForm';
import './Calculator.css';
import PeopleForm from './PeopleForm';
import ResultPanel from './ResultPanel';
import ButtonPanel from './buttonPanel';
import CustomTipForm from './CustomTipForm';
import ButtonPa from './buttonPa';

function Calculator (){
    const [bill, setBill] = useState(0);
    const [people, setPeople] = useState(0);
    const [tip, setTip] = useState(0);
    const addBill = newBill => {
        setBill(newBill);
    }
    const addPeople = newPeople => {
        setPeople(newPeople);
    }
    
    const addTip = newTip =>{
        setTip(newTip);
    }
    
    return(
        <div>
            <h1>SPLITTER</h1>
            <label htmlFor="bill">Bill</label>
            <BillForm name="bill" id="bill" addBill={addBill}/>
            
            
            <label htmlFor="people">Number of People</label>
            <PeopleForm name='people' id="people" addPeople={addPeople} />
            <ButtonPa addTip={addTip}/>
            {/* <ButtonPanel addTip={addTip}/> */}
            <CustomTipForm addTip={addTip}/>
            <ResultPanel bill={bill} people={people} tip={tip}/>
            
        </div>
    )

}

export default Calculator;