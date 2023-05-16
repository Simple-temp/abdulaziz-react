import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AboutMe = () => {
    return (
        <section className='pt-2'>
            <div className="section-title-little text-center">
                About Me
            </div>
            <div className="section-title text-center">
                About Me
            </div>
            <Row className='section-content'>
                <h1 className='text-center mt-3 mb-5'>About Me</h1>
                <Col lg={6} md={6} sm={12} className='my-1'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni a totam alias, deserunt repellendus. Quaerat, beatae provident! Repellendus, sed.
                </Col>
                <Col lg={6} md={6} sm={12} className='my-1'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni a totam alias, deserunt repellendus. Quaerat, beatae provident! Repellendus, sed.
                </Col>
            </Row>
        </section>
    );
};

export default AboutMe;