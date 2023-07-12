import React, { useEffect, useRef, useState } from 'react';
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
import { portfolio } from '../../Data/Data';
import Isotope from 'isotope-layout';
import { useQuery } from '@apollo/client';
import { GET_PORTFOLIO } from '../../Graphql/AllQuery/Portfolio';

const useStyles = makeStyles({
    // root: {
    //     maxWidth: 345,
    // },
    media: {
        height: 140,
    },
});


const Portfolio = () => {

    const { loading, error, data } = useQuery(GET_PORTFOLIO)

    const isotope = React.useRef()

    const [filterKey, setFilterKey] = React.useState('*')


    React.useEffect(() => {
        isotope.current = new Isotope('.filter-container', {
            itemSelector: '.filter-item',
            layoutMode: 'fitRows',
        })
        return () => isotope.current.destroy()
    }, [])

    React.useEffect(() => {
        filterKey === '*'
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey])

    const classes = useStyles();

    return (
        <section>
            <div className="section-title-little text-center">
                Portfolio
            </div>
            <div className="section-title text-center">
                Portfolio
            </div>
            <div className='section-content'>
                <h1 className='text-center mt-3 mb-5'>Portfolio</h1>
                <div className="portfolio-header">
                    <ul>
                        <li onClick={() => setFilterKey('*')}>All</li>
                        <li onClick={() => setFilterKey('mern')}>Mern project</li>
                        <li onClick={() => setFilterKey('crud')}>Crud project</li>
                        <li onClick={() => setFilterKey('app')}>App project</li>
                        <li onClick={() => setFilterKey('chat')}>Chat App</li>
                    </ul>
                </div>
                <div className='filter-container'>
                    <Row>
                        {
                            portfolio.map((item) => (
                                <Col lg={3} md={6} sm={12} className={`filter-item ${item.category} my-3`} key={item.id}>
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
                            )
                        }
                    </Row>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;