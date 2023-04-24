import React from 'react';
import s from './AboutMe.module.scss'
import myPhoto from '../../assets/images/me.jpg'
import {Particle} from "components/particles/Particle";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";


export const AboutMe = () => {
    return (
        <div id='about-me' className={s.wrapper}>
            <Particle/>
            <div className={s.centerBlock}>
                <Fade triggerOnce={true} direction={'down'}>
                    <div className={s.photo}>
                        <img src={myPhoto} className={s.logo} alt=""/>
                    </div>
                    <div className={s.text}>
                        <h1 className={s.title}>I'm kiryl azaranka.
                            <br/>
                            <ReactTypingEffect text={'front-end developer'}/>
                        </h1>
                        <p>Hello, I am a front-end developer with experience in creating SPA with
                            React, Redux, TypeScript. Now I improve my skills in this direction and expanding them with
                            new technologies. I spend my leisure time on Codewars or by improving english skills. Open
                            to your suggestions.
                        </p>
                    </div>

                </Fade>
            </div>
        </div>
    );
};

