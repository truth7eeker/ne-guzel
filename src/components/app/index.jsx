import Portfolio from '../portfolio';
import Questionnaire from '../questionnaire';
import Skills from '../skills';
import StartSection from '../start-section';
import Contacts from '../contacts'
import styles from './styles.module.css';

function App() {
   return (
      <div className={styles.app}>
         <StartSection />
         <Skills />
         <Questionnaire />
         <Portfolio />
         <Contacts />
      </div>
   );
}

export default App;
