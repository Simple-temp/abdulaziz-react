import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const about = {
    name: "Abdul Aziz",
    img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1652429562/samples/people/boy-snow-hoodie.jpg",
    des1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni a totam alias, deserunt repellendus. Quaerat, beatae provident! Repellendus, sed. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni a totam alias, deserunt repellendus. Quaerat, beatae provident! Repellendus, sed.",
    des2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni a totam alias, deserunt repellendus. Quaerat, beatae provident! Repellendus, sed. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni a totam alias, deserunt repellendus. Quaerat, beatae provident! Repellendus, sed.",
    title: "I am a website developer",
}

const socialIcons = [
    {
        name: "fa-brands fa-facebook-f",
        iconLink: "facebook.com"
    },
    {
        name: "fa-brands fa-twitter",
        iconLink: "twitter.com"
    },
    {
        name: "fa-brands fa-instagram",
        iconLink: "instagram.com"
    },
]

const AboutMe = () => {

    const classes = useStyles();

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
                    <img src={about.img} alt="" className='img-fluid w-100 about-img' />
                </Col>
                <Col lg={6} md={6} sm={12} className='my-1 p-4'>
                    <Row>
                        <div className="about-me mb-2">
                            <h1>{about.name}</h1>
                            <h4>{about.title}</h4>
                        </div>
                    </Row>
                    <Row className='my-3'>
                        <p>{about.des1}</p>
                    </Row>
                    <Row>
                        <p>{about.des2}</p>
                    </Row>
                    <Row className='icon-row mt-3'>
                        <div className='d-flex'>
                            {
                                socialIcons.map((singleIcon) => {
                                    return (
                                        <>
                                            <i className={singleIcon.name}></i>
                                        </>
                                    )
                                })
                            }
                            {/* <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i> */}
                        </div>
                    </Row>
                    <div className={classes.root}>
                        <Button variant="contained" color="primary" className='mt-4'>
                            Contact me
                        </Button>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default AboutMe;