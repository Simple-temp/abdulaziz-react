import React, { useState } from 'react';
import { Col, Row, Card, Badge } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_BLOG_BY_ID } from '../../Graphql/AllQuery/Blog';
import { UPDATE_BLOG } from '../../Graphql/AllMutation/BlogMutation';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const AdminBlogById = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const { loading: loadingBlog, error: errorBlog, data: dataBlog } = useQuery(GET_BLOG_BY_ID, {
        variables: {
            blogid: id
        }
    })
    const [Update_Blog] = useMutation(UPDATE_BLOG)
    const classes = useStyles();
    const [formData, setFormData] = useState({ name: "", img: null, des: "", details: "" })

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault(e)

        const inputData = new FormData()
        inputData.append("name", formData.name)
        inputData.append("img", formData.img)
        inputData.append("des", formData.des)
        inputData.append("details", formData.details)

        Update_Blog({
            variables : {
                blogUpdateInfo : {
                    _id :  dataBlog.blogById._id,
                    name : formData.name,
                    img : formData.img,
                    des : formData.des,
                    details : formData.details
                }
            }
        })
        navigate("/admin/blog")
    }

    return (
        <div className='mt-5 pt-5 container'>
            <h1 className='text-center mt-3 mb-5'>Blog Edit</h1>
            <Row>
                <Col lg={8} md={12} className='mx-auto'>
                    <Badge bg="primary" className='my-3 p-2 ms-2'>Blog Name : {loadingBlog ? "loading.." : errorBlog ? "error" : dataBlog.blogById.name}</Badge>
                    <form className={classes.root}>
                        <TextField name="name" id="outlined-basic" label="Name" type="text" variant="outlined" className='w-100 mb-3' onBlur={handleChange} />

                        <TextField name="img" id="outlined-basic" type='file' variant="outlined" className='w-100 mb-3' onBlur={handleChange} />

                        <TextField name="des" label="Description" id="outlined-basic" type='text' variant="outlined" className='w-100 mb-3' onBlur={handleChange} />

                        <TextField name="details" label="Details" id="outlined-basic" type='text' variant="outlined" className='w-100 mb-3' onBlur={handleChange} />
                    </form>

                    <Divider />
                    <Divider />
                    <Divider />
                    <Divider />
                    <div className={classes.root}>
                        <Button variant="contained" color="primary" className='mt-3 mb-5' onClick={handleSubmit} >
                            Update
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AdminBlogById;