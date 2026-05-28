// Prop

function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}

<Saudacao nome="Leonardo" />;

// Oque foi feito basicamente.

props = {
  nome: "Leonardo",
};

//---------------------------------------

function Produto(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>R$ {props.preco}</p>
    </div>
  );
}
<Produto nome="Notebook" preco="3500" />;

function Botao(props) {
  return <button>{props.texto}</button>;
}
<Botao texto="Salvar" />;

//(Desestruturação)
function Saudacao2({ nome }) {
  // oque o React está fazendo por trás.
  let nome = props.nome;
}

function Usuario({ nome, idade, cidade }) {
  return (
    <div>
      <h1>{nome}</h1>
      <p>{idade}</p>
      <p>{cidade}</p>
    </div>
  );
}

<Usuario nome="Leonardo" idade={25} cidade="São Paulo" />;

// useState
function Contador() {
  function aumentar() {
    numero++;
    console.log(numero);
  }
  return (
    <div>
      <h1>{numero}</h1>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
}

import { useState } from "react";
function Contador() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Clique Aqui</button>
    </div>
  );
}

function Nome() {
  const [nome, setNome] = useState("");
  return (
    <div>
      <input onChange={(e) => setNome(e.target.value)} />
      <h1>{nomer}</h1>
    </div>
  );
}

function FormularioLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function enviarFormulario(event) {
    event.preventDefault();
    console.log("Email", email);
    console.log("Senha", senha);
  }
  return (
    <form onSubmit={enviarFormulario}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email."
      />
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Digite sua senha."
      />

      <button type="submit"></button>
    </form>
  );
}

// Estados com Arrays
const [listaItens, setListaItens] = useState([]);

function adicionarItem(novoItem) {
  setListaItens([...listaItens, novoItem]);
}

function removerItens(itemParaRemover) {
  setListaItens(listaItens.filter((item) => item != itemParaRemover));
}

import { useEffect } from "react";

function MeuComponente() {
  useEffect(() => {
    console.log("Componente carregado");
  }, []);

  return <div>...</div>;
}

import { useState, useEffect } from "react";
import api from "../../utils/api";

function ListaServicos() {
  const [servicos, setServicos] = useState([]);

  function buscarServicos() {
    api
      .get("servicos")
      // http://localhost:3000/servicos

      .then((response) => {
        setServicos(response.data);
      })
      .catch((error) => {
        console.log("Erro:", error);
      });
  }

  useEffect(() => {
    buscarServicos();
  }, []);

  return (
    <ul>
      {servicos.map((servico, index) => (
        <li key={index}>{servico.nome}</li>
      ))}
    </ul>
  );
}

function cadastrarUsuario(event) {
  event.preventDefault();

  const formData = new FormData();

  formData.append("nome", nome);
  formData.append("email", email);
  formData.append("user_img", foto);

  api.post("users", formData)
}
