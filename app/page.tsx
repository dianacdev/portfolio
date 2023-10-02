import Image from 'next/image'
import WorkExperience from '@/components/WorkExperience'
import Overview from '@/components/Overview'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import StarsCanvas from '@/components/canvas/stars'
import Hero from '@/components/Hero'
import VHS from '@/components/VHS'

export default function Home() {
  return (
    <div>
          <Hero/>
      <div className='z-0 relative p-4'>
          <Overview/>
          <VHS/>
          <StarsCanvas/>
          <Projects/>
      </div>
      <Contact/>
      </div>
  )
}
