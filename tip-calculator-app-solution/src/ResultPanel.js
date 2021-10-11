import React from 'react';

function ResultPanel(props){
    return(
        <div>
            <h1>{`Bill${props.bill}`}</h1>
            <h1>{`People${props.people}`}</h1>
            <h1>{`Tip${props.tip}`}</h1>
            <h1>{`Tip Amount${props.bill * props.tip}`}</h1>
            <h1>{`Total${props.bill * (1 + props.tip)}`}</h1>
        </div>
    )
}

export default ResultPanel