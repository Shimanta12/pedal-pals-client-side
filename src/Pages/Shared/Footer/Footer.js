import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'black', p: 5 }}>
            <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        sx={{ backgroundColor: 'white', borderRadius: '5px' }}
                        hiddenLabel
                        id="filled-hidden-label-small"
                        variant="filled"
                        size="small"
                    />
                    <Button variant="contained">Subscribe</Button>
                    <br /><br />
                    <FacebookIcon sx={{ color: 'dodgerblue', fontSize: '40px', ml: 2 }} />
                    <InstagramIcon sx={{ color: 'crimson', fontSize: '40px', ml: 2 }} />
                    <YouTubeIcon sx={{ color: 'red', fontSize: '40px', ml: 2 }} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                        PedalPals
                    </Typography>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/">About Us</Link>
                    <br />
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Contact</Link>
                    <br />
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Review</Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                        Bikes
                    </Typography>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Classification</Link>
                    <br />
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Technology</Link>
                    <br />
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Sizing Guide</Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                        Support
                    </Typography>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/">How to order</Link>
                    <br />
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Terms and condition</Link>
                    <br />
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Privacy policy</Link>
                </Grid>
            </Grid>
            <Typography variant="body2" sx={{ color: 'white', mt: 3 }}>
                &copy; 2021 PedalPals. All Rights Reserved.
            </Typography>
        </Box>
    );
};

export default Footer;