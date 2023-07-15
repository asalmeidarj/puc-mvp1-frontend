import styles from "./title.module.css";

import styled from "styled-components";

interface Props {
  fontSize?: string;
  backgroundColor?: string;
  color?: string;
  title?: string;
}

const TitleComponent = styled.section<Props>`
  background-color: ${(props) => props.backgroundColor ?? "none"};
  color: ${(props) => props.color ?? "#0d0d0d"};
  font-size: ${(props) => props.fontSize ?? "30px"};
`;

export default function Title(props: Props) {
  return (
    <TitleComponent
      className={styles.container}
      backgroundColor={props.backgroundColor}
      color={props.color}
      fontSize={props.fontSize}
    >
      <p>{props.title ?? "Texto Não Inserido"}</p>
    </TitleComponent>
  );
}
