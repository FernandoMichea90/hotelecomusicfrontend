import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Typography, Link, IconButton, TextField, makeStyles, Grid, Button } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { estilos as EstilosGeneral } from '../Estilos'
import Google from '../../../src/google.png'
import { LoginGmail } from '../Firebase/Login';
import {useNavigate} from 'react-router-dom'


import * as yup from 'yup'
import { PinDropSharp } from '@material-ui/icons';

const estilos = makeStyles((theme) => ({
    margenDiv: {
        margin: '20px'
    },
    margen: {
        margin: '10px 0px !important'
    },
    icono: {
        color: "#ffffff"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    avatarPosicion: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '8px 32px'
    }
}))

const validacionLogin = yup.object({
    email: yup
        .string()
        .email('ingrese email valido')
        .required('Ingrese email'),
    password: yup
        .string()
        .required('Ingrese contraseña'),

})

const Formulario = (props) => {
    const navegacion= useNavigate()
    const clases = estilos()
    const clasesDos = EstilosGeneral()
    //  let navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => {
        setShowPassword(current => !current);
    };
    const Signin = async (usuario) => {
        // await Axios.post('http://prueba.brik.cl/api/login', usuario).then(res => {
        //     localStorage.setItem('mydata', res.data.data.accessToken)
        //     console.log(res.data.data)
        //     if (res.data.success) {
        //         navigate('/listadousuarios')
        //     }
        // }, (error) => {

        //     if (error.response.status === 403) {
        //         Swal.fire(
        //             'Datos invalidos',
        //             'Revisa que el usuarion y contraseña esten correctos',
        //             'error'
        //         )
        //     }

        // })

    }

    const iniciarConGmail=async() => {
      LoginGmail().then(() =>{ navegacion('/dashboard')})
       
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validacionLogin,
        onSubmit: (values) => {
            Signin(values)
        },

    })
    return (
        <div className={clasesDos.verticalAlign}>
            <div className={clases.margenDiv + ' ' + clasesDos.textField}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={clases.avatarPosicion}>
                        <Avatar className={clases.avatar}>

                            <LockOutlinedIcon color="info" />

                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Iniciar Sesion
                        </Typography>

                    </div>
                    <TextField id="outlined-basic" label="Correo" variant="outlined"
                        color="secondary"
                        className={clases.margen}
                        type="email"
                        fullWidth
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}

                    />

                    <FormControl fullWidth className={clases.margenTextfield}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        variant="outlined">
                        <InputLabel
                        >Contraseña</InputLabel>
                        <OutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Contraseña"
                        />
                        <FormHelperText>{formik.touched.password && formik.errors.password}</FormHelperText>
                    </FormControl>

                    <Typography className={clases.margen}
                        align='center'>
                        <Button variant="contained"

                            color="secondary"
                            type="submit"
                            fullWidth
                        >Ingresar</Button>
                    </Typography>


                    <Button
                       
                        fullWidth
                        className="submit"
                        className={clasesDos.BotonGoogle}
                        onClick={() => iniciarConGmail()}
  >

                        <img className={clasesDos.imagenGoogle} src={Google} height="25" />
                        Iniciar Con Google
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link variant="body2">
                                Forgot you password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/crearcuenta" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>


            </div>
        </div>

    )
};

export default Formulario;