import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_SERVICES } from '../../Graphql/AllQuery/Services';
import axios from 'axios';
import { DELETE_SERVICES } from '../../Graphql/AllMutation/ServicesMutation';

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


const AdminServices = () => {

    const classes = useStyles();
    const { loading, error, data } = useQuery(GET_SERVICES)
    const [ Delete_Services] = useMutation(DELETE_SERVICES)
    const [formData, setFormData] = useState({ name: "", category: "", stock: "", des: "", qty: "", rating: "", price: "", img: null })

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
            const response = await axios.post('http://localhost:5000/api/services/createservices',
                inputData,
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        window.location.reload();

    }

    const habdleRemove = async (id) =>{
        Delete_Services({
            variables : {
                servicesid: id
            }
        })
        window.location.reload();
    }

    return (
        <div className='mt-5 pt-5 container'>
            <h1 className='text-center mt-3 mb-5'>Admin Services</h1>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <form className={classes.root} encType='multipart/form-data'>
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
                                onChange={handleChange}
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
                            Add
                        </Button>
                    </div>
                </Col>
                <Col lg={8} md={6} sm={12}>
                    <p className='text-center mb-3'>Services preview</p>
                    <Row>
                        {
                            loading ? <p>Loading..</p>
                                : error ? <p>{error.message}</p>
                                    : data.services.map((item) => (
                                        <Col lg={6} md={6} sm={12} key={item._id} className='mb-3'>
                                            <Card>
                                                <CardActionArea>
                                                    <CardMedia
                                                        className={`${classes.media} img-fluid w-100 d-block`}
                                                        image={item.img}
                                                        title="Contemplative Reptile"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {item.name}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {item.des}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                        ${item.price}
                                                    </Button>
                                                    <Button size="small" color="primary">
                                                        Rating : {item.rating}
                                                    </Button>
                                                    <Link to={`/admin/services/${item._id}`} className='text-decoration-none text-white ms-2'>
                                                        <Button variant="contained" color="secondary" className='mt-2'>
                                                            Edit
                                                        </Button>
                                                    </Link>
                                                    <Button variant="contained" color="default" className='mt-2 ms-3' onClick={()=>habdleRemove(item._id)}>
                                                        Delete
                                                    </Button>
                                                </CardActions>
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

export default AdminServices;