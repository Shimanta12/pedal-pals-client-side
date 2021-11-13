import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImage from './../../../images/login.jpg'
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { succMessage, loginUser, isLoading, error, signInUsingGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        e.preventDefault()
        loginUser(loginData.email, loginData.password, location, history)
    }

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }

    return (
        <Container sx={{ mt: { xs: 17, sm: 10 }, mb: 5 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7} sx={{ boxShadow: 3, borderRadius: 4, p: 5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }} color="primary">
                        LOGIN
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ my: 2, width: 1 }}
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            label="Email"
                            required
                            variant="standard" />
                        <TextField
                            sx={{ my: 2, width: 1 }}
                            id="password"
                            name="password"
                            type="password"
                            onChange={handleOnChange}
                            label="Password"
                            required
                            variant="standard" />
                        <Button sx={{ my: 2, width: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button variant="text">Dont have an account? Register</Button>
                        </NavLink>
                        <br />
                        <Typography variant="h6" sx={{ fontFamily: "'Pacifico', cursive" }} gutterBottom>
                            ---------or---------
                        </Typography>
                        <Button startIcon={<GoogleIcon />} onClick={handleGoogleSignIn} variant="contained" sx={{ px: 5 }}>Sign In With Google</Button>
                        <br />
                    </form>}
                    {isLoading && <CircularProgress />}
                    <br />
                    {succMessage && <Alert severity="success">{succMessage}</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={12} sm={5}>
                    <img style={{ width: '100%' }} src={loginImage} alt=""></img>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;