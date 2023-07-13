import { ReactNode } from 'react'

export function ButtonLink ({ children, href }: { children: ReactNode, href: string }) {
  return (
    <a href={href} className='[@media(min-width:800px)]:text-base hover:bg-[#2A2A2A] p-2 rounded-md transition-all hover:text-red-600'>
      {children}
    </a>
  )
}
