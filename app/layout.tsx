import './globals.css'
import type { Metadata } from 'next'
import { Trispace } from 'next/font/google'
import Navbar from '@/components/Navbar'
import {Toaster} from 'react-hot-toast';

const trispace = Trispace({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diana Cervantes',
  description: 'Diana Cervantes portfolio. Showcasing some of the latest projects, they have completed.',
  icons: 'DianaCLogo.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={trispace.className}>
        <Toaster position='bottom-right' toastOptions={{duration:3000}}/>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
