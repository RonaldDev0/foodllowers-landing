import { Redes } from './Redes'
import { Copyright } from './Copyright'

export function Footer () {
  return (
    <footer className='[@media(max-width:800px)]:w-[100VW] w-[99.5vw] h-96 [@media(max-width:800px)]:h-32 bg-[#333333] flex flex-col justify-center items-center'>
      <Redes />
      <Copyright />
    </footer>
  )
}
