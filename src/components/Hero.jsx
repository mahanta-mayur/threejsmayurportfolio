import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const newBio = 'Currently a Masters student at Northeastern University, Boston graduating 🎓 in Spring 2024. With 2 years of experience in Python, SQL, JavaScript and a suite of Cloud services (AWS & Azure). My expertise & experience is centered around spearheading Data Engineering | Data Science | Data Analytics projects & pipelines at a petabyte scale, significantly enhancing business operations.';

  return (
    <section className="relative w-full h-screen flex flex-col items-start justify-center mx-auto px-4 md:px-16">
      <div className="flex-grow-0" style={{ flexBasis: '5%' }}></div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="z-10 flex-grow" // Adjust the percentage as needed
      >
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi! I am Mayur <span className="wave">👋</span> <span className={`${styles.heroSubText} text-white`}>Ex Data Engineer Abiomed | Ex Software Developer Ericsson</span>
        </h1>
        <motion.p
          className={`${styles.heroSubText} mt-4 text-white`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {newBio}
        </motion.p>
        <div className="mt-4">
          <p className={`${styles.heroSubText} text-white`}>Socials:</p>
          <div className='flex items-center gap-4'>
            {/* GitHub Icon */}
            <a href="https://github.com/mahanta-mayur" target="_blank" rel="noopener noreferrer" className='text-white hover:text-secondary'>
              <img src="src/assets/icons8-github.svg" alt="GitHub" style={{ width: '2em', height: '2em' }} />
            </a>
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/maymah/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-secondary'>
              <img src="src/assets/icons8-linkedin.svg" alt="LinkedIn" style={{ width: '2em', height: '2em' }} />
            </a>
            {/* Instagram Icon */}
            <a href="https://www.instagram.com/mayur_mahanta_/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-secondary'>
              <img src="src/assets/icons8-instagram.svg" alt="Instagram" style={{ width: '2em', height: '2em' }} />
            </a>
            {/* Tableau Icon */}
            <a href="https://public.tableau.com/app/profile/mayur.mahanta/vizzes" target="_blank" rel="noopener noreferrer" className='text-white hover:text-secondary'>
              <img src="src/assets/tableau-software.svg" alt="Tableau" style={{ width: '1.5em', height: '1.5em' }} />
            </a>
            {/* Kaggle Icon */}
            <a href="https://www.kaggle.com/mayurmahantaa" target="_blank" rel="noopener noreferrer" className='text-white hover:text-secondary'>
              <img src="src/assets/kaggle-icon.svg" alt="Kaggle" style={{ width: '1.5em', height: '1.5em' }} />
            </a>
          </div>
        </div>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
