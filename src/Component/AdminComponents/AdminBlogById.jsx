import React, { useState } from 'react';
import { Col, Row, Card, Badge } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { blogs } from '../../Data/Data';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const AdminBlogById = () => {

    const { id } = useParams()
    const classes = useStyles();
    const [formData, setFormData] = useState({})
    const [info, setInfo] = useState(blogs)

    const found = info.find((item) => item.id == id)

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
            <h1 className='text-center mt-3 mb-5'>Blog Edit</h1>
            <Row>
                <Col lg={8} md={12} className='mx-auto'>
                    <Badge bg="primary" className='my-3 p-2 ms-2'>Blog Name : {found.name}</Badge>
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
                            Update
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AdminBlogById;