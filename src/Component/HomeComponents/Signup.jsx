import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Col, Row } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Signup = () => {

    const classes = useStyles();
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        console.log(formData)
    }

    return (
        <div className='mt-5 pt-5 container'>
            <h1 className='text-center mt-3 mb-5'>Sign up</h1>
            <Row>
                <Col lg={8} md={8} sm={12} className='mx-auto'>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            name="name"
                            id="outlined-basic"
                            label="Name"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                            required
                        />
                        <TextField
                            name="email"
                            id="outlined-basic"
                            label="Email"
                            type='email'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                            required
                        />
                        <TextField
                            name="password"
                            id="outlined-basic"
                            label="Password"
                            type='password'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                            required
                        />
                    </form>
                    <p className='ps-2 mb-2'>Already have an account?
                        <Link to="/login">Login</Link>
                    </p>
                    <Divider />
                    <Divider />
                    <Divider />
                    <Divider />
                    <div className={classes.root}>
                        <Button
                            variant="contained"
                            color="primary"
                            className='w-100 d-block mt-3'
                            onClick={handleSubmit}
                        >
                            Sign up
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Signup;