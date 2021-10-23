import React, { useContext } from "react";
import "./ActivityCard.css";
import studySvg from "../images/icon-study.svg";
import playSvg from "../images/icon-play.svg";
import exerciseSvg from "../images/icon-exercise.svg";
import selfCareSvg from "../images/icon-self-care.svg";
import socialSvg from "../images/icon-social.svg";
import workSvg from "../images/icon-work.svg";
import ellisisSvg from "../images/icon-ellipsis.svg";
// import svg from `./images/icon-${this.props.activity}.svg`
import data from "../data/data.json";
import { TimeContext } from "../Contexts/TimeContext";

function ActivityCard(props) {
    const { time } = useContext(TimeContext);
    const { title, activity } = props;
    const object = data.find((x) => x.title === title);
    const timeL = time.toLowerCase();
    let timeP;
    if (time === "Daily") timeP = "Day";
    if (time === "Weekly") timeP = "Week";
    if (time === "Monthly") timeP = "Month";

    let svg;
    let color;

    switch (title) {
        case "Exercise":
            svg = exerciseSvg;
            color = "hsl(145, 58%, 55%)";
            break;
        case "Play":
            svg = playSvg;
            color = "hsl(195, 74%, 62%)";
            break;
        case "Self Care":
            svg = selfCareSvg;
            color = "hsl(43, 84%, 65%)";
            break;
        case "Social":
            svg = socialSvg;
            color = "hsl(264, 64%, 52%)";
            break;
        case "Study":
            svg = studySvg;
            color = "hsl(348, 100%, 68%)";
            break;
        case "Work":
            svg = workSvg;
            color = "hsl(15, 100%, 70%)";
            break;
    }
    return (
        <div
            className="ActivityCard"
            //I try to directly link svg file by liberal template
            //but it cannot work in jsx file. It only works directly in css file.
            //This cannot work:style={{backgroundImage:`url('../images/icon-${this.props.activity}.svg')`}}
            ////This also cannot work:style={{backgroundImage:`url(../images/icon-${this.props.activity}.svg)`}}
            //Hence, I have to import workSvg from "../images/icon-work.svg" etc at the top
            //and I have to write switch
            style={{
                backgroundImage: `url(${svg})`,
                backgroundColor: `${color}`,
            }}
        >
            <div className="ActivityCard-display">
                <div className="titleBar">
                    <span className="activityTitle">{title}</span>
                    <span>
                        <img src={ellisisSvg} alt="compressed-menu-icon" />
                    </span>
                </div>
                <div className="times">
                    <div className="currentTime">
                        {object.timeframes[timeL].current}hrs
                    </div>
                    <div className="previousTime">
                        Last {timeP} - {object.timeframes[timeL].previous}hrs
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActivityCard;
