import React from 'react';
import './App.scss';
import {Header} from "components/header/Header";
import {AboutMe} from "components/aboutMe/AboutMe";
import {Skills} from "components/mySkills/Skills";
import {Works} from "components/works/Works";
import {Contacts} from "components/contacts/Contacts";
import {Footer} from "components/footer/Footer";

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}



