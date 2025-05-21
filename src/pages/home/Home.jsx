import React, { useContext, useState } from 'react'
import avatar from '../../assets/img/avatar.png'
import GameCard from '../../components/card/GameCard'
import { JogosContext } from '../../context/Jogos'
import styles from './home.module.css'
import { TextField } from '@mui/material'

export default function Home() {
  const { jogos, filtrarPorJogo, gameFiltered } = useContext(JogosContext)

  // Estados de paginação
  const [paginaAtual, setPaginaAtual] = useState(1)
  const jogosPorPagina = 8

  const listaParaMostrar = gameFiltered.length > 0 ? gameFiltered : jogos

  if (!jogos || listaParaMostrar.length === 0) {
    return <p style={{ textAlign: 'center' }}>Nenhum jogo encontrado...</p>
  }

  const totalPaginas = Math.ceil(listaParaMostrar.length / jogosPorPagina)
  const indiceUltimoJogo = paginaAtual * jogosPorPagina
  const indicePrimeiroJogo = indiceUltimoJogo - jogosPorPagina
  const jogosDaPagina = listaParaMostrar.slice(indicePrimeiroJogo, indiceUltimoJogo)

  const handleProximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      setPaginaAtual(prev => prev + 1)
    }
  }

  const handlePaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(prev => prev - 1)
    }
  }

  const handleFiltro = (e) => {
    setPaginaAtual(1)
    filtrarPorJogo(e.target.value)
  }

  return (
    <>
      <header className={styles.containerHeader}>
        <h1 className={styles.titulo}>Lista de jogos</h1>
        <div className={styles.search}>
          <TextField
            variant='outlined'
            fullWidth
            label='Pesquise o jogo'
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'var(--color-white)',
                '& fieldset': {
                  borderColor: 'var(--color-white)',
                },
                '&:hover fieldset': {
                  borderColor: 'lightblue',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'var(--color-cyan)',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'var(--color-white)',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'var(--color-cyan)',
              },
            }}
            onChange={handleFiltro}
          />
        </div>
        <img src={avatar} alt='Imagem do avatar' className={styles.avatar} />
      </header>

      <main className={styles.container}>
        {jogosDaPagina.map(jogo => (
          <GameCard
            key={jogo.id}
            thumbnail={jogo.thumbnail}
            genre={jogo.genre}
            id={jogo.id}
            title={jogo.title}
            description={jogo.short_description}
            realiseDate={jogo.release_date}
            gameUrl={jogo.game_url}
          />
        ))}
      </main>

      <div className={styles.pagination}>
        <button onClick={handlePaginaAnterior} disabled={paginaAtual === 1}>
          Anterior
        </button>
        <span>
          Página {paginaAtual} de {totalPaginas}
        </span>
        <button
          onClick={handleProximaPagina}
          disabled={paginaAtual === totalPaginas}
        >
          Próxima
        </button>
      </div>
    </>
  )
}
