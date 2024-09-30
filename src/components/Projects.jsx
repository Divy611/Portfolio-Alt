import { styles } from '../styles'
import { github } from '../assets'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { textVariant, staggerContainer } from '../utils/motion'

const ProjectCard = ({ id, name, description, image, repo, demo, index, active, handleClick }) => {
  const cardVariants = {
    initial: { scale: 0.87, zIndex: 1 },
    animate: { scale: 1, zIndex: 2, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { scale: 0.87, zIndex: 1, transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  return (
    <motion.div variants={cardVariants} initial="initial" animate={active === id ? "animate" : "exit"} className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[420px] cursor-pointer card-shadow`} onClick={() => handleClick(id)}>
      <div className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full text-center opacity-[0.5] rounded-2xl"></div>
      <img src={image} alt={name} className="absolute w-full h-full object-cover rounded-2xl" />
      <div className={`absolute w-full h-full flex items-center break-words text-center justify-center ${active === id ? 'flex-col p-8' : 'text-white'}`}>
        {active !== id ? (
          <h3 className="font-extrabold text-center uppercase w-[200px] h-[30px] whitespace-nowrap sm:text-[27px] text-[18px] tracking-[1px]absolute break-words overflow-hidden z-1 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]w-fullleading-none z-20">
            {name}
          </h3>
        )
          : (
            <>
              <div className="absolute inset-0 flex justify-end m-3">
                <div onClick={() => window.open(repo, '_blank')} className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer sm:opacity-[0.9] opacity-[0.8]">
                  <img src={github} alt="source code" className="w-4/5 h-4/5 object-contain" />
                </div>
              </div>
              <div className="w-full">
                <h2 className="font-bold sm:text-[32px] text-[24px] text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
                  {name}
                </h2>
              </div>
              <p className="text-silver sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px]">
                {description}
              </p>
            </>
          )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} `}>Case Studies</p> */}
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        {/* <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p> */}
      </div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} active={active} handleClick={setActive} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
