import React, {createContext, useState} from 'react';
import useInputState from '../hooks/useInputState';

export const TipContext = createContext();

export function TipProvider(props){
    const [buttonTip, setButtonTip] = useState("");
    const [customTip, handleCusTipChange, resetCusTip] = useInputState("");
    const changeButtonTip = e => setButtonTip(e.target.value);
    const changeCustomTip = ()=> setButtonTip(customTip);
    const uncheckRadio = () => {
        const allRadios = document.querySelectorAll('.preload');
        for(let radio of allRadios){
            if (radio.checked === true) radio.checked=false;
        };
    }
    const resetTip = ()=> {
        setButtonTip("");
        resetCusTip();
        uncheckRadio();
    }

    return(
        <TipContext.Provider 
            value={{
                buttonTip, 
                changeButtonTip, 
                changeCustomTip,
                customTip, 
                handleCusTipChange, 
                resetCusTip,
                resetTip,
                uncheckRadio
            }}
        >
            {props.children}
        </TipContext.Provider>
    )
}