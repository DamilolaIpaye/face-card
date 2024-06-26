import React from "react";

const SkillList = () => {
    return (
        <div className="skill-list">
            <Skill skill="React" emoji="" color="blue"/>
            <Skill skill="HTML+CSS" emoji="" color="orange"/>
            <Skill skill="JavaScript" emoji="" color="yellow"/>
            <Skill skill="Svelte" emoji="" color="orangered"/>
        </div>
    )
};


function Skill(props) {
    return (
        <div className="skill" style={{backgroundColor: props.color}}>
            <span>{props.skill}</span>
            <span>{props.emoji}</span>
        </div>
    )
}

export default SkillList;