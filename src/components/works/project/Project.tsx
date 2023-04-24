import React from "react";
import s from './Project.module.scss'

export type ProjectPropsType = {
    style?: any
    title?: string
    description?: string
    url?: string
}
export const Project = (
    {style, title, description, url}: ProjectPropsType
) => {
    return (
        <div className={s.project}>

            <div className={s.imgContainer} style={style}>
                <a target='_blank' rel="noreferrer" href={url} className={s.projectButton}>watch</a>
            </div>

            <div className={s.projectInfo}>
                <h2>{title}</h2>
                <div>{description}</div>
            </div>

        </div>
    )
}