import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components'

export default function Home () {
  return (
    <main>
      <Link href='https://foodllowers.vercel.app' target='_blank'>
        <Card>
          <Image src='../../logo.svg' width='200' height='0' alt='logo' priority />
          <div className='flex flex-col gap-4 [@media(max-width:800px)]:p-5'>
            <p className='max-w-[500px] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit commodi voluptatibus amet molestias. Officia dolores, voluptate nihil, iste illo itaque unde iure distinctio, nostrum enim quos voluptatem quia quibusdam.</p>
            <p className='text-cyan-400'>Visitar app</p>
          </div>
        </Card>
      </Link>
    </main>
  )
}
