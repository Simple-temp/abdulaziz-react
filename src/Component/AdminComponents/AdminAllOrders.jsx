import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const AdminAllOrders = () => {
    return (
        <div className='mt-5 pt-5 container'>
            <h1 className='text-center mt-3 mb-5'>All Orders</h1>
            <Row>
                <Col lg={4} md={6} sm={12} className='mb-3'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Name</Card.Title>
                            <Card.Text className='my-2'>
                                Order Id :
                            </Card.Text>
                            <Card.Text className='my-2'>
                                Email :
                            </Card.Text>
                            <Card.Text className='my-2'>
                                Price :
                            </Card.Text>
                            <Card.Text className='my-2'>
                                Number :
                            </Card.Text>
                            <Card.Text className='my-2'>
                                Address :
                            </Card.Text>
                            <Card.Text className='my-2'>
                                Order Date :
                            </Card.Text>
                            <Card.Text className='my-2'>
                                Delivery Date :
                            </Card.Text>
                            <Card.Text className='my-2'>
                                Paid Status :
                            </Card.Text>
                            <Card.Text className='my-2'>
                                Delivery Status :
                            </Card.Text>
                            <Link to="/" className='text-decoration-none text-white'>
                                <Button variant="contained" color="primary" className='mt-2'>
                                    Details
                                </Button>
                            </Link>
                            <Button variant="contained" color="secondary" className='mt-2 ms-3'>
                                Delete
                            </Button>
                            <Button variant="contained" color="default" className='mt-2 ms-3'>
                                Click to Delivery
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AdminAllOrders;