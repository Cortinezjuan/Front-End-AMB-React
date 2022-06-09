import{useNavigate} from 'react-router-dom';
import Instrumento from './Instrumento';
import {useState, useEffect} from 'react';
import { deleteInstrumentoXId, getInstrumentosJSONFetch } from './FuncionesApi';
import {Navigation} from './Navigation'
import {Button, Col, Container, Row} from 'react-bootstrap'


export const GrillaInstrumentos=()=>{
    const navigate = useNavigate();
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
    const getInstrumentos = async ()=>{
        let datos:Instrumento[] = await getInstrumentosJSONFetch();
        setInstrumentos(datos);
    }
    useEffect(()=>{
        getInstrumentos();
    },[]);
    const deleteInstrumento = async(idInstrumento:number)=>{
        await deleteInstrumentoXId(idInstrumento);
        window.location.reload();
    }
    

    return (
        <>
        <Navigation></Navigation>
          <Container fluid="md">
            <br/>
            <Button href={`/formulario/0`} variant="outline-primary">Nuevo</Button>
            < Row>
                <Col >
                <b>ID</b>
                </Col>
                <Col >
                <b>Isntrumento</b>
                </Col>
                <Col >
                <b>Marca</b>
                </Col>
                <Col >
                <b>Modelo</b>
                </Col>
                <Col >
                <b>precio</b>
                </Col>
                <Col>
                <b>Costo de Envio</b>
                </Col>
                <Col >
                <b>Cantidad Vendida</b>
                </Col>
                
                <Col >
                <b>Modificar</b>
                </Col>
                <Col >
                <b>Eliminar</b>
                </Col>
            </Row>
          {instrumentos.map((instrumento:Instrumento) => 
            <Row key={instrumento.id}>
                <Col >
                {instrumento.id}
                </Col>
                <Col >
                {instrumento.instrumento}
                </Col>
                <Col >
                {instrumento.marca}
                </Col>
                <Col >
                {instrumento.modelo}
                </Col>
                <Col>
                {instrumento.precio}
                </Col>
                <Col >
                {instrumento.costoEnvio}
                </Col>
                <Col >
                {instrumento.cantidadVendida}
                </Col>
                
                <Col >
                <Button variant="outline-warning" href={`/formulario/` +instrumento.id}>Modificar</Button>
                </Col>
                <Col >
                <Button variant="outline-danger" onClick={(e:any) => deleteInstrumento(instrumento.id)}>Eliminar</Button>
                </Col>
            </Row>
               )}
          </Container>
        </>
    )

}