import React from 'react';
import styles from './styles.module.css';
import mac from '../../assets/mac1.png';
import { PiAngularLogo, PiCodeSimple } from 'react-icons/pi';
import { RiTeamLine } from 'react-icons/ri';
import { RiEnglishInput } from 'react-icons/ri';
import AudioPlayer from '../audio-player';
import whyAudio from '../../assets/why.m4a';

function Questionnaire() {
   return (
      <div className={styles.questionnaire}>
         <img src={mac} />
         <div className={styles.text}>
            <div className={styles.title}>
               <h2>
                  <span>Why</span> join the course?
               </h2>
               <AudioPlayer src={whyAudio} />
            </div>

            <ul>
               I got to know about your course through my friend, and here's why I want to enroll:
               <li>
                  <PiAngularLogo color="#2ec4b6" size="1.5em" />
                  <p>
                     I'd like to take my skills to the next level by learning <span>Angular</span>
                  </p>
               </li>
               <li>
                  <PiCodeSimple color="#2ec4b6" size="1.5em" />
                  <p>
                     I'd like to work on real <span>projects</span> and get feedback from mentors
                  </p>
               </li>
               <li>
                  <RiTeamLine color="#2ec4b6" size="1.5em" />
                  <p>It's an opportunity to work in a team of motivated students</p>
               </li>
               <li>
                  <RiEnglishInput color="#2ec4b6" size="1.5em" />
                  <p>
                     Advanced English, check out my {" "}
                     <span className={styles.cert}>
                        <a href="https://www.efset.org/cert/FxQ2d6" target="_blank">
                           Certificate
                        </a>
                     </span>
                  </p>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Questionnaire;
