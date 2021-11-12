import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('https://salty-taiga-12692.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Product added successfully!');
                    reset();
                }
            })
    }
    return (
        <Box sx={{ width: { xs: '100%', sm: '75%', md: '50%' }, mx: 'auto', mt: 3 }} >
            <Typography sx={{ fontFamily: "'Pacifico', cursive" }} variant="h4" gutterBottom>
                Add Product
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField sx={{ mb: 3 }} fullWidth  {...register("name")} required label="Name" variant="filled" />
                <TextField sx={{ mb: 3 }} fullWidth defaultValue="https://i.ibb.co/6B8jWs8/MY20-XTRADA-7-CRANK-SHIMANO-2.png"  {...register("image", { required: true })} label="Image Url" variant="filled" />
                <TextField multiline rows={4} sx={{ mb: 3 }} fullWidth {...register("description")} required label="Description" variant="filled" />
                <TextField sx={{ mb: 3 }} fullWidth {...register("price")} required label="Price" variant="filled" />
                <TextField sx={{ mb: 3 }} fullWidth type="number"  {...register("rating")} required label="Rating" variant="filled" />
                <TextField sx={{ mb: 3 }} fullWidth defaultValue="" {...register("frame")} required label="Frame" variant="filled" />
                <TextField sx={{ mb: 3 }} fullWidth defaultValue="" {...register("wheelSize")} required label="Wheel Size" variant="filled" />
                <TextField sx={{ mb: 3 }} fullWidth defaultValue="" {...register("color")} required label="color" variant="filled" />
                <Button fullWidth type="submit" variant="contained">Add Product</Button>
            </form>
        </Box>
    );
};

export default AddProduct;