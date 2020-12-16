import React,{useState} from 'react'

import {Grid,TextField,Button,Typography,Hidden} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import Swal from 'sweetalert2'
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: '17px 18vw 17px 0px',
            width: '100%',
            [theme.breakpoints.down('sm')]: {
              width:"100%",
              margin: '17px 0vw 17px 0px',
            },},
        '& .MuiOutlinedInput-notchedOutline': {
              borderColor:"#FFFFFF"
              }


          ,
          '& .MuiInputLabel-outlined': {
            color:"#FFFFFF!important"
            }

            
        
        ,
          '& .MuiButton-root:hover	': {
            background:"#7FCD0D!important"
            }

            
        ,
        },
      espacioDiv:{
        margin:'0vh 0px 0px 5vw'
   
  },
  margendos:{

    margin:"9px 20px 30px 0"
  },
  boton:{
    background:theme.palette.primary.naranjo,
    color:"#FFFFFF",
    borderRadius:"5px",
    
    fontFamily: 'Lato',
    fontWeight: "bold",
    width: "12vw",
    marginBottom:"5vh",
    
    [theme.breakpoints.down('sm')]: {
      width: "100px",
    },


   },
  

}
  ));


const Formulario = () => {


    const [data,loading]=useState(null);
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
          

          loading(true)


       
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


      if(!err.nombre===""||!err.asunto===""||!err.correo===""){
     
        
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
         
          text: "...te falto algo" , 
        
        })
        console.log(err);
                
        setError(err)
        loading(null)


      }else{
          
        
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
        loading(null)

      }
   
          } catch (error) {
            Swal.fire('Error!','Correo no enviado','success')
          

            loading(null)
            
          }







       }


       



 






    return (
        <div className={classes.espacioDiv}>
 <div className={classes.root} >
    {data ?  
          <div>
          <LinearProgress color="secondary" />
          <h1>
            Enviando...
          </h1>
          </div>


    
   :

<Grid container spacing={1}>
  <Grid container item xs={12} spacing={3}>
      <Hidden only={['sm','md', 'lg','xl']} >
            <Typography className={classes.margendos} variant="h3">
                Contacto      
            </Typography> 
      </Hidden>

            <TextField 
            id="outlined-basic" 
            color="primary"
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

  <Grid  container style={{margin:"0"}} item xs={12} spacing={3}>

               
                <Grid item xs={4}>
                    <Button onClick={()=>mandarCorreo()} variant="contained" className={classes.boton}>
                    Enviar
                    </Button>
                 </Grid>
                
            </Grid>
</Grid>
           
          

       
    }

</div>          
        </div>
    )
}

export default Formulario
