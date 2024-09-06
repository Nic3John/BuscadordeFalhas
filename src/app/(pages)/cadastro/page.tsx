'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Page() {
  const [activeButton, setActiveButton] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [telefone, setTelefone] = useState('')
  const [erroTelefone, setErroTelefone] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Função para ativar o botão clicado
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex)
    setInputValue('') // Limpa o input ao trocar de tipo de chave
    setErrorMessage('') // Limpa qualquer erro ao trocar de tipo de chave
  }

  // Função para formatar e validar o CPF
  const handleCpfChange = (e) => {
    let cpf = e.target.value.replace(/\D/g, '') // Remove tudo que não for número
    if (cpf.length <= 11) {
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    }
    setInputValue(cpf)

    if (submitted) {
      // Validação simples para CPF
      if (cpf.length === 14) {
        setErrorMessage('') // CPF válido
      } else {
        setErrorMessage('CPF inválido')
      }
    }
  }

  // Função para formatar e validar o número de celular
  const handleCelularChange = (e) => {
    let celular = e.target.value.replace(/\D/g, '') // Remove tudo que não for número
    if (celular.length <= 11) {
      celular = celular.replace(/(\d{2})(\d)/, '($1) $2')
      celular = celular.replace(/(\d{5})(\d)/, '$1-$2')
    }
    setInputValue(celular)

    if (submitted) {
      // Validação simples para celular
      if (celular.length === 15) {
        setErrorMessage('') // Celular válido
      } else {
        setErrorMessage('Número de celular inválido')
      }
    }
  }

  // Função para validar o email
  const handleEmailChange = (e) => {
    const email = e.target.value
    setInputValue(email)

    if (submitted) {
      // Validação simples para email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (emailRegex.test(email)) {
        setErrorMessage('') // Email válido
      } else {
        setErrorMessage('Email inválido')
      }
    }
  }

  // Função para lidar com as mudanças no input dependendo do tipo selecionado
  const handleInputChange = (e) => {
    if (activeButton === 1) {
      handleCpfChange(e) // CPF
    } else if (activeButton === 2) {
      handleCelularChange(e) // Celular
    } else if (activeButton === 3) {
      handleEmailChange(e) // Email
    }
  }

  // Função para validar o telefone e a chave pix quando clicar em "Resgatar Acesso"
  const handleTelefoneChange = (e) => {
    const valor = e.target.value
    const telefoneRegex = /^(\d{2})(\d{8,9})$/
    const somenteNumeros = valor.replace(/\D/g, '')

    if (telefoneRegex.test(somenteNumeros)) {
      setErroTelefone('')
    } else {
      setErroTelefone('Número de telefone inválido. Ex: (11) 99999-9999')
    }

    setTelefone(somenteNumeros)
  }

  // Função chamada ao clicar em "Resgatar Acesso"
  const handleSubmit = () => {
    setSubmitted(true)

    // Revalidar inputValue ao clicar no botão
    if (activeButton === 1 && inputValue.length !== 14) {
      setErrorMessage('CPF inválido')
    } else if (activeButton === 2 && inputValue.length !== 15) {
      setErrorMessage('Número de celular inválido')
    } else if (
      activeButton === 3 &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)
    ) {
      setErrorMessage('Email inválido')
    } else {
      setErrorMessage('') // Tudo válido
    }
  }

  return (
    <div className="max-w-screen-sm h-screen mx-auto sm:border flex flex-col items-center justify-center uppercase text-center gap-7 p-5">
      <Image
        src={'/logo.png'}
        width={200}
        height={200}
        quality={100}
        alt="Logo ClickBet"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-base">Chegou a hora de faturar de verdade</h1>
        <h2 className="text-xl font-semibold">
          Cadastre corretamente para receber o seu acesso imediatamente
        </h2>
      </div>
      <div className="w-full flex flex-col gap-3">
        {/* Campo de telefone */}
        <Input
          className="w-full"
          type="tel"
          id="telefone"
          required
          placeholder="Digite seu Whatsapp aqui"
          value={telefone}
          onChange={handleTelefoneChange}
        />
        {erroTelefone && <p className="text-red-500">{erroTelefone}</p>}

        {/* Seletor de tipo de chave PIX */}
        <h1>Selecione o tipo de chave:</h1>
        <div className="flex items-center justify-center w-full gap-3">
          <Button
            onClick={() => handleButtonClick(1)}
            className={`p-4 ${activeButton === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} duration-300`}
          >
            CPF
          </Button>

          <Button
            onClick={() => handleButtonClick(2)}
            className={`p-4 ${activeButton === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} duration-300`}
          >
            CELULAR
          </Button>

          <Button
            onClick={() => handleButtonClick(3)}
            className={`p-4 ${activeButton === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} duration-300`}
          >
            EMAIL
          </Button>
        </div>

        {/* Input de chave PIX */}
        <Input
          className="w-full"
          type="text"
          placeholder={
            activeButton === 1
              ? 'Digite seu CPF aqui'
              : activeButton === 2
                ? 'Digite seu celular aqui'
                : 'Digite seu email aqui'
          }
          value={inputValue}
          onChange={handleInputChange}
        />
        {submitted && errorMessage && (
          <p className="text-red-500">{errorMessage}</p>
        )}

        <Button className="w-full" onClick={handleSubmit}>
          Resgatar Acesso
        </Button>
      </div>
    </div>
  )
}
