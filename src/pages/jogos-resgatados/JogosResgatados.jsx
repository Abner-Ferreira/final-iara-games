import React, { useContext, useState } from 'react'
import styles from './jogosResgatados.module.css'
import avatar from '../../assets/img/avatar.png'
import CardResgatado from '../../components/cardResgatado/CardResgatado'
import { JogosContext } from '../../context/Jogos'

export default function JogosResgatados() {
  const { jogosResgatados } = useContext(JogosContext)


// Estados de paginação
  const [paginaAtual, setPaginaAtual] = useState(1)
  const jogosPorPagina = 8

  const listaParaMostrar = jogosResgatados

  if (jogosResgatados.length === 0) {
    return <p style={{ textAlign: 'center' }}>Nenhum jogo resgatado...</p>
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

  return (
    <>
      <header className={styles.containerHeader}>
        <h1 className={styles.titulo}>Jogos Resgatados</h1>
        <img src={avatar} alt='Imagem do avatar' className={styles.avatar} />
      </header>

      <main className={styles.container}>
        <div className={styles.jogosResgatados}>
          {jogosDaPagina.map(jogo => (
            <CardResgatado gameDetails={jogo} />
          ))}
        </div>
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
