import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/utils'
import { Toolbar, Fade } from '@mui/material'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'League of Information Technology',
  description: 'Final Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" sizes="any" />
      <body className={inter.className}>
        <Fade in={true} timeout={1000}>
          <div>
            <Navbar />
            <div className='px-5 xl:px-52 lg:px-28 md:px-20 sm:px-12 overflow-auto'>
              <Toolbar />
              <Toolbar />
              {children}
            </div>
          </div>
        </Fade>
      </body>
    </html>
  )
}
