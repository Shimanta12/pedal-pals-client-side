import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";
import Product from '../Home/Product/Product';

const Bicycles = () => {
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
        <Container sx={{ mt: { xs: 17, sm: 10 }, mb: 5 }}>
            <Typography variant="h3" color="primary" sx={{ mb: 3, fontFamily: "'Pacifico', cursive" }}>
                Our Products
            </Typography>
            {loading ?
                <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PacmanLoader color={'dodgerblue'} loading={loading} size={30} />
                </Box>
                :
                <Grid container spacing={3}>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>}
        </Container>
    );
};

export default Bicycles;