import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Rating from 'react-rating'
import reviewImage from './../../../images/review-image.png'

const Review = ({ review }) => {
    const { name, address, description, rating } = review;
    return (
        <Grid item xs={12} sm={6} md={4} sx={{ p: 3 }}>
            <Paper elevation={2}>
                <img style={{ width: '100px' }} src={reviewImage} alt="" />
                <Typography variant="h4" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {address}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {description}
                </Typography>
                <Rating
                    style={{ color: 'goldenrod', marginBottom: '5px' }}
                    initialRating={rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly
                ></Rating>
            </Paper>
        </Grid>
    );
};

export default Review;