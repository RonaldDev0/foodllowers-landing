import Image from 'next/image'
import Link from 'next/link'

export function Inicio () {
  return (
    <section id='inicio' className='flex justify-center items-center gap-[200px] pt-[200px]'>
      <div className='flex flex-col items-start gap-4 [@media(max-width:800px)]:p-5'>
        <h2 className='max-w-[500px] font-semibold text-7xl'>Foodllowers</h2>
        <p className='max-w-[500px] text-2xl'>Influimos en tus comidas</p>
        <Link href='https://foodllowers.vercel.app' target='_blank' className='bg-red-600 hover:bg-red-400 transition-all p-3 rounded-lg cursor-pointer'>Visitar app</Link>
      </div>
      <Image src='../../logo.svg' width='350' height='0' alt='logo' priority />
    </section>
  )
}
