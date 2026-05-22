// Prop

function Saudacao(props) {
    return <h1>Olá, {props.nome}!</h1>
}

<Saudacao nome="Leonardo"/>

// Oque foi feito basicamente.

props = {
    nome: "Leonardo"
}

//---------------------------------------

function Produto(props) {
    return (
        <div>
            <h2>{props.nome}</h2>
            <p>R$ {props.preco}</p>
        </div>
    );
}
<Produto nome="Notebook" preco= "3500"/>

function Botao (props) {
    return (
        <button>
            {props.texto}
        </button>
    );
}
<Botao texto="Salvar"/>

//(Desestruturação)
function Saudacao2({nome}) {
    // oque o React está fazendo por trás. 
    let nome = props.nome
}

function Usuario ({nome, idade, cidade}) {
    return (
        <div>
            <h1>{nome}</h1>
            <p>{idade}</p>
            <p>{cidade}</p>
        </div>
    );
}

<Usuario
    nome="Leonardo"
    idade= {25}
    cidade="São Paulo"
/>