import { Inicio, Nosotros, Contacto, Footer } from '@/components'

export default function Home () {
  return (
    <main className='flex flex-col justify-center items-center gap-[200px]'>
      <Inicio />
      <Nosotros />
      <Contacto />
      <Footer />
    </main>
  )
}
