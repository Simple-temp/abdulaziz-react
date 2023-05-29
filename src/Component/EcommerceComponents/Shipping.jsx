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


const Shipping = () => {

    const classes = useStyles();
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault(e)
    //     console.log(formData)
    // }


    return (
        <div className='mt-5 pt-5 container'>
            <h1 className='text-center mt-3 mb-5'>Shipping</h1>
            <Row>
                <Col lg={8} md={8} sm={12} className='mx-auto'>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            name="name"
                            id="outlined-basic"
                            label="Name"
                            type="text"
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                            required
                        />

                        <TextField
                            name="address"
                            id="outlined-basic"
                            label="Address"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                            required
                        />

                        <TextField
                            name="distric"
                            id="outlined-basic"
                            label="Distric"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                            required
                        />

                        <TextField
                            name="postalCode"
                            id="outlined-basic"
                            label="Postal Code"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                            required
                        />

                        <TextField
                            name="number"
                            id="outlined-basic"
                            label="Number"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                            required
                        />
                    </form>
                    <Divider />
                    <Divider />
                    <Divider />
                    <Divider />
                    <div className={classes.root}>
                        <Link to={`/payment`} className='text-decoration-none text-white ms-2'>
                            <Button variant="contained" color="secondary" className='mt-2 mb-3 mx-auto d-flex'>
                                Go to Payment
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Shipping;