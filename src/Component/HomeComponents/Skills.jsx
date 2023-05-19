import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Skills = () => {

    return (
        <section>
            <div className="section-title-little text-center">
                Skills
            </div>
            <div className="section-title text-center">
                Skills
            </div>
            <Row className='section-content'>
                <h1 className='text-center mt-3 mb-5'>Skills</h1>
                <Col lg={6} md={6} sm={12}>
                    <div className='my-2 mb-4'>
                        <div className="d-flex justify-content-between mb-2">
                            <span className='d-block text-end'>React</span>
                            <span className='d-block text-end'>83%</span>
                        </div>
                        <ProgressBar striped variant="success" now={83} />
                    </div>
                    <div className='my-2 mb-4'>
                        <div className="d-flex justify-content-between mb-2">
                            <span className='d-block text-end'>Node</span>
                            <span className='d-block text-end'>80%</span>
                        </div>
                        <ProgressBar striped variant="info" now={80} />
                    </div>
                    <div className='my-2 mb-4'>
                        <div className="d-flex justify-content-between mb-2">
                            <span className='d-block text-end'>MongoDB</span>
                            <span className='d-block text-end'>80%</span>
                        </div>
                        <ProgressBar striped variant="danger" now={80} />
                    </div>
                    <div className='my-2 mb-4'>
                        <div className="d-flex justify-content-between mb-2">
                            <span className='d-block text-end'>Express</span>
                            <span className='d-block text-end'>80%</span>
                        </div>
                        <ProgressBar striped variant="warning" now={80} />
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className='my-2 mb-4'>
                        <div className="d-flex justify-content-between mb-2">
                            <span className='d-block text-end'>Apollo server</span>
                            <span className='d-block text-end'>80%</span>
                        </div>
                        <ProgressBar striped variant="secondary" now={80} />
                    </div>
                    <div className='my-2 mb-4'>
                        <div className="d-flex justify-content-between mb-2">
                            <span className='d-block text-end'>Mongoose</span>
                            <span className='d-block text-end'>80%</span>
                        </div>
                        <ProgressBar striped variant="dark" now={80} />
                    </div>
                    <div className='my-2 mb-4'>
                        <div className="d-flex justify-content-between mb-2">
                            <span className='d-block text-end'>GraphQl</span>
                            <span className='d-block text-end'>80%</span>
                        </div>
                        <ProgressBar striped variant="success" now={80} />
                    </div>
                    <div className='my-2 mb-4'>
                        <div className="d-flex justify-content-between mb-2">
                            <span className='d-block text-end'>Apollo client</span>
                            <span className='d-block text-end'>80%</span>
                        </div>
                        <ProgressBar striped variant="success" now={80} />
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Skills;