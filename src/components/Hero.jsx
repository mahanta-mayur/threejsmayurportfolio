import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const text = 'Hi I am Mayur';
  const secondaryText = 'Full Stack Data Engineer';
  const tertiaryText = 'with a knack for AI, Cloud Computing & Gaming '; // Text to be animated

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#e52424]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {text.split(' ').map((word, wordIndex) => (
              <span key={wordIndex}>
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className={`typing-text ${
                      wordIndex === 3 ? 'text-[#e52424]' : ''
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + charIndex * 0.1, // Staggered delay for text
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {' '}
              </span>
            ))}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {secondaryText.split(' ').map((word, wordIndex) => (
              <span key={wordIndex}>
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className={`typing-text ${
                      charIndex === 0 && wordIndex === 0 ? 'text-white' : 'text-white'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + text.length * 0.1 + charIndex * 0.1, // Staggered delay after text
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {' '}
              </span>
            ))}
            <br className='sm:block hidden' />
            {tertiaryText.split(' ').map((word, wordIndex) => (
              <span key={wordIndex}>
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className={`typing-text ${
                      charIndex === 0 && wordIndex === 0 ? 'text-white' : 'text-white'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay:
                        0.99 + text.length * 0.1 + secondaryText.length * 0.01 + charIndex * 0.05, // Staggered delay after secondaryText (shortened delay)
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {' '}
              </span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 2.5, // Delay after tertiaryText
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
            </motion.span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-red-500 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

