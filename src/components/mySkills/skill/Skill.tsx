import React from 'react';
import s from './Skill.module.scss'



type TypeSkillProps = {
    title: string
    style?: TypeStyle
    description: string
}
type TypeStyle = {
    backgroundImage: string
}

export const Skill = ({style, title, description}: TypeSkillProps) => {
    return (
        <div className={s.skillBlock}>
           <div className={s.icon} style={style}>
           </div>
            <h3>{title}</h3>
            <span>
                {description}
            </span>
        </div>
    );
};

