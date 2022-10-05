import "./Relogio.css"
import {useState} from 'react'

const Relogio = (props) =>{


    const[tempo, setTempo] = useState('0');
    const[minutos,setMinutos] = useState('00');
    const[segundos,setSegundos] = useState('59');


    /*function diminuiMinuto(){
        setMinutos(minutos-1)
    }

    let intervalID;

    function Timer(){
        intervalID = setInterval(diminuiMinuto, 1000);
        
    }  TIMER NAO FUNCIONANDO 
    add onClick={Timer} no botao de start*/
    
    const aoDigitado = evento =>{
       setTempo(evento.target.value)
    }

    const definir = defineTempo =>{
        setMinutos(tempo)
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
                <input type="number" id="tempo" value={tempo} onChange={aoDigitado}></input>
                <button>Set</button>
                <br></br>
                <button className="start" >Start</button>
                <button onClick={refreshPage} >Reset</button>
            </form>
        </section>
        
    )
}

export default Relogio