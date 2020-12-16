import React from 'react'
import Contacto from '../componentes/Contacto/Formulario'
import Redessociales from './Redessociales'
import {Grid,makeStyles,Hidden} from '@material-ui/core'
import {Typography} from '@material-ui/core'

const estilos=makeStyles((theme)=>({

    root: {
        flexGrow: 1,
        background:"#B400D1"
      },
    divPrincipal:{

     
    color:"#FFFFFF",
    marginTop: '76px'
    },
    textCenter:{
      
        textAlign:"center",
         paddingTop:"64px",
       
 
     },



}))




const Footer = () => {
     const clases=estilos()
    return (
        <div name="contacto" className={clases.root} >

            

            <Grid container >
         
                    
                    <Hidden xsDown>
                    <Grid container   item xs={12} className={clases.divPrincipal}>
                        <Grid item xs={1}   sm={1} />
                        <Grid item xs={10} sm={4}> 
                                    <Redessociales></Redessociales>
                        </Grid>
                        <Grid item xs={1}   sm={1}/>


                      
                        <Grid item xs={12} sm={6}>
                                    <Contacto></Contacto>
                        </Grid>    
                    

                    </Grid>
                    </Hidden>
                    <Hidden  only={['sm','md', 'lg','xl']}>
                    <Grid container   item xs={12} className={clases.divPrincipal}>
                       
                      
                        <Grid item xs={12} sm={6}>
                                    <Contacto></Contacto>
                        </Grid>    
                        <Grid item xs={1}   sm={1} />
                        <Grid item xs={10} sm={4}> 
                                    <Redessociales></Redessociales>
                        </Grid>
                        <Grid item xs={1}   sm={1}/>



                    </Grid>
                    </Hidden>
                   
            </Grid>
        </div>

        
    )
}

export default Footer
