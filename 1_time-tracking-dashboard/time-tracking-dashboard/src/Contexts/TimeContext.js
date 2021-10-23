import React, {createContext, useState} from 'react';

export const TimeContext = createContext();

export function TimeProvider(props){
    const [time, setTime] = useState('Daily');
    const changeTimeOption = e => setTime(e.target.value);

    return(
        <TimeContext.Provider
            value={{
                time,
                changeTimeOption
            }}
        >
            {props.children}
        </TimeContext.Provider>
    )
}

