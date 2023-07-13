import { ReactNode } from 'react'

export function Card ({ children }: { children: ReactNode }) {
  return (
    <div className='flex-col flex justify-center items-center rounded-lg py-3 px-10 bg-black border border-[#333333] max-w-4xl'>
      {children}
    </div>
  )
}
