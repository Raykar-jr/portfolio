import React from 'react';
import s from './Footer.module.scss'

export const Footer = () => {

    return (
        <div className={s.footerWrapper}>
                 <div className={s.footerContainer}>
                     <h2 className={s.title}>Kiryl
                         <span> Azaranka</span></h2>
                     <div className={s.icons}>
                         <a href="https://github.com/Raykar-jr">
                             <span style={{color: 'gray'}} className="fa-brands fa-github fa-2xl"></span>
                         </a>
                         <a href="https://t.me/raykar_jr">
                             <span style={{color: 'gray'}} className="fa-brands fa-telegram fa-2xl"></span>
                         </a>
                         <a href="https://www.linkedin.com/in/kiryl-azaranka-a45b6b25a/">
                             <span style={{color: 'gray'}} className="fa-brands fa-linkedin fa-2xl"></span>
                         </a>

                     </div>
                     <div className={s.copyright}>COPYRIGHT © 2023, ALL RIGHT RESERVED</div>
                 </div>
        </div>
    );
};

