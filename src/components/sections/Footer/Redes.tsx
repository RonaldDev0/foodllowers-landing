import Link from 'next/link'
import Image from 'next/image'

export function Redes () {
  const links = [
    {
      img: '../../../twitter.svg',
      path: 'https://www.twitter.com'
    },
    {
      img: '../../../linkedin.svg',
      path: 'https://www.linkedin.com/showcase/foodllowers/about/?viewAsMember=true'
    },
    {
      img: '../../../instagram.svg',
      path: 'https://www.instagram.com/foodllowers/'
    },
    {
      img: '../../../tiktok.svg',
      path: 'https://www.tiktok.com/@foodllowers'
    },
    {
      img: '../../../youtube.svg',
      path: 'https://www.youtube.com/@Foodllowers/featured'
    }
    // {
    //   img: '../../../facebook.svg',
    //   path: 'https://www.facebook.com'
    // }
  ]

  return (
    <div className='flex justify-center items-center gap-3'>
      {
        links.map(({ img, path }: { img: string, path: string }) => <Link key={path} href={path} target='_blank'><Image priority width='50' height='50' src={img} alt='redes' /></Link>)
      }
    </div>
  )
}
