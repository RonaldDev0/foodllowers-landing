'use client'

import { Card } from '@/components'

export default function Contacto () {
  return (
    <main>
      <Card>
        <h3>Contactenos</h3>
        <form onSubmit={e => e.preventDefault()}>
          <label>Correo</label>
          <input type='text' placeholder='ejemplo@123.com' />

          <label>Mensaje</label>
          <input type='text' />

          <button>Enviar</button>
        </form>
      </Card>
    </main>
  )
}
