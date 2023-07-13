import styled from "styled-components"

import { THEME } from "../../theme/theme"

import styles from './footer.module.css'

const FooterComponent = styled.footer`
    background-color: ${THEME.COLOR.HEADER_AND_FOOTER};
`

function Footer() {
  return (
    <FooterComponent className={styles.container}>
        <p>Footer</p>
    </FooterComponent >
  )
}

export default Footer