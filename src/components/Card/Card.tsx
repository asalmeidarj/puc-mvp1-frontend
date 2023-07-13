import styles from './card.module.css'

import styled from 'styled-components'

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fcfcfc;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px;
    min-width: 150px;
    width: 200px;
    min-height: 250px;
    padding: 20px;
    margin: 0 30px;
`

const ImgPerfil = styled.div`
    width: 120px;
    height: 120px;
    background-color: #c8d2fc;
    border-radius: 50%;
`

export default function Card() {
  return (
    <CardDiv className={styles.card}>
        <ImgPerfil></ImgPerfil>
        <strong className={styles.title}>Francisco Fernandes</strong>
        <p>
            A Global Agenda facilitou muito a minha vida tornando o
            meu trabalho muito mais organizado.
        </p>
    </CardDiv>
  )
}
