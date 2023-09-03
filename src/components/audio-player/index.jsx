import React, { useState, useRef, useEffect } from 'react';
import { CiPlay1, CiPause1 } from 'react-icons/ci';
import styles from './styles.module.css'

function AudioPlayer({ src }) {
   const [play, setPlay] = useState(false);
   const audioRef = useRef(null);

   const toggleAudio = () => {
      if (play) {
         audioRef.current.pause();
         setPlay(false);
      } else {
         audioRef.current.play();
         setPlay(true);
      }
   };

 
   return (
      <>
         <div className={styles.audio__icon} onClick={toggleAudio}>
            {play ? (
               <CiPause1 color="#2ec4b6" size="1.2em" />
            ) : (
               <CiPlay1 color="#2ec4b6" size="1.2em" />
            )}
         </div>
         <audio src={src} ref={audioRef} onEnded={() => setPlay(false)}/>
      </>
   );
}

export default AudioPlayer;
