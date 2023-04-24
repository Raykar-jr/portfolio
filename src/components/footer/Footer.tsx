import React from 'react';
import s from './Footer.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export const Footer = () => {

    return (
        <div className={s.footerWrapper}>
                 <div className={s.footerContainer}>
                     <h2 className={s.title}>Kiryl
                         <span> Azaranka</span></h2>
                     <div className={s.icons}>

                         <a href="https://github.com/Raykar-jr">
                             <FontAwesomeIcon icon={faGithub} size='2xl' style={{color: 'gray'}} />
                         </a>
                         <a href="https://t.me/raykar_jr">
                             <FontAwesomeIcon icon={faTelegram} size='2xl' style={{color: 'gray'}} />
                         </a>
                         <a href="https://www.linkedin.com/in/kiryl-azaranka-a45b6b25a/">
                             <FontAwesomeIcon icon={faLinkedin} size='2xl' style={{color: 'gray'}} />
                         </a>

                     </div>
                     <div className={s.copyright}>COPYRIGHT © 2023, ALL RIGHT RESERVED</div>
                 </div>
        </div>
    );
};

