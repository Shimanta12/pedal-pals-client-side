import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('https://salty-taiga-12692.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(false)
            })
    }, [])

    return (
        <Container sx={{ my: 5 }}>
            <Typography sx={{ fontFamily: "'Pacifico', cursive" }} variant="h3" color="primary" gutterBottom>
                Clients Reviews
            </Typography>
            {loading ?
                <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PacmanLoader color={'dodgerblue'} loading={loading} size={30} />
                </Box>
                :
                <Grid container spacing={5}>
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </Grid>}
        </Container>
    );
};

export default Reviews;