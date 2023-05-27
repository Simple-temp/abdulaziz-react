import React, { useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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

const AdminBLog = () => {

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
            <h1 className='text-center mt-3 mb-5'>Blogs</h1>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            name="name"
                            id="outlined-basic"
                            label="Name"
                            type="text"
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="img"
                            id="outlined-basic"
                            type='file'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="des"
                            label="Description"
                            id="outlined-basic"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="details"
                            label="Details"
                            id="outlined-basic"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />
                    </form>

                    <Divider />
                    <Divider />
                    <Divider />
                    <Divider />
                    <div className={classes.root}>
                        <Button
                            variant="contained"
                            color="primary"
                            className='mt-3 mb-5'
                            onClick={handleSubmit}
                        >
                            Add
                        </Button>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <p className='text-center mb-3'>Blog preview</p>
                    <Row>
                        <Col lg={12} className='mb-3'>
                            <Card>
                                <Card.Img variant="top" src="https://res.cloudinary.com/image-hosting-api/image/upload/v1655629526/gpgoaf2uvzsxejjgckyn.png" className='w-100 d-block' />
                                <Card.Body>
                                    <Card.Title>HTML5</Card.Title>
                                    <Card.Text className='my-2'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, a dolores nemo sit ipsam incidunt! Amet porro magnam rem veritatis repellendus officiis.
                                    </Card.Text>
                                    <Link to="/" className='text-decoration-none text-white'>
                                        <Button variant="contained" color="primary" className='mt-2'>
                                            Details
                                        </Button>
                                    </Link>
                                    <Link to={`/admin/blog/2`} className='text-decoration-none text-white ms-2'>
                                        <Button variant="contained" color="secondary" className='mt-2'>
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button variant="contained" color="default" className='mt-2 ms-3'>
                                        Delete
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default AdminBLog;