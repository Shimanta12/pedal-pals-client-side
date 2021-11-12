import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://salty-taiga-12692.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container sx={{ my: 5 }}>
            <Typography sx={{ fontFamily: "'Pacifico', cursive" }} variant="h3" color="primary" gutterBottom>
                Clients Reviews
            </Typography>
            <Grid container spacing={5}>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </Grid>
        </Container>
    );
};

export default Reviews;