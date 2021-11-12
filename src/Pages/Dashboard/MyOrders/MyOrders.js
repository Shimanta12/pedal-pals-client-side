import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

const MyOrders = () => {
    const { user } = useAuth()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = `https://salty-taiga-12692.herokuapp.com/purchases/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleCancelOrder = id => {
        const proceed = window.confirm('Are you sure you want to cancel?');
        if (proceed) {
            const url = `https://salty-taiga-12692.herokuapp.com/purchases/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount === 1) {
                        alert('Purchase Canceled SuccessFully')
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
                            <TableCell>Client</TableCell>
                            <TableCell >Address</TableCell>
                            <TableCell >Model</TableCell>
                            <TableCell >Price</TableCell>
                            <TableCell >Product</TableCell>
                            <TableCell >Status</TableCell>
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
                                    {product.name}
                                </TableCell>
                                <TableCell >{product.address}</TableCell>
                                <TableCell >{product.purchasedProduct.name}</TableCell>
                                <TableCell >{product.purchasedProduct.price}</TableCell>
                                <TableCell ><img style={{ width: '80px' }} src={product.purchasedProduct.image} alt="" /></TableCell>
                                <TableCell >{product.status}</TableCell>
                                <TableCell  ><Button onClick={() => handleCancelOrder(product._id)} variant="contained" endIcon={<BackspaceIcon />} size="small">Cancel</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </Box>
    );
};

export default MyOrders;