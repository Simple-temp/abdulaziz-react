import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { Divider, TextField } from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_PORTFOLIO } from '../../Graphql/AllMutation/PortfolioMutation';
import { GET_PORTFOLIO } from '../../Graphql/AllQuery/Portfolio';
import axios from 'axios';

const useStyles = makeStyles({
    media: {
        height: 140,
    },
});

const AdminPortfolio = () => {

    const classes = useStyles();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ name : "", category : "", live : "", des : "", fontCode : "", backCode : "", img : null, })
    const [delete_portfolio] = useMutation(DELETE_PORTFOLIO)
    const { loading, error, data } = useQuery(GET_PORTFOLIO)

    const handleChange = (e) => {
        const { name, files, value } = e.target
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        })
    }

    const handleSubmit = async (e) => {
        // e.preventDefault(e)
        const inputData = new FormData()
        inputData.append("name", formData.name)
        inputData.append("category", formData.category)
        inputData.append("live", formData.live)
        inputData.append("des", formData.des)
        inputData.append("fontCode", formData.fontCode)
        inputData.append("backCode", formData.backCode)
        inputData.append("img", formData.img)

        try {
            const response = await axios.post('http://localhost:5000/api/portfolio/createportfolio',
                inputData,
            );
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    const handleRemove = async (id) => {
        delete_portfolio({
            variables: {
                portfolioid: id
            }
        })
        window.location.reload();
    }

    return (
        <div className='mt-5 pt-5 container'>
            <h1 className='text-center mt-3 mb-5'>Admin Portfolio</h1>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <form className={classes.root} noValidate autoComplete="on">
                        {[
                            { name: "name", label: "Name", type: "text" },
                            { name: "category", label: "Category", type: "text" },
                            { name: "live", label: "Live", type: "text" },
                            { name: "des", label: "Description", type: "text" },
                            { name: "fontCode", label: "FontCode", type: "text" },
                            { name: "backCode", label: "BackCode", type: "text" },
                            { name: "img", type: "file" },
                        ].map((item) => (
                            <TextField
                                key={item.name}
                                name={item.name}
                                id="outlined-basic"
                                label={item.label}
                                type={item.type}
                                variant="outlined"
                                className='w-100 mb-3'
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
                            Add
                        </Button>
                    </div>
                </Col>
                <Col lg={8} md={6} sm={12}>
                    <Row>
                        {
                            loading ? <p>Loading..</p>
                                : error ? <p>{error.message}</p>
                                    : data.portfolio.map((item) => (
                                        <Col lg={6} md={6} sm={12} key={item._id}>
                                            <Card className='pb-3 mb-3'>
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
                                                        <Link to="#" className='text-decoration-none'>
                                                            Frontend
                                                        </Link>
                                                    </Button>
                                                    <Button size="small" color="primary">
                                                        <Link to="#" className='text-decoration-none'>
                                                            Backend
                                                        </Link>
                                                    </Button>
                                                </CardActions>
                                                <Button size="small" color="primary">
                                                    <Link to="#" className='text-decoration-none'>
                                                        Live!
                                                    </Link>
                                                </Button>
                                                <Link to={`/admin/portfolio/${item._id}`} className='text-decoration-none text-white ms-2'>
                                                    <Button variant="contained" color="secondary" className='mt-2'>
                                                        Edit
                                                    </Button>
                                                </Link>
                                                <Button variant="contained" color="default" className='mt-2 ms-3' onClick={() => handleRemove(item._id)}>
                                                    Delete
                                                </Button>
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

export default AdminPortfolio;