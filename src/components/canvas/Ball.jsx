import { motion } from 'framer-motion';
import React, { Suspense } from 'react';
//import { Canvas } from '@react-three/fiber';
//import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

export default function BallCanvas({ imageUrl, delay }) {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: delay }} className='bord items-center rounded-lg py-4'>
        <motion.div className='h-24 w-24 px-2'>
          <img src={imageUrl} alt="" />
        </motion.div>
      </motion.div>
    </>
  )
}


// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);
//   return (
//     <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 2]} />
//         <meshStandardMaterial color="#3d3d3d" polygonOffset polygonOffsetFactor={-5} flatShading />
//         <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading map={decal} />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
//       <Suspense fallback={<Loader />}>
//         <OrbitControls enableZoom={false} position0={0} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;
