var container = document.getElementById("app")
// var titulo = document.createElement("h1")
// titulo.innerHTML = "Titulo inserido por JS uwu 😯"
// container.appendChild(titulo)


function Contador(props) {

    const[numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero + 1)
        //numero++
        console.log("somei e ficou =" + (numero+1))
    }
    function subtrair(){
        setNumero(numero - 1)
        //numero--
        console.log("subtraí e ficou =" + (numero-1))
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar} >+</button>
            <button onClick={subtrair} >-</button>
        </React.Fragment>
    );
}

//App(props)
function App() {
    return (
        // <React.Fragment>
        //     <h1>{props.titulo}</h1>
        //     <h2>e eu sou um parágrafo</h2>
        // </React.Fragment>
        <React.Fragment>
            <h1>Vote no seu Avengers preferido!</h1>
            <Contador titulo="The Avengers" />
            <Contador titulo="Avengers: Era de Ultron" />
            <Contador titulo="Avengers: Guerra Infinita" />
            <Contador titulo="Avengers: Ultimato" />
        </React.Fragment>
    );
}

//alt+shift+f --> identar

//{titulo: "eu vim de props"}
ReactDOM.render(React.createElement(App, null, null), container)
//ReactDOM.render(App(), container)

//PascalCase --> Componentes em React seguem esse padrão
//camelCase --> Funções em JS
//Componentes só podem retornar um elemento por Componente
//saída --> aninhar em React.Fragment dentro do app
//não é que essa aplicação está TODA dentro do fragment, ela esta dentro daquela div app!
//props são como atributos (propriedades)