import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import { socialIcons } from '../../Data/Data';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const AdminAboutScreen = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [formData, setFormData] = useState({})
    const [iconData, setIconData] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        console.log(formData)
    }

    const handleChangeIcon = (e) => {
        setIconData({
            ...iconData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitIcon = (e) => {
        e.preventDefault(e)
        console.log(iconData)
    }

    return (
        <div className='mt-5 pt-5 container'>
            <h1 className='text-center mt-3 mb-5'>About Admin</h1>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            name="name"
                            id="outlined-basic"
                            label="Name"
                            type="text"
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="img"
                            id="outlined-basic"
                            type='file'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="des1"
                            id="outlined-basic"
                            label="Description 1"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />
                        <TextField
                            name="des2"
                            id="outlined-basic"
                            label="Description 2"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="title"
                            id="outlined-basic"
                            label="Title"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />
                    </form>
                    <Divider />
                    <Divider />
                    <Divider />
                    <Divider />
                    <div className={classes.root}>
                        <Button
                            variant="contained"
                            color="primary"
                            className='mt-3 mb-5'
                            onClick={handleSubmit}
                        >
                            Update Profile
                        </Button>
                    </div>
                    {/* ========================================================================================here icon field */}
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            name="name"
                            id="outlined-basic"
                            label="Icon URL"
                            type="text"
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChangeIcon}
                        />

                        <TextField
                            name="iconLink"
                            label="Icon Link"
                            id="outlined-basic"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChangeIcon}
                        />
                    </form>
                    <Divider />
                    <Divider />
                    <Divider />
                    <Divider />
                    <div className={classes.root}>
                        <Button
                            variant="contained"
                            color="primary"
                            className='mt-3 mb-5'
                            onClick={handleSubmitIcon}
                        >
                            Update Icon
                        </Button>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <p className='text-center mb-3'>About preview</p>
                    <Row>
                        <Col lg={12} className='text-center'>
                            <img
                                src="https://res.cloudinary.com/image-hosting-api/image/upload/v1652429562/samples/people/boy-snow-hoodie.jpg"
                                alt=""
                                className='img-fluid'
                            />
                        </Col>
                        <Col lg={12}>
                            <p className='mb-2 mt-2'>Name : </p>
                            <p className='mb-2'>Des1 : </p>
                            <p className='mb-2'>Des2 : </p>
                            <p className='mb-2'>Title : </p>
                        </Col>
                        <Divider />
                        <Divider />
                        <Divider />
                        <Divider />
                        <Row className='icon-row mt-3 mb-3'>
                            <div className='d-flex'>
                                {
                                    socialIcons.map((singleIcon) => {
                                        return (
                                            <i className={singleIcon.name} key={singleIcon.iconLink}></i>
                                        )
                                    })
                                }
                            </div>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default AdminAboutScreen;