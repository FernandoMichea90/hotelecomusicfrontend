import { Typography,Grid,makeStyles,TextField,Button } from '@material-ui/core'
import React,{useState} from 'react'
import Beatles from '../Imagenes/beatles.png'


const estilos=makeStyles((theme) => ({


            
 divCaja: {
    position: 'relative',
    width: '100%',
    height:'500px',
   '& .MuiOutlinedInput-root': {
        position:'relative',
        borderRadius:'20px',
    }
,
'& .MuiTypography-h4':{
    fontSize: '2.125rem',
    fontFamily: 'Lato',
    fontWeight: '400',
    lineHeight: '1.235',
    
    [theme.breakpoints.down('sm')]:{
        fontSize: '1.8rem',
    },

    [theme.breakpoints.down('xs')]:{
        fontSize: '1.5rem',
    },
},
    '& .MuiInputBase-input':{
             background:'#ffffff',
             borderRadius:"20px",
    },

    '& .botonDos': {
        borderColor:theme.palette.primary.main,
        border:'solid 1px',
        background:"#FFFFFF",
        color:theme.palette.primary.main,
        borderRadius:"5px",
      
        fontFamily: 'Lato',
        fontWeight: "bold",
        [theme.breakpoints.down('sm')]:{
           margin: '20px 0px',
        },
    
        [theme.breakpoints.down('xs')]:{
           margin: '20px 0px',
        },
    },
    '& .botonDos:hover': {
        borderColor:theme.palette.primary.naranjo,
        border:'solid 1px',
        background:"#FFFFFF",
        color:theme.palette.primary.naranjo,
        borderRadius:"5px",
       
        fontFamily: 'Lato',
        fontWeight: "bold",
        [theme.breakpoints.down('sm')]:{
            margin: '20px 0px',
        },
    
        [theme.breakpoints.down('xs')]:{
            margin: '20px 0px',
        },
    }


        
 }
,
divCajaDos: {
    position: 'absolute',
    width: '100%',
    height:'100%',
    background:'#0000009c',
    top:'0'
 }
,
imgBeatles:{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    overflow: 'hidden'
}
,texto:{

    color:'#ffffff',
    margin:"25px 0px",
}




}))


const Suscribirse = () => {

    const clases=estilos()
    const [suscritor, setsuscritor] = useState({})


    

    return (
        <div  className={clases.divCaja}>
               <img src={Beatles} className={clases.imgBeatles}></img>
               <div className={clases.divCajaDos}></div>
             <div className='centrado'>
           

            <Grid container
            justifyContent="center"
            alignItems="center"
            >

            <Grid item xs={12}>
                <Typography
                variant='h4'
                align="center"
                className={clases.texto}
                >

                            Suscríbete al newsletter, para recibir nuestras promociones  y todas las actividades semanales de valparaiso 
    
                </Typography>

                    </Grid>

                <Grid item xs={12} md={10}>
                  
                    <Typography align="center">

                         <TextField id="outlined-basic" fullWidth placeholder="Ingrese su correo" variant="outlined" />


                    </Typography>

                  </Grid>
                  <Grid item xs={12} md={2}>
                      <Typography align="center">
                    
                      <Button className='botonDos' variant="contained" color="primary">
                            Suscribirse
                            </Button>


                        </Typography>              
                  </Grid>   
            </Grid>
            </div>

        </div>
    )
}

export default Suscribirse
