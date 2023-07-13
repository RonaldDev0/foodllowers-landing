'use client'

import { Card } from '@/components'

export function Contacto () {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert('Todavia no tenemos esto programado, no sea pato mi perro')
  }

  return (
    <section id='contacto' className='pt-[120px]'>
      <Card>
        <h3 className='text-3xl font-semibold'>Contacto</h3>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center '>
          <label className='mt-5 mb-2 text-gray-400'>Correo</label>
          <input className='outline-none bg-[#333333] p-2 rounded-lg w-[400px]' type='text' placeholder='tucorreo@123.com' />

          <label className='mt-5 mb-2 text-gray-400'>Mensaje</label>
          <textarea className='outline-none bg-[#333333] p-2 rounded-lg w--[400px] h-[300px]' />

          <div className='flex w-full justify-center items-center'>
            <button className='bg-red-600 hover:bg-red-400 transition-all p-3 rounded-lg mt-5 w-28'>Enviar</button>
          </div>
        </form>
      </Card>
    </section>
  )
}
