import React, { useContext } from 'react'
import styles from './cardResgatado.module.css'
import { IoPlaySharp, IoTrashSharp } from 'react-icons/io5'
import { JogosContext } from '../../context/Jogos'

export default function CardResgatado({ gameDetails }) {

  const { excluirJogo } = useContext(JogosContext)

  console.log(gameDetails)

  return (
    <>
      <div className={styles.card}>
        <img
          src={gameDetails.thumbnail}
          alt={gameDetails.title}
          className={styles.thumbnail}
        />
        <div className={styles.info}>
          <div className={styles.top}>
            <h3 className={styles.title}>{gameDetails.title}</h3>
            <span className={styles.duration}>25 min</span>
          </div>
          <p className={styles.date}>Última sessão em 18/04/2025</p>
        </div>
        <button className={styles.playButton} onClick={() => window.open(gameDetails.gameUrl, '_blank')} title='Jogar'>
          <IoPlaySharp size={20} />
        </button>
        <button
          className={styles.trashButton}
          onClick={() => excluirJogo(gameDetails)}
          title='Excluir'
        >
          <IoTrashSharp size={20} />
        </button>
      </div>
    </>
  )
}
