import React from 'react'
import {makeStyles,Drawer, Divider}from '@material-ui/core'
import Lista from './Navegador/Listas'
import Icono from '../Imagenes/hotelecomusicdos.png';


const drawerWidth=240

const estilos=makeStyles((theme)=>({
    logo:{
        display: "block",
margin: "auto",
        maxHeight:'45px',
          [theme.breakpoints.down('sm')]: {
            height:"5vh"
 },},

    drawer:{
        width:drawerWidth,
        flexShrink:0,
    },
    drawerPaper:{

        width:drawerWidth
    },

    toolbar:theme.mixins.toolbar



}))




const Cajon = (props) => {
    const clases=estilos()

        



    return (
        <Drawer className={clases.drawer}
        variant={props.variant}
        classes={{
            paper:clases.drawerPaper,
        }}
        anchor="left"
        open={props.open}
        onClose={props.onClose?props.onClose:null}
        >
            <div className={clases.toolbar} style={{display:"flex",justifyContent:"center"}}>
                <img src={Icono} alt="logo"  className={clases.logo} />

            </div>
            
            <Divider></Divider>
            <Lista onClose={props.onClose}></Lista>
        </Drawer>
    )
}


export default Cajon    