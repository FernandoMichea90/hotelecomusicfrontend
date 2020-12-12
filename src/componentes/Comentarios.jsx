import React from 'react'
import './css/principal.css' 
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


const Comentarios = () => {

    
    const clases=useStyles()
 
    return (

        <div name="comentarios">
                     <h1 className={clases.textCenter}  >
                Comentarios 
            </h1>

                <div class="elfsight-app-8e2bfde1-3ca1-46f5-a320-66ce57329c5a"></div>
        </div>
    )
}


export default Comentarios



