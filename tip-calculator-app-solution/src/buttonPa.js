import React, {useState, Component } from 'react';
import CustomTipForm from './CustomTipForm';


function ButtonPa ({addTip}){
        // console.log(props);
        const tips = [{ tip: "5%"}, {tip:"10%"}, {tip:"15%"}, {tip:"25%"}, {tip:"50%"}]
        const Buttons = ()=> {
            // console.log(props);
            const [selectedIdx, setSelectedIdx] = useState(null);
            const [tip, setTip]=useState(0);
            // addTip(tip);
            // const [customTip, setCustomTip] = useState(0);
            // const addTip = newTip => {
            //     setCustomTip(newTip);
            //     // setSelectedIdx(null);
            // }    
            return(
                <div>
                    {tips.map((t, idx)=>(
                        <button
                            key={idx}
                            className={`button ${selectedIdx === idx ? "toggled" : ""}`}
                            onClick={()=>{
                                setSelectedIdx(idx);
                                // this.props.addTip(t.tip);
                                setTip(t.tip);
                                // addTip(t.tip);
                                console.log("clicked!")
                            }}
                        >
                            {t.tip}
                        </button>
                    ))}
                    {/* <CustomTipForm addTip={this.props.addTip}/> */}
                </div>
            )  
        }
        return(
            <div>
                {/* {Buttons} */}
                <Buttons addTip={addTip}/>
            </div>
        )
}

export default ButtonPa;
