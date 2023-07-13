import { Link, useParams, RedirectFunction, useSearchParams } from 'react-router-dom'

import styles from './cadastro_empresa.module.css'
import FormEmpresa from '../../components/FormEmpresa/FormEmpresa';

interface IEmpresa {
    id: number;
    nome: string;
    cnpj: string;
    descricao: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    data_insercao: string;
}

export default function CadastroEmpresa() {

    return (
        <main className={styles.container}>
            <FormEmpresa />
        </main>
    )
}
