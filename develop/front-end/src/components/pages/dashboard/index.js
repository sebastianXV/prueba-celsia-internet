import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import "./dashboard.css"

const Dashboard = () => {


    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                <Col>
                <Card className='card text-white bg-dark customCard mb-4'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', overflow: 'hidden' }}>
                            <Card.Img variant="top" src="img/clienteIMG.jpg" style={{ width: '100%', objectFit: 'contain' }} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center' >Clientes</Card.Title>
                        </Card.Body>
                        <div className='text-center mb-2' >
                            <Link to="/dashboard/createCliente">
                                <Button variant="primary" size="md" style={{ marginRight: "10px" }}>
                                    Crear
                                </Button>
                            </Link>

                            <Link to="/dashboard/adminRecurses">
                                <Button variant="primary" size="md">
                                    Administrar
                                </Button>
                            </Link>
                        </div>
                    </Card>

                    <Card className='card text-white bg-dark customCard mb-4'>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', overflow: 'hidden' }}>
                        <Card.Img variant="top" src="img/servicios.jpg" style={{ width: '100%', objectFit: 'contain' }} />
                    </div>
                    <Card.Body>
                        <Card.Title className='text-center' >Servicios</Card.Title>
                    </Card.Body>
                    <div className='text-center mb-2' >
                        <Link to="/dashboard/createServicio">
                            <Button variant="primary" size="md" style={{ marginRight: "10px" }}>
                                Crear
                            </Button>
                        </Link>

                        <Link to="/dashboard/adminRecurses">
                            <Button variant="primary" size="md">
                                Administrar
                            </Button>
                        </Link>
                    </div>
                </Card>
            </Col>
        </Row>
        </Container >
    );
};

export default Dashboard;
