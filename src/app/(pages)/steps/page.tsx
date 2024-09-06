import React from 'react'

export default function page() {
  return (
    <div className="max-w-screen-sm mx-auto sm:border flex flex-col items-center justify-center text-center gap-5 p-5">
      <div className="text-black bg-green-500 rounded-xl flex flex-col items-center justify-center p-3">
        <h1 className="font-bold">Párabens, seu acesso está liberado</h1>
        <p>Muita atenção agora!</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 uppercase">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-lg">Primeiro passo:</h1>
          <h2>Faça seu cadastro abaixo:</h2>
        </div>
        <iframe
          width="350"
          height="650"
          src="https://placebet.pro/"
          title="PlaceBet website"
          className="rounded-xl"
        ></iframe>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 uppercase">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-lg">Segundo passo:</h1>
          <h2>Assista abaixo para poder iniciar:</h2>
        </div>
        <div className="">
          <iframe
            width="300"
            height="150"
            src="https://www.youtube.com/embed/k_Y1tDZoHps?si=J54VwSCkQhx2ktHy"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
