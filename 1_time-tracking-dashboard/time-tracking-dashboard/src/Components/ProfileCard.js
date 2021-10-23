import React, {useContext} from 'react';
import avatarSVG from "../images/image-jeremy.png";
import "./ProfileCard.css"
import { TimeContext } from '../Contexts/TimeContext';

function ProfileCard(){
    const {changeTimeOption} = useContext(TimeContext);
    const options = ["Daily", "Weekly", "Monthly"];
    const buttons = options.map((o, idx) => (
        <>
            <input 
                type="radio" 
                name="buttons"
                value={o}
                key={idx}
                id={idx}
                onClick={changeTimeOption}
            />
            <label htmlFor={idx}>{o}</label>
        </>
    ))
    return(
        <div className="ProfileCard">
            <div className="ProfileCard-upperCard">
                <img src={avatarSVG} alt="Jeremy's-profile-picture" />
                <div className="content"> 
                    <span className="small"> Report for </span> 
                    <br />
                    <span className="large" > Jeremy Robson</span> 
                </div>
            </div>
            <div className="Buttons">
                {buttons}
            </div>
        </div>
    )
}

export default ProfileCard;