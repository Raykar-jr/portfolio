import React from 'react';
import s from './Works.module.scss'
import {Project} from "./project/Project";
import flashCards from 'assets/images/flash-cards.jpg'
import {Title} from "../title/Title";
import {v1} from "uuid";
import socialNetwork from 'assets/images/social-network.png'
import todoImage from 'assets/images/todo.png'

type ProjectInfoType = {
    id: string
    title: string
    description: string
    style: {
        backgroundImage: string
    }
    urlProject: string
}

export const Works = () => {
    const projectsInfo: ProjectInfoType[] = [
        {
            id: v1(), title: 'Social network', description: 'Get in contact in digital world',
            style: {
                backgroundImage: `url(${socialNetwork})`,
            },
            urlProject: "https://github.com/Raykar-jr/New-samurai-way-main"
        },
        {
            id: v1(), title: 'Task manager', description: 'Daily task scheduling',
            style: {
                backgroundImage: `url(${todoImage})`,
            },
            urlProject: "https://github.com/Raykar-jr/todolist-rtk",
        },
        {
            id: v1(), title: 'Flash cards', description: 'Online training using the question-answer system',
            style: {
                backgroundImage: `url(${flashCards})`,
            },
            urlProject: "https://github.com/Raykar-jr/cards",
        },

    ]

    const projects = projectsInfo.map(project => {
        return (
            <Project key={project.id}
                     title={project.title}
                     description={project.description}
                     style={project.style}
                     url={project.urlProject}
            />
        )
    })
    return (
        <div id='projects' className={s.wrapper}>
            <div className={s.centerBlock}>
                <Title text={'my'} assignedText={'projects'}/>
                <div className={s.allProjects}>
                    {projects}
                </div>
            </div>
        </div>
    );
};


