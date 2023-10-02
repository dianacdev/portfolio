import './globals.css'
import type { Metadata } from 'next'
import { Trispace } from 'next/font/google'
import Navbar from '@/components/Navbar'
import {Toaster} from 'react-hot-toast';

const trispace = Trispace({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diana Cervantes',
  description: 'Diana Cervantes Portfolio. Showcasing some of my latest projects.',
  icons: 'favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type='image/svg+xml' href="../assets/DianaCLogo.svg"/>
        <meta name="keywords" content="developer, fullstack developer, graphic designer, web dev, automation testing, 3D Assets,  logo conversion, UI/UX, User Interface, User Experience, React, Javascript, Typescript, Python, Figma, Github,HTML,CSS,Blender, Illustrator,Adobe"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Diana | Portfolio"/>
        <meta property="og:image" content="/src/assets/DianaCLogo.svg"></meta>
        <meta property='og:url' content='https://www.dianacdev.com'/>
      </head>
      <body className={trispace.className}>
        <Toaster position='bottom-right' toastOptions={{duration:3000}}/>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
