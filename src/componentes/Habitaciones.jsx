import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Camanaranja from '../Imagenes/camaNaranja.png'
import { Paper } from '@material-ui/core'
import Carrusel from './CarHabitaciones/Carrusel'
import CarPri from './CarHabitaciones/CarPri'




const styles = makeStyles((theme) => ({


    divGeneral:{
        position:'relative',
        margin:"auto",
    
        width:"100%",
        background:"#FF6600",   
        height:'600px'

    },

    imgNaranja:{
       
        width: '100%',
    height: '100%',
    objectFit: 'cover',
    overflow: 'hidden'
    }
    ,

    divNaranja:{
        background:"#ff660052",
        position: 'absolute',
        top: '0',
        width: '100%',
        height: '100%'



    }




}))




const Habitaciones = () => {
    const estilos=styles()

    return (
        
        <div  id='habitaciones'  className={estilos.divGeneral}>
            <img className={estilos.imgNaranja} src={Camanaranja}></img>
            <div className={estilos.divNaranja}></div>   
            <CarPri></CarPri>      
        </div>
    )
}


export default Habitaciones
