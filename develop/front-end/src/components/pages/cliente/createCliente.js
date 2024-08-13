import { Card, Container, Button, Col, Form, Row } from "react-bootstrap"; // Importa los componentes de react-bootstrap
import "./edit.css";
import { useEffect, useState } from "react"; // Importa useEffect y useState de React
import { listarServicio } from "../../../api/servicio";
import { postCliente } from "../../../api/cliente";

export const CreateCliente = () => {
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    tipoIdentificacion: "",
    fechaNacimiento: "",
    correoElectronico: "",
    numeroCelular: "",
  });

  const resetForm = () => {
    setForm({
      nombres: "",
      apellidos: "",
      tipoIdentificacion: "",
      fechaNacimiento: "",
      correoElectronico: "",
      numeroCelular: "",
    });
  };

  const [servicio, setServicio] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const servicioData = await listarServicio();

        setServicio(servicioData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postCliente(form);
      console.log("Cliente creado con éxito:", response);
      resetForm();
    } catch (error) {
      console.error("Error al crear la película:", error);
    }
  };

  return (
    <Container>
      <Row>
        <h2 className="tittle">Crear Cliente</h2>
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
                  value={form.nombres}
                  onChange={(e) => {
                    setForm({ ...form, titulo: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>apellidos</Form.Label>
                <Form.Control
                  type="text"
                  requiered
                  placeholder="apellidos"
                  value={form.apellidos}
                  onChange={(e) => {
                    setForm({ ...form, apellidos: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>tipoIdentificacion</Form.Label>
                <Form.Control
                  type="text"
                  requiered
                  placeholder="apellidos"
                  value={form.tipoIdentificacion}
                  onChange={(e) => {
                    setForm({ ...form, tipoIdentificacion: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Label>Tipo de Identificacion</Form.Label>
              <Form.Select
                required
                value={form.tipoIdentificacion}
                onChange={(e) =>
                  setForm({ ...form, tipoIdentificacion: e.target.value })
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
            </Row>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
