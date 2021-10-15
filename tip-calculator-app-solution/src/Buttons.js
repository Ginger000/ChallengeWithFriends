import React, { useContext } from "react";
import "./Buttons.css";
import { TipContext } from "./Contexts/TipContext";

export default function Buttons() {
    const {
        buttonTip,
        changeButtonTip,
        changeCustomTip,
        customTip,
        handleCusTipChange,
        uncheckRadio
    } = useContext(TipContext);
    const tips = [
        { tip: "5%" },
        { tip: "10%" },
        { tip: "15%" },
        { tip: "25%" },
        { tip: "50%" },
    ];

    return (
        <div className="ButtonPanel Buttons">
            {tips.map((t, idx) => (
                <>
                    <input
                        className='preload'
                        type="radio"
                        name="buttonGroup"
                        value={t.tip}
                        key={idx}
                        id={idx}
                        onClick={changeButtonTip}
                    />
                    <label htmlFor={idx}>{t.tip}</label>
                </>
            ))}
            <input
                className="customInput"
                type="text"
                name="customInput"
                key={5}
                id={5}
                placeholder="Custom"
                value={customTip}
                // here are some async problems
                onChange={(e)=>{
                    changeButtonTip(e);
                    handleCusTipChange(e);
                }}
                onClick={()=>{
                    changeCustomTip();
                    uncheckRadio();
                    console.log("hahahah")
                }}
 
            />
            {/* <CustomTipForm addTip={this.props.addTip}/> */}
        </div>
    );
}
