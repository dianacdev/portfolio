import Image from 'next/image'
import WorkExperience from '@/components/WorkExperience'
import Overview from '@/components/Overview'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import StarsCanvas from '@/components/canvas/stars'


export default function Home() {
  return (
    <div>
     <div className='mx-[10%] mt-[8%]'>

        <div className='relative w-full h-screen mx-auto'>
          {/* <div className='absolute w-[20%] h-5 bg-green-500/30 right-5 animate-pulse'/>
          <div className='absolute w-[40%] h-5 bg-green-500/30 right-[100px] top-[150px] animate-pulse'/>
          <div className='absolute w-[40%] h-5 bg-emerald-700/30 right-10 top-[280px] animate-pulse'/>
          <div className='absolute w-[60%] h-5 bg-lime-500/30 right-[100px] top-[250px] animate-pulse'/>
          <div className='absolute w-[80%] h-5 bg-lime-500/30 right-20 top-[420px] animate-pulse'/>

          <div className='absolute w-[20%] h-5 bg-green-500/30 left-[225px] top-[490px] animate-pulse'/>
          <div className='absolute w-[40%] h-5 bg-green-500/1 0 left-[100px] top-[220px] animate-pulse'/>
          <div className='absolute w-[40%] h-5 bg-emerald-700/30 left-10 top-[450px] animate-pulse'/>
          <div className='absolute w-[60%] h-5 bg-lime-500/30 left-[100px] top-[350px] animate-pulse'/>
          <div className='absolute w-[80%] h-5 bg-emerald-600/30 left-20 top-[320px] animate-pulse'/> */}

            <div className='bg-header-pattern bg-cover bg-no-repeat bg-center'>
            <h1 className='text-6xl'>Hello, I&apos;m <span className='text-green-500'>Diana.</span></h1>
            <sub className='text-lg font-light text-slate-400 mt-2'>
              Creating User Interfaces, Web Applications and more since 2017.
            </sub>
            </div>
        </div>
      </div>
      <div className='z-0 relative p-4'>
          <Overview/>
          <StarsCanvas/>
          <Projects/>
      </div>
      <Contact/>
    </div>

  )
}
