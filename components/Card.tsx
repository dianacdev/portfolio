'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Tilt from 'react-parallax-tilt'

interface CardProps{
    projectName: string;
    description: string;
    tag1: string;
    tag2: string;
    tag3: string;
    tag1Color: string;
    tag2Color: string;
    tag3Color: string;
    sourceLink: string;
    liveLink: string;
    imageLink?: string;
}

const Card: React.FC<CardProps> = ({projectName,description,tag1,tag2,tag3,sourceLink,liveLink, imageLink, tag1Color,tag2Color,tag3Color}) => {
    return ( 
        <div className=''>
            <Tilt glareEnable={true} tiltMaxAngleX={20} gyroscope={true}
            tiltMaxAngleY={15} perspective={1000} 
            glareColor={"#fffeee"} className='bg-zinc-900 py-1 rounded-2xl w-full m-4 hover:cursor-pointer group'>
                    <div className='flex'>
                        <div className='bg-slate-950 w-full h-6 m-2 rounded-lg'/>
                        <div className='bg-slate-950 w-full h-6 m-2 rounded-lg'/>
                        <div className='bg-slate-950 w-full h-6 m-2 rounded-lg'/>
                        <div className='bg-slate-950 w-full h-6 m-2 rounded-lg'/>
                        <div className='bg-slate-950 w-full h-6 m-2 rounded-lg'/>
                        <div className='bg-slate-950 w-full h-6 m-2 rounded-lg'/>
                    </div>
                    <div className='relative w-full aspect-video bg-gradient-radial from-zinc-400 via-stone-500 to-gray-950 border-4 border-black'>
                        <Image src={imageLink || '/7-noise-texture-overlays-5.png'} alt='Project Image' width={300} height={500} className='w-full h-full'/>
                        <div className='bg-slate-950/80 w-full h-full absolute top-0 invisible group-hover:visible'>
                            <div className='flex mt-4 w-full'>
                                <h3 className='font-bold text-2xl ml-4 uppercase'>{projectName}</h3>
                                <div className=' absolute flex justify-end items-center right-0'>
                                    <Link href={sourceLink} className='bg-green-500 text-black mx-2 w-20 h-5 justify-center flex items-center rounded-full py-4 hover:scale-110 hover:bg-green-400'> GITHUB </Link>
                                    <Link href={liveLink} className='bg-red-600 mx-2 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-500'> REC </Link>
                                </div>
                            </div>
                            <p className='text-slate-400 font-light mt-3 ml-4'>{description}</p>
                            <div className='text-slate-100 font-light text-xs flex justify-end mr-2'>
                                <p className='absolute bottom-2'>Made with <span className={`${tag1Color}`}>{tag1}</span>, <span className={`${tag2Color}`}>{tag2}</span>, <span className={`${tag3Color}`}>{tag3}</span> and more.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='bg-slate-950 w-full h-6 m-2 rounded-lg'/>
                        <div className='bg-slate-950 w-full h-6 m-2 rounded-lg'/>
                        <div className='bg-slate-950 w-full h-6 m-2 rounded-lg'/>
                        <div className='bg-slate-950 w-full h-6 m-2 rounded-lg'/>
                        <div className='bg-slate-950 w-full h-6 m-2 rounded-lg'/>
                        <div className='bg-slate-950 w-full h-6 m-2 rounded-lg'/>
                    </div>
            </Tilt>
        </div>
         );
}
 
export default Card;