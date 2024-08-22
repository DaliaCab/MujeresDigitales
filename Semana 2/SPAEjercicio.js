//Aquí se importa la biblioteca React y el hook useState, que se utiliza para manejar el estado dentro de componentes funcionales
import React, {useState, useEffect} from "react";


function Home(){
    return <h2>Home Page</h2>;
}

function About(){
    return<h2>About</h2>;
}

function App(){
    //const [nombre, setter] = useState(initialState)
    const [page, setPage] = useState("home");

    return(
        <div>
            <button onClick  ={() => setPage ("home")}>Home</button>
            <button onClick ={() => setPage("about")}>About</button>
            {page === "home" ? <Home/> : <About/>}     //Usamos 'operador ternario' para saber a dónde se apunta, si al Home o al About según el click que se haga
        </div>
    )
}

export default App;