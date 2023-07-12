import Image from 'next/image'
import { ButtonLink } from './ButtonLink'

type IItem = {
  href: string
  label: string
}

export function NavBarr () {
  const items: IItem[] = [
    {
      href: '#inicio',
      label: 'Inicio'
    },
    {
      href: '#nosotros',
      label: 'Nosotros'
    },
    {
      href: '#negocios',
      label: 'Negocios'
    },
    {
      href: '#contacto',
      label: 'Contacto'
    }
  ]

  return (
    <nav className='flex justify-center items-center [@media(min-width:800px)]:gap-4 bg-black p-3 rounded-lg border border-[#333333] fixed top-6'>
      <Image src='../../logo.svg' width='70' height='70' alt='logo' className='[@media(max-width:800px)]:hidden' />
      {items.map(({ href, label }) => <ButtonLink key={href} href={href}>{label}</ButtonLink>)}
    </nav>
  )
}
