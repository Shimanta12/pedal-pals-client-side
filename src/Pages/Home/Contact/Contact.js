import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import contact from './../../../images/contact.jpg'
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h3" color="primary" sx={{ fontFamily: "'Pacifico', cursive" }}>
                Contact Us
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ width: 1 }}>
                        <TextField sx={{ width: '75%', mb: 3 }} label="Name" variant="outlined" />
                        <br />
                        <TextField sx={{ width: '75%', mb: 3 }} label="Email" variant="outlined" />
                        <br />
                        <TextField
                            sx={{ width: '75%', mb: 3 }}
                            label="Message"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                        />
                        <br />
                        <Button endIcon={<SendIcon />} variant="contained">Send</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img style={{ width: '100%' }} src={contact} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;