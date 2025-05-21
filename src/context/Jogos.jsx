import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const JogosContext = createContext({})

export default function JogosProvider({ children }) {
  const api = axios.create({
    baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
    headers: {
      'x-rapidapi-key': '247e844bdcmsh8cd295053887683p148d88jsna171c42bb8d9',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    },
  })

  const [jogos, setJogos] = useState()

  useEffect(() => {
    getJogos()
  }, [])

  function getJogos() {
    api
      .get('/games')
      .then(resp => {
        setJogos(resp.data)
        console.log(resp.data)
      })
      .catch(err => console.error(err))
  }

  const [gameFiltered, setGameFiltered] = useState([])

  function filtrarPorJogo(termo) {
    if (!termo) {
      setGameFiltered([])
      return
    }

    const resultado = jogos?.filter(jogo =>
      jogo.title.toLowerCase().includes(termo.toLowerCase())
    )

    setGameFiltered(resultado)
  }

  const [jogosResgatados, setJogosResgatados] = useState([])
  function resgatarJogo(jogo) {
    const jaResgatado = jogosResgatados.some(item => item.id === jogo.id)

    if (jaResgatado) {
      alert('Este jogo já foi resgatado!')
    } else {
      setJogosResgatados(prev => [...prev, jogo])
      alert('Jogo resgatado com sucesso!')
    }
  }

  function excluirJogo(jogo) {
    const estaNaLista = jogosResgatados.some(item => item.id === jogo.id)

    if (!estaNaLista) {
      alert('Este jogo não está na lista de resgatados!')
    } else {
      setJogosResgatados(prev => prev.filter(item => item.id !== jogo.id))
      alert('Jogo removido com sucesso!')
    }
  }

  return (
    <JogosContext.Provider
      value={{
        jogos,
        getJogos,
        filtrarPorJogo,
        gameFiltered,
        resgatarJogo,
        jogosResgatados,
        excluirJogo
      }}
    >
      {children}
    </JogosContext.Provider>
  )
}
