import { styles } from '../styles';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        {/* viewport={{ once: false, amount: 0.25 }} */}
        <span className="hash-span" id={idName}>&nbsp;</span>
        <Component />
      </motion.section>
    );
  }

  return HOC;
};

export default SectionWrapper;
