import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { GET_BLOG } from '../../Graphql/AllQuery/Blog';
import { useQuery } from "@apollo/client"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));



const Blog = () => {

    const classes = useStyles();
    const { loading , error, data } = useQuery(GET_BLOG)

    return (
        <section>
            <div className="section-title-little text-center">
                Blog
            </div>
            <div className="section-title text-center">
                Blog
            </div>
            <Row className='section-content'>
                <h1 className='text-center mt-3 mb-5'>Blog</h1>
                {
                    loading ? <p>Loading..</p>
                    : error ? <p>{error.message}</p>
                    : data.blog.map((blog) => {
                        return (

                            <Col lg={3} md={6} sm={12} key={blog.id}>
                                <Card key={blog.img}>
                                    <Card.Img variant="top" src={blog.img} className='w-100 d-block' />
                                    <Card.Body>
                                        <Card.Title>{blog.name}</Card.Title>
                                        <Card.Text className='my-2'>
                                            {blog.des}
                                        </Card.Text>
                                        <Link to="/" className='text-decoration-none text-white'>
                                            <Button variant="contained" color="primary" className='mt-2'>
                                                Details
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col >

                        )
                    })
                }

            </Row>
        </section >
    );
};

export default Blog;