import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './navbar.module.css'

export default function Navbar() {

  const location = useLocation()
  const path = location.pathname

  return (
    <nav className={styles.nav}>
        {/*<Link  className={styles.link} to={'/'}>Home</Link>*/}
        <NavLink  to='/' className={path == '/' ? styles.active : styles.unSelected}> Home </NavLink>
        <NavLink  to='/cadastro-empresa' className={({isActive}) => isActive ? styles.active : styles.unSelected}> Cadastrar Empresa </NavLink>
        <NavLink  to='/about' className={({isActive}) => isActive ? styles.active : styles.unSelected}> About </NavLink>
        <NavLink  to='/products' className={({isActive}) => isActive ? styles.active : styles.unSelected}> Products </NavLink>
    </nav>
  )
}
