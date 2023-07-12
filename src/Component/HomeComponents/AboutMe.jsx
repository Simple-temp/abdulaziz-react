import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { GET_ABOUT, GET_ICON } from '../../Graphql/AllQuery/About';
import { useQuery } from "@apollo/client"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const AboutMe = () => {

    const classes = useStyles();
    const { loading: aboutloading, error: abouterror, data: aboutdata } = useQuery(GET_ABOUT)
    const { loading: iconloading, error: iconerror, data: icondata } = useQuery(GET_ICON)

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
                <Col lg={6} md={6} sm={12} className='my-1 about-img'>
                    {
                        aboutloading ? <p>loading..</p>
                            : abouterror ? <p>{abouterror.message}</p>
                                : <img
                                    src={aboutdata.about[0].file}
                                    alt="this is about image"
                                    className='img-fluid w-100'
                                />
                    }
                </Col>
                <Col lg={6} md={6} sm={12} className='my-1 about-left'>
                    <Row>
                        {
                            aboutloading ? <p>loading..</p>
                                : abouterror ? <p>{abouterror.message}</p>
                                    : <div className="about-me mb-2">
                                        <h1>{aboutdata.about[0].name}</h1>
                                        <h4>{aboutdata.about[0].title}</h4>
                                    </div>
                        }
                    </Row>
                    <Row className='my-3'>
                        {
                            aboutloading ? <p>loading..</p>
                                : abouterror ? <p>{abouterror.message}</p>
                                    : <p>{aboutdata.about[0].des1}</p>
                        }
                    </Row>
                    <Row>
                        {
                            aboutloading ? <p>loading..</p>
                                : abouterror ? <p>{abouterror.message}</p>
                                    : <p>{aboutdata.about[0].des2}</p>
                        }
                    </Row>
                    <Row className='icon-row mt-3'>
                        <div className='d-flex'>
                            {
                                iconloading ? <p>Loading..</p>
                                    : iconerror ? <p>{iconerror.message}</p>
                                        : icondata.SocailIcon.map((singleIcon) => {
                                            return (
                                                <i className={singleIcon.name} key={singleIcon.iconLink}></i>
                                            )
                                        })
                            }
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