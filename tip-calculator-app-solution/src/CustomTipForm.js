import React from 'react';
import useInputState from './hooks/useInputState';
import "./CustomTipForm.css"

function CustomTipForm(props){
    const [value, handleChange, reset] = useInputState("");
    return(
        <div className="customTip">
            <input placeholder="Custom" value={value} onChange={handleChange} onInput={props.addTip(value)}/>
        </div>
    )
}
export default CustomTipForm;