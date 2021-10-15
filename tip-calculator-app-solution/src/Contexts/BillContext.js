import React, {createContext} from 'react';
import useInputState from '../hooks/useInputState';

export const BillContext = createContext();

export function BillProvider(props){
    
    const [bill, handleBillChange, resetBill] = useInputState("");
    return (
        <BillContext.Provider value={{bill, handleBillChange, resetBill}}>
            {props.children}
        </BillContext.Provider>
    )
}