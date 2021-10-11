import React from 'react';
import useInputState from './hooks/useInputState';

function CustomTipForm(props){
    const [value, handleChange, reset] = useInputState("");
    return(
        <div>
            {value}
            <textarea placeholder="Custom" value={value} onChange={handleChange} onInput={props.addTip(value)}/>
        </div>
    )
}
export default CustomTipForm;