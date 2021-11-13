import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    const handleAdminSubmit = e => {
        const user = { email }
        e.preventDefault();
        fetch('https://salty-taiga-12692.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setSuccess(true)
                }
                else {
                    setFailed(true)
                }
            })
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    onBlur={e => setEmail(e.target.value)}
                    label="Email"
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            <br />
            {success && <Alert severity="success">{email} is now an admin !</Alert>}
            {failed && <Alert severity="error">Email not found!</Alert>}
        </div>
    );
};

export default MakeAdmin;