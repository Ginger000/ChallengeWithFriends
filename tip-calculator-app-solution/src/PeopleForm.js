import React from 'react';
import useInputState from './hooks/useInputState';

function PeopleForm({addPeople}){
    const [value, handleChange, reset] = useInputState("");
    return(
        <div>
            <textarea placeholder="p      0" value={value} onChange={handleChange} onInput={addPeople(value)}/>
        </div>
    )
}
export default PeopleForm;