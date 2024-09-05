import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="max-w-screen-sm h-screen mx-auto sm:border flex flex-col items-center justify-center text-center gap-10 p-5">
      <div className="text-black bg-green-500 rounded-xl flex flex-col items-center justify-center p-3">
        <h1 className='font-bold'>Párabens, seu acesso está liberado</h1>
        <p>Muita atenção agora!</p>
        
      </div>
      <div className='flex flex-col items-center justify-center gap-3 uppercase'>
        <div className='flex flex-col gap-1'>
        <h1 className='font-bold text-lg'>Primeiro passo:</h1>
        <h2>Faça seu cadastro abaixo:</h2>
        </div>
        <Image 
        src={'/logo.png'}
        width={200}
        height={200}
        quality={100}
        alt='Cadastre-se aqui'
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-3 uppercase'>
        <div className='flex flex-col gap-1'>
        <h1 className='font-bold text-lg'>Segundo passo:</h1>
        <h2>Assista abaixo para poder iniciar:</h2>
        </div>
        <div className=''>
        <iframe width="300" height="150" src="https://www.youtube.com/embed/k_Y1tDZoHps?si=J54VwSCkQhx2ktHy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}
