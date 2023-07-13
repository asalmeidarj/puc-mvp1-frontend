import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.css";

import styles from "./form_empresa.module.css";
import axios from "axios";

export default function FormEmpresa() {
  const [formValues, setFormValues] = useState({
    nome: "",
    cnpj: "",
    descricao: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await axios
      .post("http://127.0.0.1:5000/empresa", formValues, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log({ response: res.data });
        return true;
      })
      .catch((e: Error) => {
        console.log(e.message);
        return false;
      });

    if (!response) {
      alert("Falha ao tentar registrar empresa!");
      return;
    }

    alert("Empresa foi registrada com sucesso");
  };

  return (
    <>
      <Form className={styles.container} onSubmit={handleSubmit}>
        <Form.Group className={styles.group} controlId="nome">
          <Form.Label className={styles.label}>Nome</Form.Label>
          <Form.Control
            className={styles.input}
            type="text"
            name="nome"
            value={formValues.nome}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="cnpj">
          <Form.Label className={styles.label}>CNPJ</Form.Label>
          <Form.Control
            className={styles.input}
            type="cnpj"
            name="cnpj"
            value={formValues.cnpj}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="logradouro">
          <Form.Label className={styles.label}>Logradouro</Form.Label>
          <Form.Control
            className={styles.input}
            type="logradouro"
            name="logradouro"
            value={formValues.logradouro}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="numero">
          <Form.Label className={styles.label}>Número</Form.Label>
          <Form.Control
            className={styles.input}
            type="numero"
            name="numero"
            value={formValues.numero}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="complemento">
          <Form.Label className={styles.label}>Complemento</Form.Label>
          <Form.Control
            className={styles.input}
            type="complemento"
            name="complemento"
            value={formValues.complemento}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="bairro">
          <Form.Label className={styles.label}>Bairro</Form.Label>
          <Form.Control
            className={styles.input}
            type="bairro"
            name="bairro"
            value={formValues.bairro}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="cidade">
          <Form.Label className={styles.label}>Cidade</Form.Label>
          <Form.Control
            className={styles.input}
            type="cidade"
            name="cidade"
            value={formValues.cidade}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="estado">
          <Form.Label className={styles.label}>Estado</Form.Label>
          <Form.Control
            className={styles.input}
            type="estado"
            name="estado"
            value={formValues.estado}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="descricao">
          <Form.Label className={styles.label}>Descrição</Form.Label>
          <Form.Control
            className={styles.input}
            type="descricao"
            name="descricao"
            value={formValues.descricao}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Adicione aqui outros campos do seu formulário usando a estrutura acima */}

        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </>
  );
}
