import { ReactNode } from 'react'

export function Card ({ children }: { children: ReactNode }) {
  return (
    <div className='[@media(max-width:800px)]:flex-col flex justify-center items-center gap-5 rounded-lg p-3 bg-black border border-[#333333] hover:border-white cursor-pointer max-w-4xl my-20'>
      {children}
    </div>
  )
}
