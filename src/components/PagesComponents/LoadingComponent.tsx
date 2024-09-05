'use client'
import React, { useEffect, useState } from 'react'

export default function LoadingComponent() {
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Função para atualizar o progresso
    const updateProgress = () => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setLoading(false) // Para o carregamento ao atingir 100%
          return 100
        }
        return prevProgress + 1
      })
    }

    // Iniciar o intervalo para atualizar o progresso
    const intervalId = setInterval(updateProgress, 100) // Atualiza a cada 100ms

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId)
  }, [])

  // Função para calcular a rotação com base no progresso
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const rotation = `rotate(${(progress * 360) / 100}deg)`

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 text-center">
      <h1 className="text-2xl font-bold">Falta Pouco...</h1>
      <p className="mb-4">Você está entrando em uma área segura</p>

      {/* Círculo de carregamento */}
      <div className="relative w-24 h-24">
        <svg
          className="absolute top-0 left-0"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="gray"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="green" // Cor verde
            strokeWidth="10"
            fill="none"
            strokeDasharray="282.6" // Circunferência do círculo (2 * Math.PI * 45)
            strokeDashoffset={(282.6 * (100 - progress)) / 100}
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
        </svg>
      </div>

      {/* Exibindo a porcentagem do progresso */}
      <p className="mt-2 text-lg">{progress}%</p>

      {/* Exibir mensagem quando o carregamento estiver concluído */}
      {!loading && (
        <p className="text-green-500 mt-4">Carregamento concluído!</p>
      )}
    </div>
  )
}
