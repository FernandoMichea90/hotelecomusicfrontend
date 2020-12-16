import React from 'react'
import Map from './Map'
import {makeStyles} from '@material-ui/core/styles'




const useStyles=makeStyles((theme)=>({

    root: {
        flexGrow: 1,
        paddingTop:"300px"
      },    

    margenUbicacion:{
        margin:'0 0vw 0vh  0vw',

     [theme.breakpoints.up('sm')]: {
        margin:'0 25vw 0vh  25vw',

      },


     
    },
    textCenter:{
      
       textAlign:"center",
        paddingTop:"64px"

    },
    mapa:{
            height:"600px",
        [theme.breakpoints.down('xs')]: {
            height:'300px',
          },
          [theme.breakpoints.up('sm')]: {
            height:'450px',
          },
          [theme.breakpoints.up('md')]: {
            height:'600px',
          }
    }


    

}))


function Ubicacion() {

    const clases=useStyles();
  

    


    
    const mapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCE-9odbKyIEJykp0KazN_qtZbFyaNPQtc&v=3.exp&libraries=geometry,drawing,places"
    
    
    
    
    return (
        <div name="ubicacion" className={clases.root}>
           
           

            


         <div>
             
            <Map 
             googleMapURL={mapURL}
             containerElement={<div className={clases.mapa}></div>}
             mapElement={<div className={clases.mapa}></div>}
             loadingElement={<p>Cargando</p>}
            >
                    
            </Map>     
             
        </div>       
        

       

            
        </div>
    )
}

export default Ubicacion
