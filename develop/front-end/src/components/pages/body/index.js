import { Card, Container} from "react-bootstrap"
import { listarCliente } from "../../../api/cliente"
import { useEffect, useState } from "react"
import "./body.css"

const Body = () => {

    const [clientes, setClientes] = useState([])

    useEffect(() => {
        async function fetchClientes() {
            try {
                const clientes = await listarCliente()
                setClientes(clientes)
                console.log(clientes)
            }
            catch (error) {
                console.log("Ocurrio un error", error)
            }
        }
        fetchClientes()
    }, [])


    return (<Container>
        <div className="Clientes">
            {clientes.map((clientes, idx) => (
                <Card className="custom-card" bg="dark" text="white">
                    <Card.Img variant="top" src={clientes && clientes.imagenPortada} alt="portada" />
                </Card>
            ))}
        </div>

    </Container>
    )
}

export default Body