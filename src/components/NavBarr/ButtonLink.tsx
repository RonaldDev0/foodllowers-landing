import Link from 'next/link'
import { ReactNode } from 'react'

export function ButtonLink ({ children, href }: { children: ReactNode, href: string }) {
  return (
    <Link href={href} className='[@media(min-width:800px)]:text-xl hover:bg-[#2A2A2A] p-2 rounded-md transition-all'>
      {children}
    </Link>
  )
}
