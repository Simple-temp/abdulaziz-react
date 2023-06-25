import React, { useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_BLOG } from '../../Graphql/AllQuery/Blog';
import { CREATE_BLOG, DELETE_BLOG } from '../../Graphql/AllMutation/BlogMutation';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const AdminBLog = () => {

    const classes = useStyles();
    const { loading: loadingBLog, error: errorBlog, data: dataBlog } = useQuery(GET_BLOG)
    const [NewBlog] = useMutation(CREATE_BLOG)
    const [Delete_Blog] = useMutation(DELETE_BLOG)
    const [formData, setFormData] = useState({ name: "", img: null, des: "", details: "" })

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        })
    }

    const handleSubmit = async (e) => {

        const inputData = new FormData()
        inputData.append("name", formData.name)
        inputData.append("img", formData.img)
        inputData.append("des", formData.des)
        inputData.append("details", formData.details)

        NewBlog({
            variables : {
                blogInputInfo : {
                    name : formData.name,
                    img : formData.img,
                    des : formData.des,
                    details : formData.details
                }
            }
        })

        window.location.reload();

    }

    const handleRemove = async (id) =>{
        Delete_Blog({
            variables : {
                blogid : id
            }
        })
        
        window.location.reload();
    }

    return (
        <div className='mt-5 pt-5 container'>
            <h1 className='text-center mt-3 mb-5'>Blogs</h1>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <form className={classes.root}>
                        <TextField
                            name="name" id="outlined-basic" label="Name" type="text" variant="outlined" className='w-100 mb-3' onBlur={handleChange} />

                        <TextField name="img" id="outlined-basic" type='file' variant="outlined" className='w-100 mb-3' onBlur={handleChange}
                        />

                        <TextField
                            name="des" label="Description" id="outlined-basic" type='text' variant="outlined" className='w-100 mb-3' onBlur={handleChange} />

                        <TextField
                            name="details" label="Details" id="outlined-basic" type='text' variant="outlined" className='w-100 mb-3' onBlur={handleChange} />
                    </form>

                    <Divider />
                    <Divider />
                    <Divider />
                    <Divider />
                    <div className={classes.root}>
                        <Button variant="contained" color="primary" className='mt-3 mb-5' onClick={handleSubmit} >
                            Add
                        </Button>
                    </div>
                </Col>
                <Col lg={8} md={6} sm={12}>
                    <p className='text-center mb-3'>Blog preview</p>
                    <Row>
                        {
                            loadingBLog ? <p>Loading..</p>
                                : errorBlog ? <p>{errorBlog.message}</p>
                                    : dataBlog.blog.map((item) => (
                                        <Col lg={6} md={6} sm={12} className='mb-3' key={item._id}>
                                            <Card>
                                                <Card.Img variant="top" src={item.img} className='w-100 d-block' alt='this is blog image' />
                                                <Card.Body>
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Card.Text className='my-2'>
                                                        {item.des}
                                                    </Card.Text>
                                                    {/* <Link to="/" className='text-decoration-none text-white'>
                                                        <Button variant="contained" color="primary" className='mt-2' disabled>
                                                            Details
                                                        </Button>
                                                    </Link> */}
                                                    <Link to={`/admin/blog/${item._id}`} className='text-decoration-none text-white ms-2'>
                                                        <Button variant="contained" color="secondary" className='mt-2'>
                                                            Edit
                                                        </Button>
                                                    </Link>
                                                    <Button variant="contained" color="default" className='mt-2 ms-3' onClick={ () => handleRemove(item._id)}>
                                                        Delete
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default AdminBLog;