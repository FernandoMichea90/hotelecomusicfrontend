import React from 'react'
import {makeStyles,Grid,Typography  } from '@material-ui/core'

import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
const useStyles=makeStyles((theme)=>({

    margenes:{
        paddingTop:"68px",
        paddingBottom:"30px",
        color:"#000000de"
    },root: {
        flexGrow: 1,
        paddingBottom:"60px"
      }

}))


const Contactos = () => {
    const clases=useStyles()
    return (
        <div>
            
            <h3 className={clases.margenes}>
                Comunicate Con Nosotros    
            </h3>
        <div className={clases.root}>
        <Grid container>
                <Grid item xs={1}>
                    <MailIcon fontSize="small"></MailIcon>
                </Grid>
                <Grid item xs={11}>
                    <Typography>contacto@ecomusichotel.com</Typography>     
                </Grid>  
                <Grid item xs={1}>
                    <PhoneIcon fontSize="small"></PhoneIcon>
                </Grid>
                <Grid item xs={11}>
                      
                    <Typography>+569 7622 6068</Typography>     
  
                </Grid>       

        </Grid> 
        </div>
        </div>
    )
}

export default Contactos
