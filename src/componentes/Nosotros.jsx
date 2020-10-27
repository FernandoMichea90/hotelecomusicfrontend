import React from 'react'
import './css/principal.css'

import { makeStyles,Typography } from '@material-ui/core';



const estilos =makeStyles((theme) => ({

    margenArriba:{
        paddingTop:"78px",
        textAlign:"center"

    }

}))


const Nosotros = () => {
   
    const clases=estilos()    


    return (
        <div name="nosotros" className={clases.margenArriba} >
                <h1 >
                      Nosotros
                </h1>

                    <Typography paragraph>
        
                          Hotel Ecomusic  consta de 19 habitaciones cada una ambientada en un artista
                       musical nacional o internacional.Tenemos una terraza con una hermosa vista 
                      hacia la bahia. Estamos  en  el corazon del cerro alegre 
                        
                    </Typography>
                    <Typography paragraph>

                           Ven a visitarnos  y ven a vivir una experiencia inolvidable 

                                              

                    </Typography>
                
                

        </div>
    )
}

export default Nosotros
