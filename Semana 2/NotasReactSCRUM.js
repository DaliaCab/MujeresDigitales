//creado por FB para mejorar el rendimiento y la organización del código en UI
//JSX extensión de sintaxis para JavaScript que permite escribir HTML dentro de JS. Facilita la creación de interfaces
//Ejemplo JSX:
//const element <h1>Hello, world!</h1>  Componente que muestra saludo

function Greeting(props){
    return<h1>Hello, {props.name}!</h1>;
}

function App(){
    return(
        <div>
            <Greeting name = "World"/>
        </div>
    );
}

export default App;

//Metodología SCRUM-Metodología ágil para la gestión de proyectos de software, entrega valor de manera incremental.
//Proceso que se le hace a un cliente en el software
//Roles: 
//-Product Owner: Representa a los stakeholders, prioriza-gestiona tareas
//-SCRUM Master: encargado de ejecutar las partes del SCRUM(daily, spring planning)
//-Equipo de desarrollo: Construye el código segúnlo que el líder téctico yproject manager soliciten, contruye 
//Tips para implementación: Comunicación clara, Reuniones diarias y feedbacks después de cada sprint
