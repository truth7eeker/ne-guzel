import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';
import styles from './styles.module.css';

function Tagcloud() {
   const container = '.tagcloud-content';
   const texts = [
      'HTML',
      'CSS',
      'SASS',
      'JavaScript',
      'React',
      'Redux Toolkit',
      'Vue',
      'NodeJS',
      'Express',
      'ES6',
      'GIT',
      'GITHUB',
      'Figma',
      'MongoDB',
   ];

   const optionsDesktop = {
      radius: 200,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
   };

   const optionsMobile = {
      radius: 150,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
   };

   useEffect(() => {
      if (window.innerWidth < 480) {
         TagCloud(container, texts, optionsMobile);
      } else {
         TagCloud(container, texts, optionsDesktop);
      }
   }, []);

   return (
      <div className={styles.tagcloud__container}>
         <span className="tagcloud-content"></span>
      </div>
   );
}

export default Tagcloud;
