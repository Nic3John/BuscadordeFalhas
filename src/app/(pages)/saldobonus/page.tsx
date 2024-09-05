import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="max-w-screen-sm h-screen mx-auto sm:border flex flex-col items-center justify-center text-center gap-7 p-5 text-black">
      <div className="w-[90%] h-[90%] bg-yellow-400 rounded-xl flex flex-col gap-7 items-center justify-center p-3">
        <div className="flex flex-col items-center justify-center uppercase">
          <Image
            src={'/atencao.png'}
            width={100}
            height={100}
            alt="Atenção"
            quality={100}
          />
          <h1 className="font-bold text-3xl">Atenção!</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl">Saldo Bônus:</h1>
          <h2 className="font-bold text-4xl">R$ 72.88</h2>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <p>
            Para desbloquear seu saldo, é necessário a liberação de segurança.
          </p>

          <p className="text-base font-bold">
            Essa liberação é necessária para evitar{' '}
            <span className="text-red-700">fraudes e golpes</span>
          </p>
          <p className="text-sm font-bold">
            Mas fique tranquilo(a), você receberá esse saldo para utilizar em
            sua conta após a conclusão
          </p>
        </div>
        <Button className="w-full">Concluir Acesso</Button>
      </div>
    </div>
  )
}
