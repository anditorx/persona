import { useGLTF } from '@react-three/drei'
import React from 'react'
import birdScene from '../assets/3D/bird.glb'

const Bird = () => {
    const bird = useGLTF(birdScene)
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
        <primitive object={bird.scene} />
    </mesh>
  )
}

export default Bird