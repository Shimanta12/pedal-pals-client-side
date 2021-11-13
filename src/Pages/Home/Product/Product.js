import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


const Product = ({ product }) => {

    const { _id, name, image, description, price } = product;

    return (
        <Grid item sm={6} md={4}>
            <Card sx={{}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" align="left">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="left">
                            {description.slice(0, 250)}...
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {price}
                    </Typography>
                    <Link to={`/product/${_id}`} style={{ textDecoration: 'none' }}>
                        <Button endIcon={<ShoppingBasketIcon />} variant="contained">Purchase</Button>
                    </Link>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Product;