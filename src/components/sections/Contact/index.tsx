'use client'

import { Card } from '@/components'

export function Contacto () {
  return (
    <section id='contact' className='[@media(max-width:800px)]:pt-[50px] pt-[120px]'>
      <Card>
        <h3 className='text-3xl font-semibold'>Contacto</h3>
        <form action='https://formsubmit.co/ronaldzamoradev@gmail.com' method='POST' className='flex flex-col justify-center '>
          <label className='mt-5 mb-2 text-gray-800 font-semibold'>Correo</label>
          <input name='Email' required className='outline-none bg-[#D9D9D9] p-2 rounded-lg [@media(max-width:800px)]:w-[350px] w-[400px]' type='email' placeholder='tucorreo@123.com' />

          <label className='mt-5 mb-2 text-gray-800 font-semibold'>Mensaje</label>
          <textarea name='Message' required className='outline-none bg-[#D9D9D9] p-2 rounded-lg [@media(max-width:800px)]:w-[350px] w-[400px] h-[300px]' />

          <div className='flex w-full justify-center items-center'>
            <button className='bg-[#FFC60B] hover:bg-[#000000] text-white text-xl font-semibold transition-all p-3 rounded-lg mt-5 w-28'>Enviar</button>
          </div>
          <input type='hidden' name='_next' value='localhost' />
          <input type='hidden' name='_captcha' value='false' />
        </form>
      </Card>
    </section>
  )
}
