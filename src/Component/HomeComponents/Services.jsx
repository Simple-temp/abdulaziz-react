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
import { GET_SERVICES } from '../../Graphql/AllQuery/Services';
import { useQuery } from "@apollo/client"
 
const useStyles = makeStyles({
    // root: {
    //     maxWidth: 345,
    // },
    media: {
        height: 140,
    },
});

const Services = () => {

    const classes = useStyles();
    const { loading,  error, data } = useQuery(GET_SERVICES)

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
                    loading ? <p>Loading..</p>
                    : error ? <p>{error.message}</p>
                    : data.services.map((item) => {
                        return (
                            <Col lg={3} md={6} sm={12} className="my-3" key={item.id}>
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