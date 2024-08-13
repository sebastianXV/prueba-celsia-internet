import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { deleteCliente, listarCliente } from "../../../api/cliente";
import { Button, Container } from "react-bootstrap";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export const AdminRecurses = () => {
    const [cliente, setCliente] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clienteData = await listarCliente();
                setCliente(clienteData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteCliente(id);
            setCliente(cliente.filter(item => item._id !== id));
            console.log('cliente eliminado correctamente');
        } catch (error) {
            console.log('Error al eliminar el cliente:', error);
        }
    };
    const navigate = useNavigate();

    return (
        <Container >
            <h2>Administración de Recursos</h2>
            {cliente.map((clientes) => (
                <Paper key={clientes._id} style={{ marginBottom: '20px', padding: '10px' }}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                                <Img alt="complex" src={clientes.imagenPortada} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={3} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {clientes.nombres}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {clientes.apellidos}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {clientes.fechaNacimiento}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button className="mx-1" variant="danger" onClick={() => handleDelete(clientes._id)}>
                                        Eliminar
                                    </Button>
                                    <Button variant="primary" onClick={() => navigate(`/dashboard/editar/${clientes._id}`)}>
                                        Editar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </Container>
    );
};

export default AdminRecurses;
