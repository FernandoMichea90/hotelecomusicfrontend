import React from 'react'
import Image from '../../Imagenes/maleta.png'
import {makeStyles} from '@material-ui/styles'


const useStyle=makeStyles({   

    divImagen:{
        position:'relative',
        margin:'15vh 0px 0px 5vw'


    } ,
    


    imagenMaleta:{
       
   width:'100%',
    position: 'relative',
    }



})

const Imagen = () => {
    const clases=useStyle();


    return (
        <div className={clases.divImagen}>
            <img  className={clases.imagenMaleta} src={Image} ></img>
        </div>
    )

}

export default Imagen;
