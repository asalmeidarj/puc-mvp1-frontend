import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Hamburguer.module.css'


export default function Hamburguer() {

  const [isActive, setIsActive] = useState(false)

  const stylesMenuMobile = !isActive ? styles.menuMobile : `${styles.menuMobile} ${styles.active}`
  const stylesHamburguer = !isActive ? styles.hamburguer : `${styles.hamburguer} ${styles.open}`

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

      if (width > 600) {
        const element = document.getElementById('menuMobile')
        element?.classList.remove('active')
        setIsActive(false)
      }
    }

    window.addEventListener('resize', handleResize)

  })

  function toggleMenu() {
    setIsActive(!isActive)

    const menu = document.getElementById('menuMobile')
    const hamburguer = document.getElementById('hamburguer')

    menu?.classList.toggle('active')
    hamburguer?.classList.toggle('open')

  }

  return (
    <>
      <button
        onClick={toggleMenu}
        className={styles.btnMenu}>
        <span id='hamburguer' className={stylesHamburguer}></span>
      </button>
      <section id='menuMobile' className={stylesMenuMobile}>
        <nav className={styles.nav}>
          {/*<Link  className={styles.link} to={'/'}>Home</Link>*/}
          <NavLink className={styles.item} onClick={toggleMenu} to='/'> Home </NavLink>
          <NavLink className={styles.item} onClick={toggleMenu} to='/cadastro-empresa' > Cadastrar Empresa </NavLink>
          <NavLink className={styles.item} onClick={toggleMenu} to='/consultar-empresas'> Consultar Empresa </NavLink>
        </nav>
      </section>
    </>

  )
}
