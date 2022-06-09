import React, {Component} from 'react';
import {Home} from './componentes/Home';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { DetalleInstrumento } from './componentes/DetalleInstrumento';
import { ListaInstrumentos } from './componentes/ListaInstrumentos';
import {Maps} from './componentes/Maps';
import {FrmInstrumento} from './componentes/FrmInstrumento'
import { GrillaInstrumentos } from './componentes/GrillaInstrumentos';

class AppRutas extends Component{

    render() {
        return (
            <Routes>
                <Route path="/listaInstrumentos" element = {<ListaInstrumentos/>}/>
                <Route path="/grilla" element={<GrillaInstrumentos/>}/>
                <Route path="/detalle">
                   <Route path=":idInstrumento" element={<DetalleInstrumento/>}></Route>
                </Route>
                <Route path="/" element = {<Home/>}/>
                <Route path="/Map" element = {<Maps/>}/>
                <Route path="/find/:termino" element={<ListaInstrumentos/>}/>
                <Route path="/formulario/:idInstrumento" element={<FrmInstrumento/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
            
            
            );


    }

}
export default AppRutas;