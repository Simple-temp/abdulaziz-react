import React from 'react';
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

const useStyles = makeStyles({
    // root: {
    //     maxWidth: 345,
    // },
    media: {
        height: 140,
    },
});

const portfolio = [
    {
        id: "1",
        name: "Javascript",
        category: "programming",
        stock: "2",
        des: "here is your description",
        qty: 1,
        rating: 4.3,
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
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg"
    },
    {
        id: "3",
        name: "Javascript",
        category: "programming",
        stock: "2",
        des: "here is your description",
        qty: 1,
        rating: 3,
        price: 30,
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg"
    },
    {
        id: "4",
        name: "Javascript",
        category: "programming",
        stock: "2",
        des: "here is your description",
        qty: 1,
        rating: 4.5,
        price: 30,
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg"
    },
    {
        id: "5",
        name: "Javascript",
        category: "programming",
        stock: "2",
        des: "here is your description",
        qty: 1,
        rating: 4.5,
        price: 30,
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg"
    },
    {
        id: "6",
        name: "Javascript",
        category: "programming",
        stock: "2",
        des: "here is your description",
        qty: 1,
        rating: 5,
        price: 30,
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg"
    },
    {
        id: "7",
        name: "Javascript",
        category: "programming",
        stock: "2",
        des: "here is your description",
        qty: 1,
        rating: 2.5,
        price: 30,
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg"
    },
]

const Portfolio = () => {

    const classes = useStyles();

    return (
        <section>
            <div className="section-title-little text-center">
                Portfolio
            </div>
            <div className="section-title text-center">
                Portfolio
            </div>
            <Row className='section-content'>
                <h1 className='text-center mt-3 mb-5'>Portfolio</h1>
                <div className="portfolio-header">
                    <ul>
                        <li>Merng project</li>
                        <li>Frontend project</li>
                        <li>Message project</li>
                        <li>Crud project</li>
                    </ul>
                </div>
                <Row>
                    {
                        portfolio.map((item) => {
                            return (
                                <Col lg={4} md={6} sm={12} className="my-3" key={item.id}>
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
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Row>
        </section>
    );
};

export default Portfolio;