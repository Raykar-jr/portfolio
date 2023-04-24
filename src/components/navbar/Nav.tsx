import React from 'react';
import s from './Nav.module.scss'
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <Link to='about-me' activeClass={s.active} spy={true} smooth={true} offset={-60}>About me</Link>
            <Link to='skills' activeClass={s.active} spy={true} smooth={true} offset={-60}>Skills</Link>
            <Link to='projects' activeClass={s.active} spy={true} smooth={true} offset={-30}>Work experience</Link>
            <Link to='contacts' activeClass={s.active} spy={true} smooth={true} offset={0}>Contacts</Link>
        </div>
    );
};

