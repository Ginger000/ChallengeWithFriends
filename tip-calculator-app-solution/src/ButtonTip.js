import {useState} from 'react';
import useToggle from './hooks/useToggle';

function ButtonTip(props){
    const [selectedIdx, setSelectedIdx] = useState(null);
    const {tip, idx} = props;
    return(
        
        <button
            key={idx}
            className={`button ${selectedIdx === idx ? "toggled" : ""}`}
            onClick={()=>setSelectedIdx(idx)}
        >
            {tip}
        </button>
    )
}
export default ButtonTip;