import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormCupomDesconto from './views/cupomDesconto/FormCupomDesconto';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <FormLogin/> } />

                <Route
                    path="/home"
                    element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                    }
                />
                
                <Route
                    path="/list-cliente"
                    element={
                    <ProtectedRoute>
                        <ListCliente />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-cliente"
                    element={
                    <ProtectedRoute>
                        <FormCliente />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-produto"
                    element={
                    <ProtectedRoute>
                        <ListProduto />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-produto"
                    element={
                    <ProtectedRoute>
                        <FormProduto />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-categoria-produto"
                    element={
                    <ProtectedRoute>
                        <ListCategoriaProduto />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-categoria-produto"
                    element={
                    <ProtectedRoute>
                        <FormCategoriaProduto />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-entregador"
                    element={
                    <ProtectedRoute>
                        <ListEntregador />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-entregador"
                    element={
                    <ProtectedRoute>
                        <FormEntregador />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-comprador"
                    element={
                    <ProtectedRoute>
                        <FormComprador />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-cupom-desconto"
                    element={
                    <ProtectedRoute>
                        <FormCupomDesconto />
                    </ProtectedRoute>
                    }
                />
                
            </Routes>
        </>
    )
}

export default Rotas
