import { FirstPart } from './FirstPart'
import { SecondPart } from './SecondPart'

export function Nosotros () {
  return (
    <section id='nosotros' className='[@media(max-width:800px)]:pt-[50px] pt-[200px] w-[90vw] flex flex-col justify-center items-center gap-[300px]'>
      <FirstPart />
      <SecondPart />
    </section>
  )
}
