import { ButtonLink } from './ButtonLink'
import { items } from './Links'

export function NavBarr () {
  return (
    <nav className='flex justify-center items-center [@media(min-width:800px)]:gap-4  p-1 rounded-lg bg-white border border-[#333333] fixed top-6 [@media(max-width:800px)]:top-2 [@media(min-width:800px)]:right-72'>
      {items.map(({ href, label }) => <ButtonLink key={href} href={href}>{label}</ButtonLink>)}
    </nav>
  )
}
