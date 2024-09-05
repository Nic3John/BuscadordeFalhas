'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

export default function FalhaEncontrada() {
  const [isChecking, setIsChecking] = useState(false)
  const [found, setFound] = useState(false)

  const handleCheckClick = () => {
    setIsChecking(true)

    // Gera um tempo aleatório entre 5 e 15 segundos (5000ms a 15000ms)
    const randomTime = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000

    setTimeout(() => {
      setIsChecking(false)
      setFound(true)
    }, randomTime)
  }

  return (
    <>
      {!found ? (
        <div className="w-full flex flex-col gap-3 items-center justify-center uppercase p-3 ">
          <h1 className="text-3xl font-bold text-center">
            Experimente Nosso Sistema na Prática!
          </h1>
          <div className="flex flex-col items-center justify-center gap-10">
            {!isChecking ? (
              <div className="">
                <button
                  onClick={handleCheckClick}
                  className="flex flex-col bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 p-3 rounded-xl text-center min-w-sm"
                >
                  Encontrar Falhas
                </button>
              </div>
            ) : (
              <div className="flex flex-col bg-destructive text-destructive-foreground shadow-sm p-3 rounded-xl text-center min-w-sm">
                Verificando Falhas...
                <div className="animate-pulse text-3xl mt-3">...</div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-3 items-center justify-center uppercase p-3 ">
          <h1 className="text-3xl font-bold text-center">
            Agora Vamos Utilizar o Sistema
          </h1>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="">
              <Link href="#" className="">
                <div className="flex flex-col bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 p-3 rounded-xl text-center min-w-sm">
                  Falha Encontrada,
                  <p>Clique e Jogue Agora</p>
                </div>
              </Link>
            </div>
            <div className="">
              <Image
                src={'/fortunerabbit.jpg'}
                width={250}
                height={250}
                alt="Jogo que encontramos a falha"
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
