import { useGLTF } from '@react-three/drei'
import React from 'react'
import planeScene from '../assets/3D/plane.glb'

const Plane = () => {
    const {scene, animation} = useGLTF(planeScene)
  return (
    <mesh>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane