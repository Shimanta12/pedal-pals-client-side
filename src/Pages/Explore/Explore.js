import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://salty-taiga-12692.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container sx={{ mt: 10, mb: 5 }}>
            <Typography variant="h3" color="primary" sx={{ mb: 3, fontFamily: "'Pacifico', cursive" }}>
                Our Products
            </Typography>
            <Grid container spacing={3}>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </Grid>
        </Container>
    );
};

export default Explore;