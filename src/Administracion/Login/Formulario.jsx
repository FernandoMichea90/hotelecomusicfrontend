import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button, Typography, Link, IconButton,TextField,makeStyles} from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import Avatar from '@material-ui/icons/Person';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import * as yup from 'yup'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
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
        margin: '30% auto  0px',
        backgroundColor: '#1c76d2 !important'
    },
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

const Formulario = () => {
    const clases = estilos()
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
        <div className={clases.margenDiv}>
            <form onSubmit={formik.handleSubmit}>
                <Typography component="h1" variant="h5" align='center'>
                    <Avatar className={clases.avatar}>
                        <LockIcon className={clases.icono} />
                    </Avatar >
                    Iniciar sesion
                </Typography>
                <TextField id="outlined-basic" label="Correo" variant="outlined"
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
                        type="submit"
                        fullWidth
                    >Ingresar</Button>
                </Typography>
                <Typography align='right'>
                    <Link href="/crearcuenta" variant="body2">
                        ¿Deseas crear una cuenta?
                    </Link>
                </Typography>
            </form>
        </div>


    )
};

export default Formulario;