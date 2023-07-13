import { useEffect } from 'react'
import Slide from '../../components/Slide/Slide'
import styles from './home.module.css'

import ImgBanner from '../../assets/banner.jpg'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <img src={ImgBanner} alt="banner"/>
      </div>
    </main>
  )
}
