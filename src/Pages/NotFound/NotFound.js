import { Box } from '@mui/system';
import React from 'react';
import notFoundImage from './../../images/404.jpg'

const notFound = {
    height: '100vh',
    backgroundImage: `url(${notFoundImage})`,
    backgroundSize: 'cover'
}
const NotFound = () => {
    return (
        <Box style={notFound}>

        </Box>
    );
};

export default NotFound;