import React from 'react';
import useInputState from './hooks/useInputState';

function BillForm({addBill}){
    const [value, handleChange, reset] = useInputState("");
    return(
        <div>
            <textarea placeholder="$      0" value={value} onChange={handleChange} onInput={addBill(value)}/>
        </div>
    )
}
export default BillForm;