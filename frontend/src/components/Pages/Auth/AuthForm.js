import React, { useState } from 'react'

import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const LabelStyle = { mt: 2, mb: -2 }

const AuthForm = ({ onSubmit, isAdmin }) => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [issignup, setIsSignUp] = useState(false);


    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleSubmitChange = (e) => {
        e.preventDefault();
        onSubmit({inputs,signup: isAdmin? false: issignup});
        
    }

    return (
        /*paperprops is directly applied to root class*/
        <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
            <Box sx={{ ml: "auto", padding: 1 }}>
                <IconButton LinkComponent={Link} to="/">
                    <CloseRoundedIcon />
                </IconButton>
            </Box>
            <Typography onClick={() => { setIsSignUp(!issignup) }} variant='h5' textAlign={'center'}>
                {issignup ? "SignUp" : "Login"}
            </Typography>
            <form onSubmit={handleSubmitChange}>
                <Box padding={8} display={'flex'} justifyContent={'center'} flexDirection={'column'} width={300} margin={"auto"} alignContent={'center'}>
                    {!isAdmin && issignup && <>
                        <FormLabel sx={LabelStyle}>Name</FormLabel>
                        <TextField value={inputs.name} onChange={handleChange} margin="normal" variant='standard' type={"text"} name='name' />
                    </>
                    }
                    <FormLabel sx={LabelStyle}>Email</FormLabel>
                    <TextField value={inputs.email} onChange={handleChange} margin="normal" variant='standard' type={"email"} name='email' />

                    <FormLabel sx={LabelStyle}>Password</FormLabel>
                    <TextField value={inputs.password} onChange={handleChange} margin="normal" variant='standard' type={"password"} name='password' />

                    <Button sx={{ mt: 2, borderRadius: 10, bgcolor: "black" }}
                        type='submit' fullWidth variant='contained'>
                        Login
                    </Button>

                    {!isAdmin && (
                        <Button onClick={() => { setIsSignUp(!issignup) }} sx={{ mt: 2, borderRadius: 10, bgcolor: "darkgreen", color: "white" }}
                            fullWidth variant='contained'>
                            Switch To {issignup ? "Login" : "SignUp"}
                        </Button>)};

                </Box>
            </form>
        </Dialog>
    )
}

export default AuthForm