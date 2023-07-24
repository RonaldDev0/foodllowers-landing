import { ReactNode } from 'react'

import { NavBarr } from '@/components'

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foodllowers | Landing Page',
  description: 'This is the landing page of Foodllowers'
}

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='w-full h-screen flex flex-col items-center'>
        <NavBarr />
        {children}
      </body>
    </html>
  )
}
