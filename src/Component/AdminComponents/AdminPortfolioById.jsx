import React, { useState } from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { portfolio } from '../../Data/Data';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    media: {
        height: 140,
    },
}));

const AdminPortfolioById = () => {

    const { id } = useParams()
    const classes = useStyles();
    const [formData, setFormData] = useState({})
    const [info, setInfo] = useState(portfolio)

    const found = info.find((item) => item.id == id)

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

    return (
        <div className='mt-5 pt-5 container'>
            <h1 className='text-center mt-3 mb-5'>Portfolio Edit</h1>
            <Row>
                <Col lg={8} md={12} className='mx-auto'>
                    <Badge bg="primary" className='my-3 p-2 ms-2'>Services Name : {found.live}</Badge>
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
                            name="category"
                            label="Category"
                            id="outlined-basic"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="des"
                            label="Description"
                            id="outlined-basic"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="live"
                            label="live link"
                            id="outlined-basic"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="fontCode"
                            label="Font-Code"
                            id="outlined-basic"
                            type='text'
                            variant="outlined"
                            className='w-100 mb-3'
                            onBlur={handleChange}
                        />

                        <TextField
                            name="backCode"
                            label="BackCode"
                            id="outlined-basic"
                            type='text'
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
                            Update
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AdminPortfolioById;