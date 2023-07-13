import Image from 'next/image'
import Link from 'next/link'

export function Inicio () {
  return (
    <section id='inicio' className='flex [@media(max-width:800px)]:flex-col justify-center items-center [@media(max-width:800px)]:gap[80px] gap-[200px] [@media(max-width:800px)]:pt-[50px] pt-[200px]'>
      <div className='flex flex-col items-start gap-4 [@media(max-width:800px)]:p-5 [@media(max-width:800px)]:pt-[100px]'>
        <h2 className='max-w-[500px] font-semibold [@media(max-width:800px)]:text-4xl text-7xl'>Foodllowers</h2>
        <p className='max-w-[500px] [@media(max-width:800px)]:text-lg text-2xl'>Influimos en tus comidas</p>
        <Link href='https://foodllowers.vercel.app' target='_blank' className='bg-red-600 hover:bg-red-400 transition-all p-3 rounded-lg cursor-pointer'>Visitar app</Link>
      </div>
      <Image className='[@media(max-width:800px)]:w-[250px]' src='../../logo.svg' width='350' height='0' alt='logo' priority />
    </section>
  )
}
