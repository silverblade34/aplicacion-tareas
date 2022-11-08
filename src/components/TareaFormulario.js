import React,{useState} from "react";
import '../css/TareasFormulario.css'
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props){

    const [input, setInput]= useState('');

    const manejarCambio=e=>{
        setInput(e.target.value); /* Estamos recibiendo el valor del campo de texto*/
        /*e es objeto que represetna el evento, y uno de sus atributos es el target,
         que viene a ser el elemento que recibió el evento. (En este caso el input). */
        console.log(e.target.value);
    };

    const manejarEnvio= e =>{
        e.preventDefault();
        console.log("Enviando formulario")
        const tareaNueva={
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    };

    return(
        <form className="tarea-formulario"
        onSubmit={manejarEnvio} /*Indicamos el evento a la hora de enviar el form */
        >
            <input
                className="tarea-input"
                type="text"
                placeholder="Escribe una Tarea"
                name="texto"
                onChange={manejarCambio} /*Cada vez que el input perciba un cambio se ejecutara la funcion */
            />
            <button className="tarea-boton" type="submit">
                Agregar Tarea
            </button>
        </form>
    )
}

export default TareaFormulario;