import React from 'react'
import ReactDOM from 'react-dom/client'
import {Mybotoncito} from './Button'
import {TaskCard} from './Task'
import {Post} from './Post'
import { useState,useEffect } from 'react'


const root = ReactDOM.createRoot(document.getElementById('root'));


function Saludar(){
    const name = {
        nombre: 'pedro',
        apellidos:'martinez soles'
    }

    function sumar(x,y){
        return (x+y)
    }
    return <h1>{sumar(10,30)}</h1>
}

function Counter(){
    useEffect(()=>{
        console.log('render')
    },[])
    const[mensaje,setMensaje]=useState('')
    
    return <div>
        <input onChange={e=>setMensaje(e.target.value)}/>
        <button onClick={()=>{alert('El mensaje es: ' + mensaje)}}>Save</button>
    </div>

}

root.render(
    <>
       <Counter/>
    </>
)