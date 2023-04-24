import {v1} from "uuid";
import reactSvg from "assets/svg/react.svg";
import reduxSvg from "assets/svg/redux.svg";
import typeScriptSvg from "assets/svg/typescript.svg";
import jsSvg from "assets/svg/javascript.svg";
import htmlSvg from "assets/svg/html.svg";
import cssSvg from "assets/svg/css.svg";
import restApiSvg from "assets/svg/api.png";
import axiosSvg from "assets/svg/axios.png";
import postmanSvg from "assets/svg/postman.svg";
import materialUiSvg from "assets/svg/material-ui.svg";
import gitSvg from "assets/svg/git.svg";
import storybookSvg from "assets/svg/storybook.svg";
import formikSvg from "assets/svg/formik.png";
import reactHookForm from "assets/svg/react-hook-form.png";
import antDesignSvg from 'assets/svg/ant-design.svg'

type TypeSkill = {
    id: string
    title: string
    description: string
    style: {
        backgroundImage: string
    }
}
export const skillsData: TypeSkill[] = [
    {
        id: v1(), title: 'React', description: 'JavaScript-based UI development library.',
        style: {
            backgroundImage: `url(${reactSvg})`,
        },
    },
    {
        id: v1(),
        title: 'Redux',
        description: 'JavaScript library for managing and centralizing application state.',
        style: {
            backgroundImage: `url(${reduxSvg})`,
        },

    },
    {
        id: v1(), title: 'TypeScript', description: 'A syntactic superset of JavaScript which adds static typing.',
        style: {
            backgroundImage: `url(${typeScriptSvg})`,
        },
    },
    {
        id: v1(), title: 'JavaScript',
        description: 'The Programming Language for the Web that conforms to the ECMAScript specification.',
        style: {
            backgroundImage: `url(${jsSvg})`,
        },
    },
    {
        id: v1(),
        title: 'HTML',
        description: 'Hypertext Markup Language for describing the contents and appearance of Web pages.',
        style: {
            backgroundImage: `url(${htmlSvg})`,
        },
    },
    {
        id: v1(),
        title: 'CSS',
        description: 'Stylesheet language used to describe the presentation of a document written in HTML.',
        style: {
            backgroundImage: `url(${cssSvg})`,
        },
    },
    {
        id: v1(),
        title: 'Rest API',
        description: 'Architectural style for an application program interface (API) that uses HTTP requests to access and use data.',
        style: {
            backgroundImage: `url(${restApiSvg})`,
        },
    },
    {
        id: v1(),
        title: 'Axios',
        description: 'Promise-based library used with Node.js and browser to make asynchronous JavaScript HTTP requests.',
        style: {
            backgroundImage: `url(${axiosSvg})`,
        },
    },
    {
        id: v1(), title: 'Postman', description: 'API platform for building and using APIs.',
        style: {
            backgroundImage: `url(${postmanSvg})`,
        },
    },
    {
        id: v1(),
        title: 'Material UI',
        description: 'Library that allows import and use different components to create a user interface in React applications.',
        style: {
            backgroundImage: `url(${materialUiSvg})`,
        },
    },
    {
        id: v1(),
        title: 'Ant Design',
        description: 'Library that helps designers/developers building beautiful products more flexible and working with happiness',
        style: {
            backgroundImage: `url(${antDesignSvg})`,
        },
    },
    {
        id: v1(), title: 'GIT', description: 'DevOps tool used for source code management.',
        style: {
            backgroundImage: `url(${gitSvg})`,
        },
    },
    {
        id: v1(), title: 'Storybook', description: 'Tool for building UI components and pages in isolation.',
        style: {
            backgroundImage: `url(${storybookSvg})`,
        },
    },
    {
        id: v1(),
        title: 'Formik',
        description: 'Small group of React components and hooks for building forms in React and React Native.',
        style: {
            backgroundImage: `url(${formikSvg})`,
        },
    },
    {
        id: v1(),
        title: 'React Hook Form',
        description: 'Form validation in React.',
        style: {
            backgroundImage: `url(${reactHookForm})`,
        },
    },
]