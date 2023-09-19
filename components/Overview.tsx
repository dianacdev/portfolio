"use client";
import SkillCard from "./SkillCard";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import {Mesh} from "three";

export function SQL(props:any) {
    const { nodes, materials } = useGLTF('./models/SQLvhs.glb')
    return (
        <group {...props} dispose={null}>
        <group position={[0, 1, 0]} scale={[10,10,10]}>
          <mesh geometry={nodes.Mesh.geometry} material={materials['Outside, Box']} />
          <mesh geometry={nodes.Mesh_1.geometry} material={materials['Inside, Box']} />
        </group>
      </group>
    )
  }
  
  export function Python(props:any) {
    const { nodes, materials } = useGLTF('./models/Pythonvhs.glb')
    return (
      <group {...props} dispose={null}>
        <group position={[0, 1, 0]} scale={[10.5,10.5,10.5]}>
          <mesh geometry={nodes.Mesh.geometry} material={materials['Outside, Box']} />
          <mesh geometry={nodes.Mesh_1.geometry} material={materials['Inside, Box']} />
        </group>
      </group>
    )
  }

  export function Typescript(props:any) {
    const { nodes, materials } = useGLTF('./models/Typescriptvhs.glb')
    return (
      <group {...props} dispose={null}>
        <group position={[0, 1, 0]} scale={[10,10,10]}>
          <mesh geometry={nodes.Mesh.geometry} material={materials['Outside, Box']} />
          <mesh geometry={nodes.Mesh_1.geometry} material={materials['Inside, Box']} />
        </group>
      </group>
    )
  }
  export function React(props:any) {
    const { nodes, materials } = useGLTF('./models/Reactvhs.glb')
    return (
      <group {...props} dispose={null}>
        <group position={[0, 1, 0]} scale={[10,10,10]}>
          <mesh geometry={nodes.Mesh.geometry} material={materials['Outside, Box']} />
          <mesh geometry={nodes.Mesh_1.geometry} material={materials['Inside, Box']} />
        </group>
      </group>
    )
  }
  
  useGLTF.preload('./models/Reactvhs.glb')
  useGLTF.preload('./models/Typescriptvhs.glb')
  useGLTF.preload('./models/Pythonvhs.glb')
  useGLTF.preload('./models/SQLvhs.glb')
  

const Overview = () => {
    return ( 
        <div className=' pt-20 pb-[20%] mx-[10%]'id="about">
            <div>
                <sub className="text-lg font-light text-slate-400" >INTRODUCTION.</sub>
                <h2 className="text-6xl" id="#about">Overview.</h2>
            </div>
            <p className="font-light text-slate-400 w-[60%] py-6 leading-relaxed">
                I am a skilled Software Engineer, I love learning new programming languages and frameworks. In my free time I enjoy building web applications, making video games and much more. I also enjoy watching horror movies, hiking and solving treasure hunts.
             </p>
            <div className="h-[500px]">                
                <div className="flex flex-cols-5 gap-1 pt-12 h-screen">
                    <Canvas>
                            <OrbitControls position={[0,1,0]} autoRotate={true} autoRotateSpeed={1} enableZoom={false}/>
                            <ambientLight intensity={2}/>
                            <pointLight position={[5,5,5]}/>
                            <SQL/>
                    </Canvas>
                    <Canvas>
                            <OrbitControls position={[0,1,0]} autoRotate={true} autoRotateSpeed={1} enableZoom={false}/>
                            <ambientLight intensity={2}/>
                            <pointLight position={[5,5,5]}/>
                            <Python/>
                    </Canvas>
                    <Canvas>
                            <OrbitControls position={[0,1,0]} autoRotate={true} autoRotateSpeed={1} enableZoom={false}/>
                            <ambientLight intensity={2.5}/>
                            <pointLight position={[5,5,5]}/>
                            <React/>
                    </Canvas>
                    <Canvas>
                            <OrbitControls position={[0,1,0]} autoRotate={true} autoRotateSpeed={1} enableZoom={false}/>
                            <ambientLight intensity={2.5}/>
                            <pointLight position={[5,5,5]}/>
                            <Typescript/>
                    </Canvas>
                </div>
            </div>

        </div>
     );
}
 
export default Overview;