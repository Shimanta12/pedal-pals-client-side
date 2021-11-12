import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

const ManageOrders = () => {
    const [products, setProducts] = useState([])
    const [approved, setApproved] = useState(false)

    useEffect(() => {
        const url = `https://salty-taiga-12692.herokuapp.com/purchases`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [approved])

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://salty-taiga-12692.herokuapp.com/purchases/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount === 1) {
                        alert('Order deleted  SuccessFully')
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }

    }
    const handleApproveStatus = id => {
        const url = `https://salty-taiga-12692.herokuapp.com/purchases/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('Purchase Approved');
                    setApproved(!approved)
                }
            })
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
                                <TableCell><Button onClick={() => handleDeleteOrder(product._id)} variant="contained" endIcon={<DeleteIcon />} size="small">Delete</Button><Button sx={{ ml: { xs: 0, md: 2 }, mt: { xs: 2, md: 0 } }} onClick={() => handleApproveStatus(product._id)} variant="contained" endIcon={<CheckIcon />} size="small">Approve</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </Box>
    );
};

export default ManageOrders;