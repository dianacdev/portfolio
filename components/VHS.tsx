"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export function SQL(props:any) {
    const { nodes, materials } = useGLTF('./models/SQLvhs.glb')
    return (
        <group {...props} dispose={null}>
        <group position={[0, -2, 0]} scale={10}>
          <mesh geometry={nodes.Mesh.geometry} material={materials['Outside, Box']}/>
          <mesh geometry={nodes.Mesh_1.geometry} material={materials['Inside, Box']} />
        </group>
      </group>
    )
  }
  
  export function Python(props:any) {
    const { nodes, materials } = useGLTF('./models/Pythonvhs.glb')
    return (
      <group {...props} dispose={null}>
        <group position={[0, -2, 0]} scale={10}>
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
        <group position={[0, -2, 0]} scale={10}>
          <mesh geometry={nodes.Mesh.geometry} material={materials['Outside, Box']}/>
          <mesh geometry={nodes.Mesh_1.geometry} material={materials['Inside, Box']} />
        </group>
      </group>
    )
  }
  export function React(props:any) {
    const { nodes, materials } = useGLTF('./models/Reactvhs.glb')
    return (
      <group {...props} dispose={null}>
        <group position={[0, -2, 0]} scale={10}>
          <mesh geometry={nodes.Mesh.geometry} material={materials['Outside, Box']}/>
          <mesh geometry={nodes.Mesh_1.geometry} material={materials['Inside, Box']} />
        </group>
      </group>
    )
  }

  useGLTF.preload('./models/Reactvhs.glb')
  useGLTF.preload('./models/Typescriptvhs.glb')
  useGLTF.preload('./models/Pythonvhs.glb')
  useGLTF.preload('./models/SQLvhs.glb')

const VHS = () => {
    return ( 
        <div className=" ml-[10%] mt-[-110%] xl:mt-[-45%] lg:mt-[-60%] md:mt-[-80%] sm:mt-[-90%] snap-x mb-[10%]">
            <div class="reel" >
                <div className="w-[50vw] h-full overflow-x-hidden snap-center" >
                    <Canvas dpr={[1,4]}>
                            <OrbitControls position={[0,0,0]}enableZoom={false} autoRotate={true} />
                            <ambientLight intensity={2}/>
                            <pointLight position={[5,5,5]}/>
                            <SQL/>
                    </Canvas>
                </div>
                <div className="w-[50vw] h-full overflow-x-hidden snap-center">
                    <Canvas dpr={[1,4]}>
                            <OrbitControls position={[0,0,0]} autoRotate={true} autoRotateSpeed={1} enableZoom={false}/>
                            <ambientLight intensity={2}/>
                            <pointLight position={[5,5,5]}/>
                            <Python />
                    </Canvas>
                </div>
                <div className="w-[50vw] h-full overflow-x-hidden snap-center">
                    <Canvas dpr={[1,4]}>
                            <OrbitControls position={[0,0,0]} autoRotate={true} autoRotateSpeed={1} enableZoom={false}/>
                            <ambientLight intensity={2.5}/>
                            <pointLight position={[5,5,5]}/>
                            <React/>
                    </Canvas>
                </div>
                <div className="w-[50vw] h-full overflow-x-hidden snap-center">
                    <Canvas dpr={[1,4]}>
                            <OrbitControls position={[0,0,0]} autoRotate={true} autoRotateSpeed={1} enableZoom={false}/>
                            <ambientLight intensity={2.5}/>
                            <pointLight position={[5,5,5]}/>
                            <Typescript/>
                    </Canvas>
                </div>
            </div>
        </div>
     );
}
 
export default VHS;