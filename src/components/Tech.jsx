import { styles } from '../styles'
import { BallCanvas } from './canvas'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { textVariant } from '../utils/motion'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubTextLight} text-center tracking-wider`}>My skills</p>
        <h2 className={`${styles.sectionHeadTextLight} text-center`}>Technologies</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto mt-3"></div>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-12 mt-16">
        {technologies.map((technology, index) => (
          <div className="w-28 h-36 flex flex-col items-center" key={technology.name}>
            <BallCanvas imageUrl={technology.imageUrl} delay={index * 0.1} />
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }} className="mt-4 text-sm font-medium text-center opacity-80 group-hover:opacity-100 transition-all">{technology.name}</motion.p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
