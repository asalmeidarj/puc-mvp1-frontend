import React from 'react'
import styles from './Header.module.css'

import styled from 'styled-components'
import { THEME } from '../../theme/theme'

interface Props {
  children: React.ReactNode
}

const HeaderComponent = styled.header`
  background-color: ${THEME.COLOR.HEADER_AND_FOOTER};
  color: ${THEME.COLOR.HEADER_TEXT};
`

function Header({ children }: Props) {
  return (
    <HeaderComponent className={styles.header}>
      {children}
    </HeaderComponent>
  )
}

export default Header