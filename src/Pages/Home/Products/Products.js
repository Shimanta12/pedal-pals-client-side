import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://salty-taiga-12692.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h3" color="primary" sx={{ mb: 3, fontFamily: "'Pacifico', cursive" }}>
                Bicycles
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, fontFamily: "'Pacifico', cursive" }}>
                Life is Better On a Cycle.
            </Typography>
            <Grid container spacing={3}>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </Grid>
        </Container >
    );
};

export default Products;