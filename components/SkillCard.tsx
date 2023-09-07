'use client'

import React from 'react';
import Tilt from 'react-parallax-tilt'


const SkillCard = () => {
    return ( 
        <Tilt glareEnable={false} tiltMaxAngleX={20} gyroscope={true}
            tiltMaxAngleY={15} perspective={1000} 
            glareColor={"#fffeee"} className='bg-zinc-900 py-1 rounded-2xl w-full h-1/2 m-4 hover:cursor-pointer'>
            <div className='aspect-[4/3]'>
                vhs mockup w/ star background. 3D interaction maybe with tilt or full 3d model?
            </div>
        </Tilt>
     );
}
 
export default SkillCard;

