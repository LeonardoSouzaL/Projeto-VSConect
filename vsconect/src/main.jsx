import React from "react";
import ReactDOM from "react-dom/client";
//Pages
import CadastroServico from "./pages/CadastroServico"
import CadastroUsuario from "./pages/CadastroUsuario"
import Home from "./pages/Home"
import ListaDevs from "./pages/ListaDevs"
import ListaServicos from "./pages/ListaServicos"
import Login from "./pages/Login"
import PerfilUsuario from "./pages/PerfilUsuario"
import VisualizarServico from "./pages/VisualizarServico"
//Header
import Header from "./components/Header"
//CSS
import "./index.css"
//Router - DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <BrowserRouter>

      <Header/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/lista/:idServicos" element={<ListaServicos/>}/>
        <Route path="/cadastro/servico" element={<CadastroServico/>}/>
        <Route path="/cadastro/usuario" element={<CadastroUsuario/>}/>
        <Route path="/lista/:idDevs" element={<ListaDevs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/perfil/:idUsuario" element={<PerfilUsuario/>}/>
        <Route path="/visualizar/servico" element={<VisualizarServico/>}/>

      </Routes>

    </BrowserRouter>

  </React.StrictMode>

)