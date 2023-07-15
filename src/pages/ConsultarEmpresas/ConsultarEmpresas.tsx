import ListaEmpresa from '../../components/ListaEmpresa/ListaEmpresa'
import Title from '../../components/Title/Title'
import styles from './consultar_empresas.module.css'

export default function ConsultarEmpresas() {

  return (
    <main className={styles.container}>
      <Title title='Consultar Empresas'></Title>
      <ListaEmpresa />
    </main>
  )
}
