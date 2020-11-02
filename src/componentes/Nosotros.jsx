import React from 'react'
import './css/principal.css'

import { makeStyles,Typography } from '@material-ui/core';



const estilos =makeStyles((theme) => ({

    margenArriba:{
        paddingTop:"78px",
        textAlign:"center"

    },
    texto:{

        fontSize:"2vw",
        color: "RGBA(0,0,0,0.75)"
    }

}))


const Nosotros = () => {
   
    const clases=estilos()    


    return (
        <div name="nosotros" className={clases.margenArriba} >
                <h1 >
                      Nosotros
                </h1>

                    <Typography paragraph className={clases.texto}>
        
                    Estamos  ubicados en pleno centro turistico , en el corazon de cerro alegre , durante el dia podras Visitar   los principales actractivos turisticos de  la ciudad   y durante la noche disfrutar  de  toda la bohemia porteña.
Constaras de comodas habitaciones cada uno con un baño privado  ,informacion  turistica  y de lo mejores panoramas de la ciudad.
                    </Typography>
                    <Typography paragraph className={clases.texto}>

                           Ven a visitarnos  y ven a vivir una experiencia inolvidable 

                                              

                    </Typography>
                
                

        </div>
    )
}

export default Nosotros
