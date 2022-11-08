import React,{useState} from "react";
import TareaFormulario from './TareaFormulario'
import '../css/ListaDeTareas.css';
import Tarea from './Tareas';


function ListaDeTareas(){

    const[tareas, setTareas] = useState([]);

    const agregarTarea= tarea=>{
        if(tarea.texto.trim()){ /* trim(): Quita los espacios en ambos extremos de la cadena, inicio y fin */
            tarea.texto = tarea.texto.trim();

            const tareasActualizadas = [tarea, ...tareas]; /* Estamos creando un array donde la ultima tarea sera el inicio y luego se le agrega las demas tareas*/
            setTareas(tareasActualizadas)
        } 
    };

    const eliminarTarea= id=>{
        /*Vamos a realizar un filtro donde tarea.id sea igual a id no se mostrara, solo mostraremos todos los que sean
        distintos a id */
        const tareasActualizadas= tareas.filter( tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    const completarTarea=id=>{
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id ===id){
                tarea.completada = !tarea.completada; /* Cambiamos el estado de tarea.completada, si es falso a verdadero
                y si es verdadero a falso*/
            }
            return tarea;
        })
        setTareas(tareasActualizadas);
    };

    return(
        <div>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className="tareas-lista-contenedor">
                {
                    /*map() es un método incorporado en los arreglos, para iterar a través de los elementos dentro de una colección
                     de arreglos en JavaScript. Piensa en él, como un bucle para avanzar de un elemento a otro en una lista, 
                     manteniendo el orden y la posición de cada elemento. */
                    tareas.map((tarea)=>
                     <Tarea
                      key={tarea.id}
                      id={tarea.id}
                      texto={tarea.texto}
                      completada={tarea.completada}
                      eliminarTarea={eliminarTarea}
                      completarTarea={completarTarea}
                     />
                    )
                }
            </div>
        </div>
    )
};

export default ListaDeTareas;