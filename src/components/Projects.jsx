import { styles } from '../styles'
import { github } from '../assets'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { textVariant, staggerContainer } from '../utils/motion'

const ProjectCard = ({ id, name, description, image, repo, active, handleClick, tags }) => {
  const cardVariants = {
    initial: { scale: 0.87, zIndex: 1 },
    animate: { scale: 1, zIndex: 2, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { scale: 0.87, zIndex: 1, transition: { duration: 0.5, ease: 'easeInOut' } }
  };
  const isActive = active === id;

  return (
    <motion.div variants={cardVariants} initial="initial" animate={isActive ? "animate" : "exit"} className={`relative ${isActive ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[420px]cursor-pointer card-shadow rounded-2xl overflow-hidden transition-all duration-500 ease-in-out hover:shadow-xl group`} onClick={() => handleClick(id)} role="button" aria-expanded={isActive} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleClick(id)}>
      <img src={image} alt={name} className={`absolute w-full h-full object-cover rounded-2xl  transition-transform duration-700 ${isActive ? 'scale-[1.05]' : 'group-hover:scale-[1.02]'}`} />
      <div className={`absolute top-0 left-0 z-10 h-full w-full rounded-2xl ${isActive ? 'bg-gradient-to-t from-night/90 via-night/70 to-night/50' : 'bg-night/50 group-hover:bg-night/60 transition-all duration-300'}`}></div>
      <div className={` absolute w-full h-full flex items-center text-center justify-center z-20 ${isActive ? 'flex-col p-8' : 'text-white'}`}>
        {!isActive
          ? <h3 className="font-extrabold text-center uppercase whitespace-nowrap sm:text-[27px] text-[18px] tracking-[1px] w-[200px] h-[30px] overflow-hidden lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0] lg:absolute text-white drop-shadow-lggroup-hover:text-yellow-50 transition-colors duration-300">{name}</h3>
          : <>
            <motion.div className="absolute inset-0 flex justify-end m-3" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.3 }}>
              <div onClick={(e) => { e.stopPropagation(); window.open(repo, '_blank'); }} className="bg-jetLight/90 sm:w-11 sm:h-11 w-10 h-10 rounded-fullflex justify-center items-center cursor-pointer hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-6 backdrop-blur-sm shadow-md" aria-label="View GitHub Repository">
                <img src={github} alt="GitHub" className="w-4/5 h-4/5 object-contain" />
              </div>
            </motion.div>
            <div className="flex flex-col items-center justify-center h-full max-w-full">
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="font-bold sm:text-[32px] text-[24px] text-white uppercase font-beckman sm:mt-0 -mt-[1rem] drop-shadow-lg mb-4 border-b-2 border-white/20 pb-2">{name}</motion.h2>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="bg-black/20 backdrop-blur-sm rounded-lg p-4  border border-white/10 shadow-inner w-full max-h-[250px] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20">
                <p className="text-gray-100 sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px]">{description}</p>
              </motion.div>
              {tags && tags.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="flex flex-wrap justify-center gap-2 mt-4 w-full">
                  {tags.map((tag, index) => <span key={`${id}-tag-${index}`} className={`px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm ${tag.color || 'text-white'}`}>{tag.name}</span>)}
                </motion.div>
              )}
            </div>
          </>
        }
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects</h2>
      </motion.div>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => <ProjectCard key={project.id} index={index} {...project} active={active} handleClick={setActive} />)}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
