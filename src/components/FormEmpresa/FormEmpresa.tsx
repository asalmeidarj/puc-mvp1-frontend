import { useState } from "react";
import { Form, Button, Modal, Spinner } from "react-bootstrap";

import { CloseCircle, TickCircle } from "iconsax-react";

import styles from "./form_empresa.module.css";
import axios from "axios";

export default function FormEmpresa() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

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

  const chooseIcon = () => {
    if (!icon)
      return (
        <CloseCircle size="32" color="#FFF" className={styles.iconClose} />
      );

    return <TickCircle size="32" color="#FFF" className={styles.iconTick}/>;
  };

  const handleClose = () => {
    setShowMessage(false);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setLoading(true);

    const response = await axios
      .post("http://127.0.0.1:5000/empresa", formValues, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return true;
      })
      .catch((e: Error) => {
        return false;
      });

    if (!response) {
      setLoading(false);
      setIcon(false)
      setMessage("Não foi possível efetuar o registro!");
      setShowMessage(true);
      return;
    }

    setLoading(false);
    setIcon(true)
    setMessage("Cadastro realizado com sucesso!");
    setShowMessage(true);
  };

  if (loading) {
    return (
      <section className={styles.spinner}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </section>
    );
  }

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
            required
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="cnpj">
          <Form.Label className={styles.label}>CNPJ</Form.Label>
          <Form.Control
            className={styles.input}
            type="number"
            name="cnpj"
            value={formValues.cnpj}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="logradouro">
          <Form.Label className={styles.label}>Logradouro</Form.Label>
          <Form.Control
            className={styles.input}
            type="text"
            name="logradouro"
            value={formValues.logradouro}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="numero">
          <Form.Label className={styles.label}>Número</Form.Label>
          <Form.Control
            className={styles.input}
            type="number"
            name="numero"
            value={formValues.numero}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="complemento">
          <Form.Label className={styles.label}>Complemento</Form.Label>
          <Form.Control
            className={styles.input}
            type="text"
            name="complemento"
            value={formValues.complemento}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="bairro">
          <Form.Label className={styles.label}>Bairro</Form.Label>
          <Form.Control
            className={styles.input}
            type="text"
            name="bairro"
            value={formValues.bairro}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="cidade">
          <Form.Label className={styles.label}>Cidade</Form.Label>
          <Form.Control
            className={styles.input}
            type="text"
            name="cidade"
            value={formValues.cidade}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="estado">
          <Form.Label className={styles.label}>Estado</Form.Label>
          <Form.Control
            className={styles.input}
            type="text"
            name="estado"
            value={formValues.estado}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.group} controlId="descricao">
          <Form.Label className={styles.label}>Descrição</Form.Label>
          <Form.Control
            className={styles.input}
            type="text"
            name="descricao"
            value={formValues.descricao}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className={styles.button}>
          Registrar
        </Button>
      </Form>

      <Modal
        backdropClassName={styles.backdrop}
        className={styles.modal}
        show={showMessage}
        onHide={handleClose}
        animation={false}
        size="lg"
      >
        <Modal.Header></Modal.Header>
        <Modal.Body className={styles.modalBodyMessage}>
          <h3>{message}</h3>
          {chooseIcon()}
        </Modal.Body>
      </Modal>
    </>
  );
}
