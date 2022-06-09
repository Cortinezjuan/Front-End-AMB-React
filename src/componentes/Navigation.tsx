import { Nav, Navbar,Form, Button,Row,Col } from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

export const Navigation = () => {
  const [termino, setTermino] = useState<String>("");
  const navigate = useNavigate();
  const changeHandler = async (e:any) =>{
    await setTermino(e.target.value);
  }
  const find = async () =>{
    console.log("Buscar"+ termino);
    navigate('/find/'+termino);
    window.location.reload();
  }

  const handleKeyDown = (e:any) => {
    if(e.key === 'Enter'){
      find();
    }
  }

    return (
        <>
            <Navbar bg="warning" variant="dark">
              <Navbar.Brand href="/">HOME</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/Map">Donde Estamos</Nav.Link>
                <Nav.Link href="/listaInstrumentos">Productos</Nav.Link>
                <Nav.Link href="/grilla">Lista Instrumentos</Nav.Link>
              </Nav>
              <Form>
              < Row>
              <Col md={8}><Form.Control type="Text" placeholder="Buscar"  onChange={changeHandler} onKeyDown={handleKeyDown}/></Col>
             
              <Col md={4}><Button type="button" onClick={find} variant="outline-light">Search</Button></Col>
              </Row>
              </Form>
            </Navbar>
        </>
    )
}