import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormCupomDesconto from './views/cupomDesconto/FormCupomDesconto';
import ListCupomDesconto from './views/cupomDesconto/ListCupomDesconto';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import Home from './views/home/Home';
import FormMaterial from './views/material/FormMaterial';
import ListMaterial from './views/material/ListMaterial';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
                <Route path="form-material" element={ <FormMaterial/> } />
                <Route path="list-material" element={ <ListMaterial/> } />
                <Route path="form-cupomDesconto" element={ <FormCupomDesconto/> } />
                <Route path="list-cupomDesconto" element={ <ListCupomDesconto/> } />
            </Routes>
        </>
    )
}

export default Rotas
