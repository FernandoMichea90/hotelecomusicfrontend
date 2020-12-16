import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import {Room,Home,RoomService,Comment,Hotel,Mail} from '@material-ui/icons'
import {Link} from 'react-scroll'
import Icono from '../../Imagenes/hotelecomusicdos.png';



const useStyles=makeStyles((theme)=>({

    root:{
     "& .MuiListItem-root, .MuiListItemIcon-root":{
         color:"#7FCD0D!important"
     },
     "& .MuiListItem-root:hover":{
        color:"#FF6600!important"

    }   
  

    },
    colico:{
    }


}))



const Listas = (props) => {

    const clases=useStyles()
      
    return (
        <div className={clases.root}>
            <List className="nav">

               

              
            <Link to="nosotros" smooth={true} duration={1000} onClick={props.onClose} >

                <ListItem button >
                    
                    <ListItemIcon>
                        <Home className={clases.colico}>

                        </Home>
                    </ListItemIcon>
                    <ListItemText>
                        Nosotros 
                       
                    </ListItemText>
                  
                </ListItem> 
                </Link>
                <Link to="ubicacion" smooth={true} duration={1000} onClick={props.onClose} >

                <ListItem  button>
                    <ListItemIcon>
                        <Room className={clases.colico}></Room>
                    </ListItemIcon>
                    <ListItemText>
                        Ubicacion 
                       
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="servicios" smooth={true} duration={1000} onClick={props.onClose} >
                <ListItem  button>
                    <ListItemIcon>
                      <RoomService className={clases.colico}></RoomService>
                    </ListItemIcon>
                    <ListItemText>
                        Servicios
                        
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="habitaciones" smooth={true} duration={1000} onClick={props.onClose} >
                <ListItem  button>
                    <ListItemIcon>
                        <Hotel className={clases.colico}></Hotel>
                    </ListItemIcon>
                    <ListItemText>
                        Habitaciones
                     
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="comentarios" smooth={true} duration={1000} onClick={props.onClose} >

                <ListItem  button>
                    <ListItemIcon>
                    <Comment className={clases.colico}></Comment>
                    </ListItemIcon>
                    <ListItemText>
                        Comentarios
                       
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="contacto" smooth={true} duration={1000} onClick={props.onClose} >

                <ListItem  button>
                    <ListItemIcon>
                        <Mail className={clases.colico}></Mail>
                    </ListItemIcon>
                    <ListItemText>
                        Contacto
                      
                    </ListItemText>
                </ListItem>
                </Link>

            </List>

        </div>
    )
}

export default Listas
