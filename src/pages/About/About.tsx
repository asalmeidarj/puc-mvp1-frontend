import Button from '../../components/Button/Button'
import { THEME } from '../../theme/theme'
import styles from './about.module.css'

export default function About() {

  return (
    <main className={styles.container}>
      About
      <Button texto='Clique em mim' width='300px'/>
      <Button backgroundColor={THEME.COLOR.BUTTON_SUCCESS} texto='Outro butão'/>
    </main>
  )
}
