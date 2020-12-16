import React from 'react'
import '../css/principal.css'
import GridEjemplo from './GridEjemplo'

import {makeStyles,Typography} from '@material-ui/core'


  

const useStyles=makeStyles((theme)=>({

    root: {
        flexGrow: 1,
        textAlign:"center",
        marginTop:"250px",
        marginBottom:"250px"
       
      },    

    
    textCenter:{
      
       textAlign:"center",
        paddingTop:"64px",
        paddingBottom:"64px"

    },
    

    

}))



const Habitacion = () => {

    const clases=useStyles()
    return (

        
        <div name="habitaciones" className={clases.root} >
        
        <Typography variant="h3" color="textSecondary"  paragraph >
                      Habitaciones
                </Typography>

              <GridEjemplo></GridEjemplo>
      
        </div>
    )
}

export default Habitacion
