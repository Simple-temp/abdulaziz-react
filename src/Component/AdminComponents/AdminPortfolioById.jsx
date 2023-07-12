import React, { useState } from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { portfolio } from '../../Data/Data';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { GET_PORTFOLIO_BY_ID } from '../../Graphql/AllQuery/Portfolio';
import { useQuery } from "@apollo/client";

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
    const { loading, error, data } = useQuery(GET_PORTFOLIO_BY_ID,{
        variables : {
            portfolioid : id
        }
    })
    console.log(data)

    const handleChange = (e) => {
        const { name, files, value } = e.target
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
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
                    <Badge bg="primary" className='my-3 p-2 ms-2'>Portfolio Name : {loading ? "loading" : error ? "error" : data.portfolioById.name}</Badge>
                    <form className={classes.root} noValidate autoComplete="off">
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
                            Update
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AdminPortfolioById;