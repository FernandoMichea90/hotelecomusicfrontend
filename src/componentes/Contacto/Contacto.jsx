import {Grid, Hidden} from '@material-ui/core'
import React from 'react'
import Formulario from './Formulario'
import Imagen from './Imagen'

import '../css/principal.css'






const Contacto = () => {





    return (
        <div name="contacto" className="divPadding64px" >
            

        
<h1 className="textoCentral"> Contacto </h1>

<Grid 
  direction="row"
  justify="center"
  alignItems="center"
 container spacing={1}>

    <Grid container item xs={6} sm={6} spacing={3}>
      <Hidden xsDown>
        <Imagen>

             </Imagen>
    </Hidden>     
    </Grid>

    <Grid container item xs={12} sm={6} spacing={3}>
    <Formulario></Formulario>
    </Grid>
       


</Grid>




        </div>
    )
}

export default Contacto


    



