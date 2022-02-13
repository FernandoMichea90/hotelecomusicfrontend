import React, { useEffect } from 'react';
import { useState } from 'react';
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../Firebase/config'
import {solicitarPermisosUsuarios} from '../Firebase/Login'
 
const useAutenticado = () => {
    const [usuarioAutenticado,setUsuarioAutenticado]=useState(null)

    
    const AuthChanged=()=>{

        onAuthStateChanged(auth,user=>{
           
            console.log(user)
                if(user){
                console.log(user)
                //buscar si es administrador 
                const usuariorAdministrador=solicitarPermisosUsuarios(user).then((result) =>{ 
                        console.log(result)
                })
                setUsuarioAutenticado(user)
            }else{
                setUsuarioAutenticado(null)
            }
        })


    }

    useEffect(() => {

        AuthChanged()
    },[])
  return usuarioAutenticado;
};

export default useAutenticado;
