import React from 'react'
import {makeStyles}  from '@material-ui/core/styles'
import {Box} from '@material-ui/core' 

import '../css/principal.css'



const useStyles = makeStyles((theme)=>({
    imagen: {
        height: '75px',
        marginTop:'18px',
        marginLeft:'18px',
        
    }, root: {
        '& .MuiBox-root-21': {
            marginTop:'7px',
            marginLeft:'30%'

            }
      },

      caja:{

        width: '7rem', 
        height: '7rem',
        borderRadius:'61px' ,  
        marginTop:'7px',
                           
        marginLeft:'19%',
        [theme.breakpoints.up('md')]: {
            marginLeft:'32%',
          }
      }
  }));
  


const Caja = (props) => {

    const classes = useStyles();
        //console.log("Hola Caja Fuerte ");
        //console.log(props.Cajafuerte);
        
         const Cajafuerte=props.Cajafuerte




    


    return (


        <div>
                    <Box   
                            boxShadow={3}
                            bgcolor="background.paper"
                            m={1}
                            p={1}
                            className={classes.caja}
                            >
                      

                       <img alt="Caja Fuerte" className={classes.imagen} src={Cajafuerte.Url}   height="25">
                       </img>    
 
                    </Box>

                    <p className="textoCentral">
                       {Cajafuerte.nombre}
                       </p>
                
             </div>  
        
    )
}

export default Caja
