import React from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card w-1/4">
      <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        A highly motivated and skilled Full-Stack Developer with hands-on experience across various roles in Software Development. Currently pursuing a Bachelor's in Electronics and Communications Engineering. I am passionate about technology, entrepreneurship, sports, and music.
        I like developing innovative solutions, and I am eager to contribute to impactful projects in a dynamic tech environment.
        I constantly look forward to new opportunities to apply my skills and acquire new ones. I look forward to meeting new people, and learn something new everyday.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 flex">

        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
