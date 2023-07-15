import { useEffect, useState } from "react";
import { Book, Edit, Trash, SearchNormal1 } from "iconsax-react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { InputGroup, Form } from "react-bootstrap";
import axios from "axios";

import styles from "./lista_empresa.module.css";

import { empresa } from "../../models/empresa";

interface Props {
  data: empresa;
}

export default function ListaEmpresa() {
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [items, setItems] = useState([] as empresa[]);
  const [baseItems, setbaseItems] = useState([] as empresa[]);
  const [search, setsearch] = useState("");
  const [formValues, setFormValues] = useState({} as empresa);
  const [momento, setMomento] = useState('')

  const handleClose = () => {
    setShow(false);
    setShowDelete(false);
    setShowMessage(false);
  };

  const handleShow = (empresa: empresa) => {
    setFormValues(empresa);
    setShow(true);
  };

  const handleShowDelete = (empresa: empresa) => {
    setFormValues(empresa);
    setShowDelete(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/empresas");
        const data = await response.data.empresas;
        setItems(data);
        setbaseItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const pesquisarEmpresaPorCnpj = (cnpj: string) => {
    setMomento(atualizacao());

    const fetchData = async () => {
      if (!cnpj) return setItems(baseItems);
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/empresa?cnpj=${cnpj}`
        );
        const data = await response.data;
        setItems([data]);
      } catch (error) {
        setItems([]);
      }
    };

    fetchData();
  };

  const deletarEmpresa = async (id: number) => {
    const deleteData = async () => {
      try {
        const response = await axios
          .delete(`http://127.0.0.1:5000/empresa?id=${id}`)
          .then((resp) => {
            setMessage("Empresa deletada com sucesso!");
            for (const item of items) {
              if (item.id == id) items.pop();
            }
          })
          .catch((e: Error) => {
            setMessage("Não foi possível deletar a empresa!");
          });
      } catch (error) {
        setMessage("Não foi possível deletar a empresa");
      } finally {
        setShowDelete(false);
        setShowMessage(true);
      }
    };

    deleteData();
  };

  const atualizacao = () => {
    const date = new Date();

    const dia = date.getDay() >= 10 ? date.getDay() : "0" + date.getDay();
    const mes = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    const hour = date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
    const minutos = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
    const segundos = date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds();
    return `${dia}-${mes}-${date.getFullYear()} ${hour}:${minutos}:${segundos}`;
  };

  if (items.length == 0) {
    return (
      <>
        <section className={styles.containerPesquisa}>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">CNPJ</InputGroup.Text>
            <Form.Control
              placeholder="Digite o CNPJ da Empresa"
              aria-label="cnpj"
              aria-describedby="basic-addon1"
              onChange={(e) => setsearch(e.target.value)}
            />
          </InputGroup>
          <SearchNormal1
            size="32"
            color="#FFF"
            className={styles.iconSearch}
            onClick={() => pesquisarEmpresaPorCnpj(search)}
          />
        </section>

        <section className={styles.containerAlert}>
          <h3>Empresa não encontrada ou base de dados está vazia!</h3>
        </section>

        <Button
          variant="primary"
          size="lg"
          onClick={() => pesquisarEmpresaPorCnpj("")}
        >
          Limpar consulta
        </Button>

        <div className={styles.margemBottom}></div>

        <p>Consulta realizada em: {momento}</p>

        <div className={styles.margemBottom}></div>
      </>
    );
  }

  return (
    <>
      <section className={styles.containerPesquisa}>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">CNPJ</InputGroup.Text>
          <Form.Control
            placeholder="Digite o CNPJ da Empresa"
            aria-label="cnpj"
            aria-describedby="basic-addon1"
            onChange={(e) => setsearch(e.target.value)}
          />
        </InputGroup>
        <SearchNormal1
          size="32"
          color="#FFF"
          className={styles.iconSearch}
          onClick={() => pesquisarEmpresaPorCnpj(search)}
        />
      </section>
      {items.map((empresa) => (
        <section key={empresa.id} className={styles.container}>
          <div className={styles.divCnpj}>
            <p>CNPJ</p>
            <p>{empresa.cnpj}</p>
          </div>
          <div className={styles.divName}>
            <p>NOME</p>
            <p>{empresa.nome}</p>
          </div>
          <div>
            <p>AÇÕES</p>
            <div className={styles.containerIcons}>
              <div className={styles.boxIcons}>
                <Book
                  size="32"
                  color="#FFF"
                  className={styles.iconBook}
                  onClick={() => handleShow(empresa)}
                />
              </div>
              {/* <div className={styles.boxIcons}>
                <Edit size="32" color="#FFF" className={styles.iconEdit} />
              </div> */}
              <div className={styles.boxIcons}>
                <Trash
                  size="32"
                  color="#FFF"
                  className={styles.iconTrash}
                  onClick={() => handleShowDelete(empresa)}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className={styles.margemBottom}></div>

      <Modal
        backdropClassName={styles.backdrop}
        className={styles.modal}
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{formValues.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Logradouro: {formValues.logradouro}</p>
          <p>Número: {formValues.numero}</p>
          <p>Estado: {formValues.estado}</p>
          <p>Cidade: {formValues.cidade}</p>
          <p>Bairro: {formValues.bairro}</p>
          <p>Descrição: {formValues.descricao}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        backdropClassName={styles.backdrop}
        className={styles.modal}
        show={showDelete}
        onHide={handleClose}
        animation={false}
        size="lg"
      >
        <Modal.Body className={styles.modalBodyDelete}>
          <h3>Tem certeza que deseja excluir?</h3>
          <p className={styles.textModalDelete}>{formValues.nome}</p>
          <div className={styles.buttonsModalDelete}>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              className={styles.buttonDelete}
              onClick={async () => deletarEmpresa(formValues.id)}
            >
              Confirmar
            </Button>
          </div>
        </Modal.Body>
      </Modal>

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
        </Modal.Body>
      </Modal>
    </>
  );
}
