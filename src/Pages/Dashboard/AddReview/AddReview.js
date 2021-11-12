import { Container, Typography, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth()

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('https://salty-taiga-12692.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Review added Successfully');
                    reset();
                }
            })
    };
    return (
        <Container sx={{}}>
            <Box sx={{ width: { xs: '100%', sm: '75%', md: '50%' }, mx: 'auto', mt: 3 }} >
                <Typography sx={{ fontFamily: "'Pacifico', cursive" }} variant="h4" gutterBottom>
                    Place an honest review about PedalPals!
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField sx={{ mb: 3 }} fullWidth defaultValue={user.displayName} {...register("name")} required label="Name" variant="filled" />
                    <TextField sx={{ mb: 3 }} fullWidth defaultValue="" {...register("address")} required label="Address" variant="filled" />
                    <TextField
                        sx={{ mb: 3 }}
                        {...register("description")}
                        label="Your Review"
                        multiline
                        rows={4}
                        variant="filled"
                        fullWidth
                        required
                    />
                    <TextField sx={{ mb: 3 }} fullWidth defaultValue="" {...register("rating")} required label="Rating" variant="filled" type="number" placeholder="Enter a number between 1-5" />
                    <Button fullWidth type="submit" variant="contained">Add Review</Button>
                </form>
            </Box>
        </Container>
    );
};

export default AddReview;