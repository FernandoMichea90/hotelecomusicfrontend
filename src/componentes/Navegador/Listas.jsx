import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import {Room,Home,RoomService,Comment,Hotel,Mail} from '@material-ui/icons'
import {Link} from 'react-scroll'

const Listas = (props) => {
    return (
        <div>
            <List className="nav">
            <Link to="nosotros" smooth={true} duration={1000} onClick={props.onClose} >

                <ListItem button >
                    
                    <ListItemIcon>
                        <Home>

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
                        <Room></Room>
                    </ListItemIcon>
                    <ListItemText>
                        Ubicacion 
                       
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="servicios" smooth={true} duration={1000} onClick={props.onClose} >
                <ListItem  button>
                    <ListItemIcon>
                      <RoomService></RoomService>
                    </ListItemIcon>
                    <ListItemText>
                        Servicios
                        
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="habitaciones" smooth={true} duration={1000} onClick={props.onClose} >
                <ListItem  button>
                    <ListItemIcon>
                        <Hotel></Hotel>
                    </ListItemIcon>
                    <ListItemText>
                        Habitaciones
                     
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="comentarios" smooth={true} duration={1000} onClick={props.onClose} >

                <ListItem  button>
                    <ListItemIcon>
                    <Comment></Comment>
                    </ListItemIcon>
                    <ListItemText>
                        Comentarios
                       
                    </ListItemText>
                </ListItem>
                </Link>
                <Link to="contacto" smooth={true} duration={1000} onClick={props.onClose} >

                <ListItem  button>
                    <ListItemIcon>
                        <Mail></Mail>
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
