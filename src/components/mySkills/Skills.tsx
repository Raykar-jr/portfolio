import React from 'react';
import s from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../title/Title";
import {Fade} from "react-awesome-reveal";
import {skillsData} from "components/mySkills/skills-data";


export const Skills = () => {
    const skills = skillsData.map(skill => {
        return (
            <Skill key={skill.id}
                   title={skill.title}
                   description={skill.description}
                   style={skill.style}
            />
        )
    })
    return (
        <div id='skills' className={s.wrapper}>
            <div className={`${s.centerBlock}`}>
                <Title text='my' assignedText='skills'/>
                <Fade cascade delay={100}>
                <div className={s.skillsBlock}>
                    {skills}
                </div>
                </Fade>
            </div>
        </div>
    );
};

