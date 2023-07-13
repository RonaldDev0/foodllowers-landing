import { ReactNode } from 'react'

export function Card ({ children }: { children: ReactNode }) {
  return (
    <div className='flex-col flex justify-center items-center rounded-lg py-3 [@media(max-width:800px)]:px-3 px-10 bg-black border border-[#333333] max-w-4xl [@media(max-width:800px)]:max-w-72'>
      {children}
    </div>
  )
}
