import { Button, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import registerImage from './../../../images/register.jpg'

const Register = () => {
    const { succMessage, registerUser, isLoading, error } = useAuth()
    const [loginData, setLoginData] = useState({})

    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleRegisterSubmit = e => {
        e.preventDefault()
        console.log(loginData)
        registerUser(loginData.email, loginData.password, loginData.name, history)
    }
    return (
        <Container sx={{ mt: 15, mb: 5 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={5}>
                    <img style={{ width: '100%' }} src={registerImage} alt=""></img>
                </Grid>
                <Grid item xs={12} sm={7} sx={{ boxShadow: 3, mt: 5, borderRadius: 4, p: 5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }} color="primary">
                        REGISTER
                    </Typography>
                    {!isLoading && <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ my: 2, width: 1 }}
                            id="name"
                            name="name"
                            type="text"
                            onChange={handleOnChange}
                            label="Name"
                            required
                            variant="standard" />
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
                        <Button sx={{ my: 2, width: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button variant="text">Already have an account? Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {succMessage && <Alert severity="success">{succMessage}</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;