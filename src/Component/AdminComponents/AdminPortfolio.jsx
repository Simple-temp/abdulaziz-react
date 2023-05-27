import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Divider, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    media: {
        height: 140,
    },
});

const AdminPortfolio = () => {

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
            <h1 className='text-center mt-3 mb-5'>Admin Portfolio</h1>
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
                            name="category"
                            label="Category"
                            id="outlined-basic"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="live"
                            label="Live"
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
                            name="fontCode"
                            label="FontCode"
                            id="outlined-basic"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="backCode"
                            label="BackCode"
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
                            Add
                        </Button>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Card className='pb-3 mb-3'>
                        <CardActionArea>
                            <CardMedia
                                className={`${classes.media} img-fluid w-100 d-block`}
                                image="https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Javascript
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    des
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link to="#" className='text-decoration-none'>
                                    Frontend
                                </Link>
                            </Button>
                            <Button size="small" color="primary">
                                <Link to="#" className='text-decoration-none'>
                                    Backend
                                </Link>
                            </Button>
                        </CardActions>
                        <Button size="small" color="primary">
                            <Link to="#" className='text-decoration-none'>
                                Live!
                            </Link>
                        </Button>
                        <Link to="/" className='text-decoration-none text-white ms-2'>
                            <Button variant="contained" color="secondary" className='mt-2'>
                                Edit
                            </Button>
                        </Link>
                        <Button variant="contained" color="default" className='mt-2 ms-3'>
                            Delete
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AdminPortfolio;