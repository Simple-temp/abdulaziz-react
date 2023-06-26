import React, { useState } from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_SERVICES_BY_ID } from '../../Graphql/AllQuery/Services';
import axios from 'axios';

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

const AdminServicesById = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const { loading, error, data } = useQuery(GET_SERVICES_BY_ID, {
        variables: {
            servicesid: id
        }
    })
    const classes = useStyles();
    const [formData, setFormData] = useState({name: "", category: "", stock: "", des: "", qty: "", rating: "", price: "", img: null})


    const handleChange = (e) => {
        const { name, files, value } = e.target
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        })
    }

    const handleSubmit = async (e) => {

        const inputData = new FormData()
        inputData.append("name", formData.name)
        inputData.append("category", formData.category)
        inputData.append("stock", formData.stock)
        inputData.append("des", formData.des)
        inputData.append("qty", formData.qty)
        inputData.append("rating", formData.rating)
        inputData.append("price", formData.price)
        inputData.append("img", formData.img)

        try {
            const response = await axios.put(`http://localhost:5000/api/services/updateservices/${ data.servicesById._id}`,
                inputData
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        navigate("/admin/services/")
        window.location.reload();
    }

    return (
        <div className='mt-5 pt-5 container'>
            <h1 className='text-center mt-3 mb-5'>Services Edit</h1>
            <Row>
                <Col lg={8} md={12} className='mx-auto'>
                    <Badge bg="primary" className='my-3 p-2 ms-2'>Services Name : {loading ? "loading" : error ? "error" : data.servicesById.name}</Badge>
                    <form className={classes.root} noValidate autoComplete="off">
                        {[
                            { name: "Name", field: "name", type: "text" },
                            { name: "Category", field: "category", type: "text" },
                            { name: "Stock", field: "stock", type: "number" },
                            { name: "Description", field: "des", type: "text" },
                            { name: "Quantity", field: "qty", type: "number" },
                            { name: "Rating", field: "rating", type: "number" },
                            { name: "Price", field: "price", type: "number" },
                            { field: "img", type: "file" },
                        ].map((field) => (
                            <TextField
                                key={field.field}
                                name={field.field}
                                label={field.name}
                                id="outlined-basic"
                                type={field.type}
                                variant="outlined"
                                className="w-100 mb-3"
                                onBlur={handleChange}
                            />
                        ))}
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

export default AdminServicesById;