import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from './../hooks/useAuth'
import PacmanLoader from "react-spinners/PacmanLoader";
import { Box } from '@mui/system';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()

    if (isLoading) {
        return <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PacmanLoader color={'dodgerblue'} size={30} />
        </Box>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;