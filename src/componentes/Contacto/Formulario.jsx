import React,{ useEffect,useState} from 'react'
import clienteAxios from '../../config/axios'

import {Grid,TextField,Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import Swal from 'sweetalert2'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: '17px 0px 17px 0px',
            width: '25ch',
            }
      },
      espacioDiv:{
        margin:'15vh 0px 0px 5vw'
   }
  }));


const Formulario = () => {
    const classes = useStyles();
    const [state, setstate] = useState({
      nombre:"",
      correo:"",
      asunto:""
    })

    const [error,setError]=useState({
        nombre:"",
        asunto:"",
        correo:""
    })

 const actualizarDatos=e=>{

    setstate({...state,[e.target.name]:e.target.value})

 }   


 





 const mandarCorreo=async e=>{



          try {



       
           const err={}
            
        setError({
          nombre:"",
          asunto:"",
          correo:""

        })

       if(!state.nombre){
         err.nombre="El nombre es requerido"
       }else{err.nombre=""}
       if(!state.correo){
        err.correo="El correo es requerido"
      }else{err.correo=""} 
      if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(state.correo) ) {
        err.correo = "Email no valido"
      }
      
      
      
      if(!state.asunto){
        err.asunto="El asunto es requerido"
      }


      if(!err.nombre==""||!err.asunto==""||!err.correo==""){
     
        
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
         
          text: "...te falto algo" , 
        
        })
        console.log(err);
                
        setError(err)


      }else{
          
        
        const respuesta =await  clienteAxios.post("/",state)
          setstate({
            nombre:"",
            correo:"",
            asunto:""
          })

        Swal.fire('Exito!','Correo enviado','success')
        setstate({
          nombre:"",
          correo:"",
          asunto:""
        }) 
      }
   
          } catch (error) {
            Swal.fire('Error!','Correo no enviado','success')
          

         
            
          }







       }


       



 






    return (
        <div className={classes.espacioDiv}>
 <div className={classes.root} >

<Grid container spacing={1}>
  <Grid container item xs={12} spacing={3}>


            <TextField 
            id="outlined-basic" 
            label="Nombre"
            variant="outlined"
            name ="nombre"
            value={state.nombre}
            error={error.nombre}
            helperText={error.nombre}
            onChange={actualizarDatos} 
              />


  </Grid>
 
  <Grid container item xs={12} spacing={3}>
      <TextField id="outlined-basic" 
      label="Correo" 
      variant="outlined"
      name="correo"
      value={state.correo}
      error={error.correo}
      helperText={error.correo}
      onChange={actualizarDatos}
      />

  </Grid>
  <Grid container item xs={12} spacing={3}>
  <TextField
          id="outlined-multiline-static"
          label="Asunto"
          name="asunto"
          multiline
          rows={4}
          error={error.asunto}
          helperText={error.asunto}
          onChange={actualizarDatos}
          value={state.asunto}
          variant="outlined"
        />

  </Grid>

  <Grid  container item xs={12} spacing={3}>

                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>mandarCorreo()} variant="contained" color="primary">
                    Enviar
                    </Button>
                 </Grid>
                 <Grid item xs={4}></Grid>
            </Grid>
</Grid>
            


</div>          
        </div>
    )
}

export default Formulario
