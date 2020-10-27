import React from 'react'
import Contacto from './Contactos'
import Redessociales from './Redessociales'
import {Grid,makeStyles} from '@material-ui/core'


const estilos=makeStyles((theme)=>({

    root: {
        flexGrow: 1,
      },
    divPrincipal:{

        background:theme.palette.primary.main,
    borderTop: 'solid 1px #fe642a',
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
        <div className={clases.root} >
            <Grid container>
         
                    

                    <Grid container  item xs={12} className={clases.divPrincipal}>
                        <Grid item xs={1}   sm={1} />
                        <Grid item xs={10} sm={4}> 
                                    <Redessociales></Redessociales>
                        </Grid>
                        <Grid item xs={1}   sm={1}/>


                        <Grid item xs={1}  sm={1} />
                        <Grid item xs={10} sm={4}>
                                    <Contacto></Contacto>
                        </Grid>    
                        <Grid item xs={1} sm={1} />

                    </Grid>
            </Grid>
        </div>

        
    )
}

export default Footer
