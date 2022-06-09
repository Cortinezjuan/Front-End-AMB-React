import { Card,Col,Row} from "react-bootstrap";


type InstrumentoParams = {
    id:number;
    instrumento:string;
    imagen:string;
    precio:number;
    costoEnvio:any;
    cantidadVendida:number;
    
}

export const ItemInstrumento = (args : InstrumentoParams)=>{
   
     return(
        <>
             <Card  className="margenesTarjeta" >
                <Card.Link href={`detalle/${args.id}`}><Card.Img variant="top" className="maxAltoImg" src={"http://localhost:3000/images/" + args.imagen} /></Card.Link>
                <Card.Text>{args.instrumento}</Card.Text>
                <Card.Text style={{ fontWeight: 'bold', fontSize: '2rem' }}>${args.precio}</Card.Text>
                <Card.Text >{args.costoEnvio}</Card.Text>
                <Card.Text>{args.cantidadVendida} vendidos</Card.Text>
            </Card>
        </>
    )
}