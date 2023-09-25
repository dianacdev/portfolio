"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import VHS from './VHS';


const Overview = () => {
    return ( 
        <div className=' pt-20 pb-[20%] mx-[10%]'id="about">
            <div>
                <sub className="text-lg font-light text-slate-400" >INTRODUCTION.</sub>
                <h2 className="text-6xl" id="#about">Overview.</h2>
            </div>
            <p className="font-light text-slate-400 py-6 leading-relaxed w-[50%] xl:w-[60%] lg:w-[60%] md:w-[90%] sm:w-[100%] min-w-fit">
                I am a skilled Software Engineer, I love learning new programming languages and frameworks. In my free time I enjoy building web applications, making video games and much more. I also enjoy watching horror movies, hiking and solving treasure hunts.
             </p>
        </div>
     );
}
 
export default Overview;