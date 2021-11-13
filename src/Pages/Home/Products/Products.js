import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';
import PacmanLoader from "react-spinners/PacmanLoader";
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('https://salty-taiga-12692.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])
    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h3" color="primary" sx={{ mb: 3, fontFamily: "'Pacifico', cursive" }}>
                Bicycles
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, fontFamily: "'Pacifico', cursive" }}>
                Life is Better On a Cycle.
            </Typography>
            {loading ?
                <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PacmanLoader color={'dodgerblue'} loading={loading} size={30} />
                </Box>
                :
                <Grid container spacing={3}>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>}
        </Container >
    );
};

export default Products;