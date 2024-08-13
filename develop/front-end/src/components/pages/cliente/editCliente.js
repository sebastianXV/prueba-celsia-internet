import { Container, Button, Col, Form, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listarCliente, updateByID } from "../../../api/cliente";

export const EditCliente = () => {
  const { id } = useParams();
  const [clienteData, setClienteData] = useState([]);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const clientesData = await listarCliente();

        setClientes(clientesData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }

    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const clienteUpdate = await updateByID(clienteData, id);
      alert("actualizada correctamente");
      setClienteData(clienteUpdate);
    } catch (error) {
      console.error("Error en la peticion:", error);
    }
  };

  return (
    <Container>
      <Row>
        <h2 className="tittle">Editar Cliente</h2>
      </Row>

      <Row>
        <Col xs={12} md={6} className="mb-3">
          <Form data-bs-theme="dark" onSubmit={(e) => handleSubmit(e)}>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Nombres</Form.Label>
                <Form.Control
                  type="text"
                  requiered
                  placeholder="El título"
                  value={clienteData && clienteData.nombres}
                  onChange={(e) => {
                    setClienteData({ ...clienteData, nombres: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  type="text"
                  requiered
                  placeholder=""
                  value={clienteData.apellidos}
                  onChange={(e) => {
                    setClienteData({ ...clienteData, apellidos: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Tipo de Identificacion</Form.Label>
                <Form.Select
                  required
                  value={clienteData.tipoIdentificacion}
                  onChange={(e) =>
                    setClienteData({
                      ...clienteData,
                      tipoIdentificacion: e.target.value,
                    })
                  }
                >
                  <option key="default" value="">
                    Elegir...
                  </option>
                  <option key="default" value="CC">
                    CC
                  </option>
                  <option key="default" value="TI">
                    TI
                  </option>
                  <option key="default" value="CE">
                    CE
                  </option>
                  <option key="default" value="RC">
                    RC
                  </option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Identificacion</Form.Label>
                <Form.Control
                  type="text"
                  requiered
                  placeholder=""
                  value={clienteData.identificacion}
                  onChange={(e) => {
                    setClienteData({
                      ...clienteData,
                      identificacion: e.target.value,
                    });
                  }}
                />
              </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <form noValidate>
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    value={clienteData.fechaNacimiento}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setClienteData({
                        ...clienteData,
                        fechaNacimiento: e.target.value,
                      });
                    }}
                  />
                </form>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Numero Celular</Form.Label>
                <Form.Control
                  type="text"
                  requiered
                  placeholder=""
                  value={clienteData.numeroCelular}
                  onChange={(e) => {
                    setClienteData({ ...clienteData, numeroCelular: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  type="text"
                  requiered
                  placeholder=""
                  value={clienteData.correoElectronico}
                  onChange={(e) => {
                    setClienteData({
                      ...clienteData,
                      correoElectronico: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            </Row>

            <Row>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
