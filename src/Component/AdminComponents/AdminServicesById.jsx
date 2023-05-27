import React, { useState } from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { services } from '../../Data/Data';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    media: {
        height: 140,
    },
}));

const AdminServicesById = () => {

    const { id } = useParams()
    const classes = useStyles();
    const [formData, setFormData] = useState({})
    const [info, setInfo] = useState(services)

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
            <h1 className='text-center mt-3 mb-5'>Services Edit</h1>
            <Row>
                <Col lg={8} md={12} className='mx-auto'>
                    <Badge bg="primary" className='my-3 p-2 ms-2'>Services Name : {found.name}</Badge>
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
                            name="category"
                            label="Category"
                            id="outlined-basic"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="stock"
                            label="Stock"
                            id="outlined-basic"
                            type='text'
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
                            name="qty"
                            label="Quantity"
                            id="outlined-basic"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="rating"
                            label="Rating"
                            id="outlined-basic"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="price"
                            label="Price"
                            id="outlined-basic"
                            type='text'
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

export default AdminServicesById;