import React from 'react';
import { motion } from 'framer-motion';

export default function BallCanvas({ imageUrl, delay }) {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: delay || 0 }} className="group relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-all duration-300"></div>
        <div className="relative flex items-center justify-center h-24 w-24 rounded-full bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-white/20 shadow-lg overflow-hidden transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-30"></div>
          <motion.div className="relative h-16 w-16 px-2" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <img src={imageUrl} alt="" className="w-full h-full object-contain drop-shadow-lg filter" />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}