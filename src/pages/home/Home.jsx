import React, { useContext, useEffect, useState } from 'react';
import avatar from '../../assets/img/avatar.png';
import styles from './home.module.css';
import { JogosContext } from '../../context/Jogos';
import GameCard from '../../components/card/GameCard';

export default function Home() {
  const { jogos } = useContext(JogosContext);

  // Estados de paginação
  const [paginaAtual, setPaginaAtual] = useState(1);
  const jogosPorPagina = 8;

  if (!jogos) {
    return <p style={{ textAlign: 'center' }}>Carregando jogos...</p>;
  }

  const totalPaginas = Math.ceil(jogos.length / jogosPorPagina);
  const indiceUltimoJogo = paginaAtual * jogosPorPagina;
  const indicePrimeiroJogo = indiceUltimoJogo - jogosPorPagina;
  const jogosDaPagina = jogos.slice(indicePrimeiroJogo, indiceUltimoJogo);

  const handleProximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      setPaginaAtual((prev) => prev + 1);
    }
  };

  const handlePaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual((prev) => prev - 1);
    }
  };

  return (
    <>
      <header className={styles.containerHeader}>
        <h1 className={styles.titulo}>Lista de jogos</h1>
        <img src={avatar} alt="Imagem do avatar" className={styles.avatar} />
      </header>

      <main className={styles.container}>
        {jogosDaPagina.map((jogo) => (
          <GameCard
            key={jogo.id}
            thumbnail={jogo.thumbnail}
            genre={jogo.genre}
            id={jogo.id}
            title={jogo.title}
            description={jogo.short_description}
            realiseDate={jogo.release_date}
          />
        ))}
      </main>

      <div className={styles.pagination}>
        <button onClick={handlePaginaAnterior} disabled={paginaAtual === 1}>
          Anterior
        </button>
        <span>Página {paginaAtual} de {totalPaginas}</span>
        <button onClick={handleProximaPagina} disabled={paginaAtual === totalPaginas}>
          Próxima
        </button>
      </div>
    </>
  );
}
