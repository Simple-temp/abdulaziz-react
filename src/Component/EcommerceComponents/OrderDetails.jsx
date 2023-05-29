import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button, Card, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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


const OrderDetails = () => {

    const classes = useStyles();

    return (
        <div className='mt-5 pt-5 container'>
            <h1 className='text-center mt-3 mb-5'>Order Details</h1>
            <Row>
                <Col lg={8} md={6} sm={12}>
                    <h2>Order Id : </h2>
                    <Row>
                        <Col lg={12}>
                            <Card className='p-2 my-2'>
                                <h4>Address : </h4>
                                <p>Address : </p>
                                <p>Distric : </p>
                                <p>Postal Code : </p>
                                <p>Number : </p>
                                <p>Emaple </p>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card className='p-2 my-2'>
                                <h4>Payment Method : </h4>
                                <p>Stripe : </p>
                                <p>Paypal : </p>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card className='p-2 my-2'>
                                <h4>Items : </h4>
                                <Row>
                                    <Col lg={4} md={6} sm={12}>
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
                                            </CardContent>
                                        </CardActionArea>
                                    </Col>
                                    <Col lg={4} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                                        <CardActions className='my-3 d-flex justify-content-between'>
                                            <Button variant="contained" color="secondary">
                                                <i className="fa-solid fa-minus" style={{ fontSize: 20 }}></i>
                                            </Button>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                0
                                            </Typography>
                                            <Button variant="contained" color="secondary">
                                                <i className="fa-solid fa-plus" style={{ fontSize: 20 }}></i>
                                            </Button>
                                        </CardActions>
                                    </Col>
                                    <Col lg={4} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Price : $30
                                        </Typography>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card>
                        <div className="cart-price ms-2">
                            <Typography gutterBottom variant="h5" component="h2">
                                Total Item : 3
                            </Typography>
                            <Divider />
                            <Divider />
                            <Divider />
                            <Divider />
                            <Typography gutterBottom variant="h5" component="h2">
                                Price : 3
                            </Typography>
                            <Divider />
                            <Divider />
                            <Divider />
                            <Divider />
                            <Typography gutterBottom variant="h5" component="h2">
                                Vat : 3
                            </Typography>
                            <Divider />
                            <Divider />
                            <Divider />
                            <Divider />
                            <Typography gutterBottom variant="h5" component="h2">
                                Tax : 3
                            </Typography>
                            <Divider />
                            <Divider />
                            <Divider />
                            <Divider />
                            <Typography gutterBottom variant="h5" component="h2">
                                Total price : 3
                            </Typography>
                            <Divider />
                            <Divider />
                            <Divider />
                            <Divider />
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default OrderDetails;