import { ReactNode } from 'react'

export function Card ({ children, id }: { children: ReactNode, id: string }) {
  return (
    <div id={id} className='rounded-lg p-8 bg-black border border-[#333333] hover:border-white cursor-pointer max-w-4xl my-20'>
      {children}
    </div>
  )
}
