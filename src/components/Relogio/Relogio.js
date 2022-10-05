import "./Relogio.css"
import {useState,useEffect} from 'react'
import * as React from "react";

const Relogio = (props) =>{


    const[tempo, settempo] = useState('0');
    const[minutos,setminutos] = useState('00');
    const[segundos,setsegundos] = useState('00');
    
    

    React.useEffect(() => {
        const timer =
          segundos > 0 && setInterval(() => setsegundos(segundos - 1), 1000);
        return () => clearInterval(timer);
      }, [segundos]);

      React.useEffect(() => {
        const timerminutos =
          minutos > 0 && setInterval(() => {
            setminutos(minutos - 1);
            setsegundos(59)
           } , 60000);
          
        return () => clearInterval(timerminutos);
      }, [minutos]);  

    
    

    
    const aoDigitado = evento =>{
       settempo(evento.target.value)
    }

    const definir = defineTempo =>{
        setsegundos(59)
        setminutos(tempo-1)
        defineTempo.preventDefault()
    }

    const refreshPage = () =>{
        window.location.reload();
    }

    
    

    return(
        <section className="formulario">
            <h2>Study Time</h2>
            <h3>{minutos}:{segundos}</h3>
            <form onSubmit={definir}>
                <input type="number" id="tempo" value={tempo} onChange={aoDigitado} min='1'></input>
                <button className="setar">Set</button>
                <br></br>
                
                <button onClick={refreshPage} className="resetar">Reset</button>
            </form>
            
        </section>
        
    )
}

export default Relogio