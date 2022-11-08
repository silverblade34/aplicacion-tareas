import React from "react";
import '../css/Tareas.css';
import {AiOutlineCloseCircle, AiOutlineCheckCircle} from "react-icons/ai";

function Tareas({id, texto, completada, completarTarea, eliminarTarea}){
    return(
        <div className={completada ? 'tarea-contenedor completada':'tarea-contenedor'}>
            <div className="tarea-texto">
                {texto}
            </div>
            <div className="tarea-icono">
               <AiOutlineCheckCircle className="icono" onClick={()=>completarTarea(id)}/>
               <AiOutlineCloseCircle className="icono-eliminar" onClick={()=>eliminarTarea(id)}/>
            </div>
        </div>
    )
};

export default Tareas;