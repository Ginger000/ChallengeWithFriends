import {useState} from 'react';
export default initialVal => {
    const [value, setValue] = useState(initialVal);
    const handleChange = e => {
        setValue(e.target.value.replace(/[^0-9]/g, ''));
    }
    const reset = () =>{
        setValue("")
    };
    return [value, handleChange, reset];
};