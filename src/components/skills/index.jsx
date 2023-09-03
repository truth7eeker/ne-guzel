import React from 'react';
import styles from './styles.module.css';
import Tagcloud from '../tag-cloud';
import AudioPlayer from '../audio-player';
import skillsAudio from '../../assets/skills.m4a'

function Skills() {

   return (
      <div className={styles.skills} id="skills">
         <div className={styles.text}>
            <div className={styles.title}>
               <h2><span>Skills</span>  and tools</h2>
               <AudioPlayer src={skillsAudio} />
            </div>
            <p>
               I'm comfortable working with <span>React</span> and <span>Vue</span> ecosystems, and
               looking to dive in Angular development. I take difficult programming tasks as a
               challenge to <span className={styles.underline}>overcome</span>.
            </p>
         </div>
         <Tagcloud />
      </div>
   );
}

export default Skills;
