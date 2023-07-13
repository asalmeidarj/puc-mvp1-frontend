import styled from 'styled-components';
import styles from './button.module.css'



interface Props {
    texto: string;
    backgroundColor?: string;
    width?: string;
}

function Button(props: Props) {

    const ButtonComponent = styled.button`
    background-color: ${props.backgroundColor ? props.backgroundColor : 'blueViolet'};
    width: ${props.width ? props.width : '200px'};
    `

    return (
        <ButtonComponent className={styles.button}>
            {props.texto}
        </ButtonComponent>
    )
}

export default Button