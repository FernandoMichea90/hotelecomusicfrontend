import React, { useState } from 'react'
import {makeStyles,Drawer, Divider}from '@material-ui/core'
import Lista from './Navegador/Listas'


const drawerWidth=240

const estilos=makeStyles((theme)=>({

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
            <div className={clases.toolbar}>
             
            </div>
            
            <Divider></Divider>
            <Lista onClose={props.onClose}></Lista>
        </Drawer>
    )
}


export default Cajon    