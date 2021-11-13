import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from './../hooks/useAuth'
import PacmanLoader from "react-spinners/PacmanLoader";
import { Box } from '@mui/system';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin } = useAuth()

    if (!admin) {
        return <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PacmanLoader color={'dodgerblue'} size={30} />
        </Box>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;