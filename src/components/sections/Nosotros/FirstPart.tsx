import Image from 'next/image'

function Banner () {
  return (
    <div className='[@media(max-width:800px)]:flex-col flex justity-center items-center gap-10'>
      <Image src='../../../../images/banner.svg' width='300' height='300' alt='banner' priority />
      <h3 className='[@media(max-width:800px)]:w-96 w-[700px] [@media(max-width:800px)]:text-xl text-3xl font-medium'>En foodllowers, somos un equipo apasionado y dedicado que busca transformar la forma en que los influencers y las marcas de alimentos interactuan con sus seguidores.</h3>
    </div>
  )
}

function Content () {
  const items = [
    {
      img: '../../../../images/influeuncers.svg',
      text: 'Proponerle a influencers crear un menu basado en su marca personal como nueva forma de monetizar'
    },
    {
      img: '../../../../images/cocina.svg',
      text: 'Ayudarles a las cocinas ocultas llegar a su punto de equilbrio por medio de las ordenes que traigan influencers'
    },
    {
      img: '../../../../images/seguidores.svg',
      text: 'A todos los seguidores que son amantes de la comida les brindamos una experiencia gastronomica unica y diferente en foodllowers'
    }
  ]

  return (
    <div className='[@media(max-width:800px)]:flex-col flex justity-center items-center gap-28'>
      {
        items.map(({ img, text }: { img: string, text: string }) => (
          <div key={img} className='flex flex-col justify-center items-center'>
            <Image src={img} width='150' height='300' alt='imagen' priority />
            <p className='w-96 font-semibold text-xl'>{text}</p>
          </div>
        ))
      }
    </div>
  )
}

export function FirstPart () {
  return (
    <div className='[@media(max-width:800px)]:my-5 w-[90vw] text-center flex flex-col justify-center items-center gap-20'>
      <Banner />
      <h2 className='font-bold text-4xl'>¿Que hacemos?</h2>
      <Content />
    </div>
  )
}
