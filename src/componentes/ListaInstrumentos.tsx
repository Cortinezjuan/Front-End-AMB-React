import Instrumento from "./Instrumento";
import { getInstrumentosJSONFetch,getInstrumentoXBusqueda} from "./FuncionesApi";
import {useEffect,useState} from "react";
import { Container, Row } from "react-bootstrap";
import { ItemInstrumento } from "./ItemInstrumento";
import { Navigation } from './Navigation';
import { useParams } from "react-router-dom";

export const ListaInstrumentos = () => {
    const{termino}=useParams();
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

    const getInstrumentos = async ()=>{
        let datos:Instrumento[] = await getInstrumentosJSONFetch();
        setInstrumentos(datos);
        console.log("TERMINO"+termino);
        if(termino && termino !== ""){
            let datos:Instrumento[] = await getInstrumentoXBusqueda(termino);
            setInstrumentos(datos);
        }else{
            let datos:Instrumento[] = await getInstrumentosJSONFetch();
            setInstrumentos(datos);
        }
    }
    useEffect(()=>{
        getInstrumentos();
    },[]);

      return(
        <>
        <Navigation></Navigation>
            <Container fluid="md" style={{width:'50rem'}}>
                <Row>
                    {instrumentos.map((instrumento:Instrumento)=>
                       <Row>
                       <ItemInstrumento key={instrumento.id} id={instrumento.id} instrumento={instrumento.instrumento}imagen={instrumento.imagen} precio={instrumento.precio} costoEnvio= {instrumento.costoEnvio} cantidadVendida={instrumento.cantidadVendida}></ItemInstrumento>
                       </Row>
                    )}
                </Row>

            </Container>
        </>
        
        
        )
}