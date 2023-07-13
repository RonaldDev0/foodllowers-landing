import { Card } from '@/components'

export function Nosotros () {
  return (
    <section id='nosotros' className='[@media(max-width:800px)]:pt-[50px] pt-[200px]'>
      <Card>
        <h3 className='text-2xl font-semibold'>Nosotros</h3>
        <p className='pt-5 pb-5'>Somos una plataforma innovadora en la cual ayudamos a influencers a monetizar sus redes sociales por medio de la creacion de una linea negocio con cocinas ocultas y deliverys, apostando por un modelo dropshiping en el cual todos tendremos una forma de ganar en este modelo.</p>
      </Card>
    </section>
  )
}
