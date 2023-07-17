import Image from 'next/image'

export function SecondPart () {
  return (
    <div className='[@media(max-width:800px)]:my-3 text-center w-[90vw] flex flex-col justity-center items-center gap-28'>
      <h2 className='font-bold text-3xl [@media(max-width:800px)]:w-96 w-[1000px]'>“Mediante nuestro proceso innovador se puede tener una forma en la cual todos los involucrados en nuestra app ganen dinero haciendo lo que mejor saben hacer”</h2>
      <h3 className='font-bold text-2xl'>Nuestro proceso “Droppshipping”</h3>
      <Image src='../../../../images/modelo-droppshipping.svg' width='900' height='300' alt='imagen' priority />
    </div>
  )
}
