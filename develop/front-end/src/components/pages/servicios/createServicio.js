import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { postServicio } from "../../../api/servicio";
import { useState } from "react";
import { TextField } from "@mui/material";


export const CreateServicio = () => {
  const [form, setForm] = useState({
    identificacion: "",
    servicio: "",
  });

  const resetForm = () => {
    setForm({
      nombre: "",
      servicio: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await postServicio(form);
      console.log("servicio creado ", response.status);
      resetForm();
    } catch (error) {
      console.log("ocurrio un error", error);
    }
  };
  return (
    <Container>
      <Row>
        <h2 className="tittle">Crear Servicio</h2>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={6} className="mb-3">
          <Form data-bs-theme="dark" onSubmit={(e) => handleSubmit(e)}>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Identificacion</Form.Label>
                <Form.Control
                  type="text"
                  requiered
                  placeholder="****"
                  value={form.identificacion}
                  onChange={(e) => {
                    setForm({ ...form, identificacion: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Servicio</Form.Label>
                <Form.Control
                  type="text"
                  requiered
                  placeholder="****"
                  value={form.servicio}
                  onChange={(e) => {
                    setForm({ ...form, nombre: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Fecha de Inicio</Form.Label>
                <form noValidate>
                  <TextField
                    id="date"
                    label=""
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        fechaInicio: e.target.value,
                      });
                    }}
                  />
                </form>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Ultima Facturacion</Form.Label>
                <form noValidate>
                  <TextField
                    id="date"
                    label=""
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        fechaUltimaFacturacion: e.target.value,
                      });
                    }}
                  />
                </form>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Ultimo pago</Form.Label>
                <form noValidate>
                  <TextField
                    id="date"
                    label=""
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        fechaPago: e.target.value,
                      });
                    }}
                  />
                </form>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  requiered
                  as="textarea"
                  aria-label="Con área de texto"
                  type="text"
                  value={form.descripcion}
                  placeholder="Descripcion del Género"
                  onChange={(e) => {
                    setForm({ ...form, descripcion: e.target.value });
                  }}
                />
              </Form.Group>
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
