import {useState} from 'react';

function useToggle(initialVal = null){
    const [state, setState] = useState(initialVal);
    const toggle = () => {
        setState();
    };
    return [state, toggle];
}
export default useToggle;