import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from './Rating';


const useStyles = makeStyles({
    // root: {
    //     maxWidth: 345,
    // },
    media: {
        height: 140,
    },
});


const services = [
    {
        id: "1",
        name: "Javascript",
        category: "programming",
        stock: "2",
        des: "here is your description",
        qty: 1,
        rating: 2.3,
        price: 30,
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg"
    },
    {
        id: "2",
        name: "Javascript",
        category: "programming",
        stock: "2",
        des: "here is your description",
        qty: 1,
        rating: 4.5,
        price: 30,
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629526/gpgoaf2uvzsxejjgckyn.png"
    },
    {
        id: "3",
        name: "Javascript",
        category: "programming",
        stock: "2",
        des: "here is your description",
        qty: 1,
        rating: 2.3,
        price: 30,
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629391/xwhmcoqovgtobzyep0zq.png"
    },
    {
        id: "4",
        name: "Javascript",
        category: "programming",
        stock: "2",
        des: "here is your description",
        qty: 1,
        rating: 4.3,
        price: 30,
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629213/j9f3jrtgm6lp2pjzdmf1.png"
    },
]

const Services = () => {

    const classes = useStyles();

    return (
        <section>
            <div className="section-title-little text-center">
                Services
            </div>
            <div className="section-title text-center">
                Services
            </div>
            <Row className='section-content'>
                <h1 className='text-center mt-3 mb-5'>Services</h1>
                {
                    services.map((item) => {
                        return (
                            <Col lg={3} md={6} sm={12} className="my-1" key={item.id}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            className={`${classes.media} img-fluid w-100 d-block`}
                                            image={item.img}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.des}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            ${item.price}
                                        </Button>
                                        <Button size="small" color="primary">
                                            <Rating rating={item.rating} />
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </section>
    );
};

export default Services;