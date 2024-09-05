import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function page() {
  return (
    <div className="max-w-screen-sm h-screen mx-auto sm:border flex flex-col items-center justify-center text-center gap-6 p-5">
      <div className="text-black bg-yellow-400 rounded-xl flex flex-col items-center justify-center p-2">
        <h1 className="text-2xl font-bold">
          Finalize seu cadastro para utilizar o sistema!!!
        </h1>
        <p className="text-xl font-base">e fazer de R$ 200 a R$400 por dia.</p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col items-start gap-1.5">
          <Label htmlFor="name">Seu Nome</Label>
          <Input className="w-full h-5" type="name" id="name" />
        </div>
        <div className="w-full flex flex-col items-start gap-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input className="w-full h-5" type="email" id="email" />
        </div>
        <div className="w-full flex flex-col items-start gap-1.5">
          <Label htmlFor="cpf">CPF OU CNPJ</Label>
          <Input className="w-full h-5" type="cpf" id="cpf" />
        </div>
      </div>
      <div className="text-xs flex flex-col gap-2">
        <p>1- Pagamento em segundos, sem complicação</p>
        <p>
          2- Basta escanear com o aplicativo do seu banco o QRcode que iremos
          gerar para sua compra.
        </p>
        <p>
          3- O PIX foi desenvolvido pelo Banco Central para facilitar suas
          compras e é 100% seguro.
        </p>
        <h1 className="text-base font-bold">TOTAL: R$ 19,90</h1>
      </div>
      <div className="border-2 p-2 flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <h1 className=" bg-red-700 rounded-full flex items-center justify-center text-2xl p-1.5 font-bold text-black">
            3x
          </h1>
          <div className="uppercase">
            <h1 className="">Aumente 3x seu resultado</h1>
            <h2>Por mais apenas - 27,80</h2>
          </div>
        </div>
        <p className='text-[9px]'>Você terá resultados 3x mais rápidos e ganhos ilimitados</p>
      </div>
      <Button className='w-full uppercase'>Finalizar Cadastro</Button>
    </div>
  )
}
