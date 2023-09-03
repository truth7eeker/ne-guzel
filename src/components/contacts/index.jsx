import React from 'react';
import styles from './styles.module.css';
import { PiTelegramLogoLight } from 'react-icons/pi';
import { CiMail } from 'react-icons/ci';

function Contacts() {
   return (
      <div className={styles.contacts} id="contacts">
         <h2>Let's talk, shoot me a message</h2>
         <div className={styles.icons}>
            <a href="https://t.me/Russian_Gangsta">
               <PiTelegramLogoLight color="#2ec4b6" size="3em" />
            </a>
            <a href="mailto: el__1997@mail.ru">
               <CiMail color="#2ec4b6" size="3em" />
            </a>
         </div>
      </div>
   );
}

export default Contacts;
