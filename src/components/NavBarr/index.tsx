import Image from 'next/image'

import { ButtonLink } from './ButtonLink'
import { items } from './Links'

export function NavBarr () {
  return (
    <nav className='flex justify-center items-center [@media(min-width:800px)]:gap-4 bg-black p-3 rounded-lg border border-[#333333] fixed top-6'>
      <Image src='../../logo.svg' width='70' height='70' alt='logo' priority className='[@media(max-width:800px)]:hidden' />
      {items.map(({ href, label }) => <ButtonLink key={href} href={href}>{label}</ButtonLink>)}
    </nav>
  )
}
