import React from 'react'
import '../css/principal.css'
import GridEjemplo from './GridEjemplo'

import {makeStyles} from '@material-ui/core'


  

const useStyles=makeStyles((theme)=>({

    root: {
        flexGrow: 1,
       
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

        
        <div name="habitaciones" className="divPadding64px divMargenesLaterales">
        
                  <h1 className={clases.textCenter}>

                    Habitaciones
                </h1>


              <GridEjemplo></GridEjemplo>
      
        </div>
    )
}

export default Habitacion
