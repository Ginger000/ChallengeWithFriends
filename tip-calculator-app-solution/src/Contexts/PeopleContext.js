import React, {createContext} from 'react';
import useInputState from '../hooks/useInputState';

export const PeopleContext = createContext();

export function PeopleProvider(props){
    //WATCH OUT!
    //destruct array here because the hook export is also an array
    //error would happen if object is destructed
    const [people, handlePeopleChange, resetPeople] = useInputState("");
    return (
        <PeopleContext.Provider value={{people, handlePeopleChange, resetPeople}}>
            {props.children}
        </PeopleContext.Provider>
    )
}