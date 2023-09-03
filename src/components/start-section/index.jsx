import React, { useState, useEffect } from 'react';
import ParticlesComp from '../particles';
import styles from './styles.module.css';
import profilePic from '../../assets/profilePic.png';
import { Link } from 'react-scroll';
import { CiMenuBurger } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';

function StartSection() {
   const [tablet, setTablet] = useState(false);
   const [open, setOpen] = useState(false);

   const handleBurger = () => {
      if (open) {
         setOpen(false);
      } else {
         setOpen(true);
      }
   };

   useEffect(() => {
      if (window.innerWidth < 640) {
         setTablet(true);
      }
   }, []);

   return (
      <div className={styles.start}>
         <ParticlesComp />
         <header className={styles.header}>
            <div className={styles.logo}>{'ES'}</div>

            <nav className={styles.nav}>
               <ul style={{ display: (tablet && open) || !tablet ? 'flex' : 'none' }}>
                  <li onClick={handleBurger}>
                     <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration={500}>
                        Skills
                     </Link>
                  </li>
                  <li onClick={handleBurger}>
                     <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={500}>
                        Projects
                     </Link>
                  </li>
                  <li onClick={handleBurger}>
                     <Link
                        activeClass="active"
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}>
                        Contacts
                     </Link>
                  </li>
               </ul>
            </nav>
            <div
               className={styles.burger}
               onClick={handleBurger}
               style={{ display: tablet ? 'flex' : 'none' }}>
               {open ? <RxCross1 /> : <CiMenuBurger />}
            </div>
         </header>
         <div className={styles.profile}>
            <div className={styles.text}>
               <h2>Hello,</h2>
               <h2>
                  I'm <span>Elvira Safina</span>,
               </h2>
               <h2>Frontend Developer</h2>
               <p>
                  I love <span>coding</span>, travelling and learning new things.
               </p>
            </div>
            <div className={styles.img}>
               <img src={profilePic} />
            </div>
         </div>
      </div>
   );
}

export default StartSection;
