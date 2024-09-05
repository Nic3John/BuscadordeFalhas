import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export default function Header() {
  return (
    <div className=" w-full max-w-screen-sm flex items-center justify-between p-3 top-0 border-b capitalize">
      <Image
        src={'/logo.png'}
        width={120}
        height={50}
        alt="Logo ClickBet"
        quality={100}
      />

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 border px-3 py-2 rounded-xl">
          <h1 className="text-sm font-semibold">Saldo</h1>
          <Button className="text-base">R$ 13,25</Button>
        </div>
      </div>
    </div>
  )
}
