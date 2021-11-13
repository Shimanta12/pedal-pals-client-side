import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockIcon from '@mui/icons-material/Lock';
import RedeemIcon from '@mui/icons-material/Redeem';

const Features = () => {
    return (
        <Container sx={{ marginTop: '-100px' }}>
            <Grid container spacing={2} sx={{ backgroundColor: 'white', p: 3, borderRadius: ' 5px' }}>
                <Grid item xs={12} sm={6} md={3} >
                    <Paper elevation={3} sx={{ backgroundColor: 'dodgerblue', color: 'white', py: 5 }}>
                        <ChangeCircleOutlinedIcon sx={{ fontSize: '50px' }} />
                        <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: "'Pacifico', cursive" }}>
                            30 Days Return
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Paper elevation={3} sx={{ backgroundColor: '#FFFF33', color: 'black', py: 5 }}>
                        <LocalShippingIcon sx={{ fontSize: '50px' }} />
                        <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: "'Pacifico', cursive" }}>
                            Free Shipping
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Paper elevation={3} sx={{ backgroundColor: 'crimson', color: 'white', py: 5 }}>
                        <LockIcon sx={{ fontSize: '50px' }} />
                        <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: "'Pacifico', cursive" }}>
                            Secure Payment
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Paper elevation={3} sx={{ backgroundColor: 'lightgreen', color: 'black', py: 5 }}>
                        <RedeemIcon sx={{ fontSize: '50px' }} />
                        <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: "'Pacifico', cursive" }}>
                            New Products
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Features;