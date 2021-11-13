import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = `https://salty-taiga-12692.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://salty-taiga-12692.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount === 1) {
                        alert('Product deleted SuccessFully')
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }

    }
    return (
        <Box>
            <TableContainer component={Paper} >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell >Color</TableCell>
                            <TableCell >Price</TableCell>
                            <TableCell >Product</TableCell>
                            <TableCell >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product._id}
                                </TableCell>
                                <TableCell >{product.name}</TableCell>
                                <TableCell >{product.color}</TableCell>
                                <TableCell >{product.price}</TableCell>
                                <TableCell ><img style={{ width: '80px' }} src={product.image} alt="" /></TableCell>
                                <TableCell><Button onClick={() => handleDeleteProduct(product._id)} variant="contained" endIcon={<DeleteIcon />} size="small">Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </Box>
    );
};

export default ManageProducts;