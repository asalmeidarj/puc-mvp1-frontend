import styles from './cadastro_empresa.module.css'
import FormEmpresa from '../../components/FormEmpresa/FormEmpresa';


export default function CadastroEmpresa() {

    return (
        <main className={styles.container}>
            <FormEmpresa />
        </main>
    )
}
