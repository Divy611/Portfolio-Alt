import { styles } from '../styles';
import { BallCanvas } from './canvas';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28 items-center" key={technology.name}>
            {/*<BallCanvas icon={technology.icon} />*/}
            <BallCanvas imageUrl={technology.imageUrl} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
