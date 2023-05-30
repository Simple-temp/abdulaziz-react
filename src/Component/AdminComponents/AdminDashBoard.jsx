import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { dashboardHeader, orders, services, portfolio, users } from '../../Data/DashBoardData';
import { Button, Card } from '@material-ui/core';

const AdminDashBoard = () => {


    return (
        <div className='mt-3 pt-5 container'>
            <h1 className='text-center mt-3 mb-3'>Dashboard</h1>
            <Row>
                {
                    dashboardHeader.map((item) => (
                        <Col lg={3} md={6} sm={12} key={item.length}>
                            <div style={{ backgroundColor: item.bgColor, color: "#fff" }} className='p-2 rounded my-2'>
                                <h2 className='my-3 text-center'>{item.title}</h2>
                                <p className='my-3 text-center'>{item.info}{" "}{" "}{item.length}</p>
                            </div>
                        </Col>
                    ))
                }
            </Row>
            <Row>
                <Col lg={9} md={8} sm={12}>
                    <Card className='mt-3'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>NUMBER</th>
                                    <th>EMAIL</th>
                                    <th>DATE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((item) => (
                                        <tr key={item.name}>
                                            <td data-label="ID">Order-Id: 1</td>
                                            <td data-label="NAME">{item.name}</td>
                                            <td data-label="NUMBER">{item.number}</td>
                                            <td data-label="EMAIL">{item.email}</td>
                                            <td data-label="DATE">{item.date}</td>
                                            <td data-label="ACTION">
                                                <Button variant="contained" color="secondary">Details</Button>
                                                <Button variant="contained" color="default" className='d-flex ms-auto my-2'>Delete</Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </Card>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <Card className='mt-3 pt-2 ps-2'>
                        <Button variant="contained" color="primary" className='d-block my-2'>+ Add new services</Button>
                        <Button variant="contained" color="primary" className='d-block my-2'>+ Add new portfolio</Button>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <Card className='mt-3'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>DATE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map((item) => (
                                        <tr key={item.name}>
                                            <td data-label="NAME">{item.name}</td>
                                            <td data-label="DATE">{item.date}</td>
                                            <td data-label="ACTION">
                                                <Button variant="contained" color="secondary">Edit</Button>
                                                <Button variant="contained" color="default" className='d-flex ms-auto my-2'>Delete</Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='mt-3'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>DATE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    portfolio.map((item) => (
                                        <tr key={item.name}>
                                            <td data-label="NAME">{item.name}</td>
                                            <td data-label="DATE">{item.date}</td>
                                            <td data-label="ACTION">
                                                <Button variant="contained" color="secondary">Edit</Button>
                                                <Button variant="contained" color="default" className='d-flex ms-auto my-2'>Delete</Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='mt-3'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>DATE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((item) => (
                                        <tr key={item.name}>
                                            <td data-label="NAME">{item.name}</td>
                                            <td data-label="EMAIL">{item.email}</td>
                                            <td data-label="DATE">{item.date}</td>
                                            <td data-label="ACTION">
                                                <Button variant="contained" color="default" className='d-flex ms-auto my-2'>Delete</Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AdminDashBoard;