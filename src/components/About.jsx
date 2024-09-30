import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div key={index} options={{ max: 45, scale: 1, speed: 450 }} className="w-1/4 bg-jetLight rounded-2xl p-8 flex flex-col justify-center items-center">
      <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      <h3 className="py-3 text-white text-xl font-bold text-center">{title}</h3>
    </div>
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

      <div className="p-2 mt-20 flex flex-row gap-10">
        {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service} />))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
