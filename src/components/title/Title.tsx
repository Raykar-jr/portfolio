import React from 'react';
import s from "./Title.module.scss";

type TitlePropsType = {
    assignedText: string
    text: string
}
export const Title = ({assignedText, text}: TitlePropsType) => {
    return (
        <h2 className={s.title}> {text}
            <span> {assignedText}</span>
        </h2>
    );
};

