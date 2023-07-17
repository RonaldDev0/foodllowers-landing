import { ReactNode } from 'react'

export function ButtonLink ({ children, href }: { children: ReactNode, href: string }) {
  return (
    <a href={href} className='[@media(min-width:800px)]:text-base hover:bg-[#F87979] p-2 rounded-md transition-all hover:text-white'>
      {children}
    </a>
  )
}
