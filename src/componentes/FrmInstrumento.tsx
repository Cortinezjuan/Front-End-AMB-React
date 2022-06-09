import{useNavigate, useParams} from 'react-router-dom'
import{useEffect, useState} from 'react'
import Instrumento from './Instrumento'
import { getInstrumentoXIdFectch, saveInstrumento } from './FuncionesApi';
import {Button,Form} from 'react-bootstrap';
import {Navigation} from './Navigation'


export const FrmInstrumento = () => {
    const navigate = useNavigate();
    const {idInstrumento} = useParams();
    
    const[instrumento, setInstrumento] = useState<Instrumento>(new Instrumento());

    const getInstrumento = async () =>{
        if(Number(idInstrumento)!==0){
            let instrumentoSelect:Instrumento = await getInstrumentoXIdFectch(Number(idInstrumento));
            setInstrumento(instrumentoSelect);
        }else{
            let instrumentoSelect:Instrumento = new Instrumento();
            setInstrumento(instrumentoSelect);
        }
    }

    useEffect(()=>{
        getInstrumento();
    },[]);

    const save = async () =>{
        console.log(instrumento.id);
        await saveInstrumento(instrumento);
        navigate('/grilla');
    }

    return (
        <>
        <Navigation></Navigation>
        <div className="center">
        <Form className="form-control">
            <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Instrumento</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el nombre del Instrumento" defaultValue={instrumento?.instrumento} onChange={(e: any) => instrumento.instrumento = String(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMarca">
                <Form.Label>Marca</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese la marca" defaultValue={instrumento?.marca} onChange={(e:any) => instrumento.marca = String (e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicModelo">
                <Form.Label>Modelo</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el modelo" defaultValue={instrumento?.modelo} onChange={(e:any) => instrumento.modelo = String(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImagenPath">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el path de la imagen" defaultValue={instrumento?.imagen} onChange={(e: any) => instrumento.imagen = String(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el precio" defaultValue={instrumento?.precio} onChange={(e: any) => instrumento.precio = Number(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCostoEnvio">
                <Form.Label>Costo de Envío</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el costo de envío" defaultValue={instrumento?.costoEnvio} onChange={(e: any) => instrumento.costoEnvio = String(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCantidadVendida">
                <Form.Label>Cantidad Vendida</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese la cantidad vendida" defaultValue={instrumento?.cantidadVendida} onChange={(e: any) => instrumento.cantidadVendida = Number(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese la descripción" defaultValue={instrumento?.descripcion} onChange={(e: any) => instrumento.descripcion = String(e.target.value)}/>
            </Form.Group>
            <br/>
            
            <br/><br/>
            <Button onClick={save}  variant="primary" type="button">
                Guardar
            </Button>
        </Form>
        </div>
        </>
    )
}