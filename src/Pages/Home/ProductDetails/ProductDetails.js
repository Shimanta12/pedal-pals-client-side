import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating'
import useAuth from '../../../hooks/useAuth';

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const { user } = useAuth()

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`https://salty-taiga-12692.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSubmit = data => {
        data.purchasedProduct = product;
        data.status = 'pending';
        fetch('https://salty-taiga-12692.herokuapp.com/purchases', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Purchased Successfully');
                    reset();
                }
            })
    };
    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <img style={{ width: '100%' }} src={product.image} alt="" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typography sx={{ fontFamily: "'Pacifico', cursive" }} variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="body1" align="left" gutterBottom>
                        {product.description}
                    </Typography>
                    <Typography variant="h6" align="left" gutterBottom>
                        Specifications:
                    </Typography>
                    <Typography variant="body1" align="left">
                        <span style={{ fontWeight: 'bold' }}>Frame:</span> {product.frame}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1" align="left" gutterBottom>
                            <span style={{ fontWeight: 'bold' }}>Wheel:</span> <br />
                            {product.wheelSize}
                        </Typography>
                        <Typography variant="body1" align="left" gutterBottom>
                            <span style={{ fontWeight: 'bold' }}>Color:</span><br />
                            {product.color}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1" align="left">
                            <span style={{ fontWeight: 'bold' }}>Price:</span><br />
                            {product.price}
                        </Typography>
                        <Box>
                            <span style={{ fontWeight: 'bold' }}>Rating:</span><br />
                            <Rating
                                style={{ color: 'goldenrod' }}
                                initialRating={product.rating}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly
                            ></Rating>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ width: { xs: '100%', sm: '75%', md: '50%' }, mx: 'auto', mt: 3 }} >
                <Typography sx={{ fontFamily: "'Pacifico', cursive" }} variant="h4" gutterBottom>
                    Please Provide Neccessary Information
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField sx={{ mb: 3 }} fullWidth defaultValue={user.displayName} {...register("name")} required label="Name" variant="filled" />
                    <TextField sx={{ mb: 3 }} fullWidth defaultValue={user.email} {...register("email", { required: true })} label="Email" variant="filled" />
                    <TextField sx={{ mb: 3 }} fullWidth defaultValue="" {...register("address")} required label="Address" variant="filled" />
                    <TextField sx={{ mb: 3 }} fullWidth defaultValue="" {...register("phone")} required label="Phone" variant="filled" />
                    <Button fullWidth type="submit" variant="contained">Purchase</Button>
                </form>
            </Box>
        </Container>
    );
};

export default ProductDetails;