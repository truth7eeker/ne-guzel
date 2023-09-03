import React from 'react';
import styles from './styles.module.css';
import organicFood from '../../assets/organic-food.jpg';
import awesomeMail from '../../assets/awesome-mail.jpg';
import currencyApp from '../../assets/currency-app.jpg';
import todoApp from '../../assets/todo-app.jpg'

function Portfolio() {
   return (
      <div className={styles.portfolio} id="projects">
         <div className={styles.text}>
            <h2>Take a look at what I've created</h2>
            
               <a href="https://github.com/truth7eeker?tab=repositories" target="_blank">
                  <button>See more</button>
               </a>
           
         </div>
         <div className={styles.grid}>
            <a href="https://truth7eeker.github.io/organic-food/" target="_blank">
               <img src={organicFood} />
            </a>

            <a href="https://truth7eeker.github.io/mail-service" target="_blank">
               <img src={awesomeMail} />
            </a>

            <a href="https://truth7eeker.github.io/currency-app" target="_blank">
               <img src={currencyApp} />
            </a>

            <a href="https://truth7eeker.github.io/todo-app/" target="_blank">
               <img src={todoApp} />
            </a>
         </div>
      </div>
   );
}

export default Portfolio;
