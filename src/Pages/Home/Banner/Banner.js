import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import bannerImg from './../../../images/banner.jpg'

const banner = {
    height: '100vh',
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: 'cover'
}
const cursive = {
    fontFamily: "'Pacifico', cursive"
}

const Banner = () => {
    return (
        <Box style={banner} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8 }}>
            <Container >
                <Typography style={cursive} className="cursive-text" variant="h3" sx={{ color: ' white ' }} gutterBottom>
                    Life Is Like Riding A Bicycle.
                </Typography>
                <Typography style={cursive} className="cursive-text" variant="h4" sx={{ color: ' white ' }}>
                    To Keep Your Balance You Must Keep Paddling.
                </Typography>
                <Link to="explore" style={{ textDecoration: 'none' }}>
                    <Button sx={{ mt: 3, px: 5 }} variant="contained" endIcon={<DoubleArrowIcon />}>Explore</Button>
                </Link>
            </Container>
        </Box>
    );
};

export default Banner;