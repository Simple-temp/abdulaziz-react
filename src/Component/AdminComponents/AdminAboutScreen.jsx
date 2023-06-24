import React, { useState } from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { makeStyles, } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ABOUT, GET_ICON } from '../../Graphql/AllQuery/About';
import { CREATE_ABOUT, CREATE_ICON, DELETE_ICON } from '../../Graphql/AllMutation/AboutMutation';


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

    const { loading: loadingAbout, error: errorAbout, data: aboutData } = useQuery(GET_ABOUT)
    const { loading: loadingIcon, error: loadingError, data: IconData } = useQuery(GET_ICON)
    const [New_Icon] = useMutation(CREATE_ICON)
    const [New_About] = useMutation(CREATE_ABOUT)
    const [Delete_Icon] = useMutation(DELETE_ICON)

    const [formData, setFormData] = useState({ name: '', file: null, des1: '', des2: '', title: '' })
    const [iconData, setIconData] = useState({})

    const handleChange = (e) => {

        const { name, value, files } = e.target;

        setFormData({

            ...formData,
            [name]: files ? files[0] : value,

        })
    }

    const handleSubmit = async (e) => {

        // e.preventDefault(e)

        const inputData = new FormData()
        inputData.append("name", formData.name)
        inputData.append("file", formData.file)
        inputData.append("des1", formData.des1)
        inputData.append("des2", formData.des2)
        inputData.append("title", formData.title)

        try {

            New_About({
                variables: {
                    input: {
                        _id: aboutData.about[0]._id,
                        name: formData.name,
                        file: formData.file,
                        des1: formData.des1,
                        des2: formData.des2,
                        title: formData.title,
                    }
                }
            })

        } catch (error) {
            console.error(error);
        }
        // console.log(formData)

    }

    const handleChangeIcon = (e) => { setIconData({ ...iconData, [e.target.name]: e.target.value }) }

    const handleSubmitIcon = async (e) => {
        New_Icon({
            variables: {
                createIcon: { ...iconData }
            }
        })
        window.location.reload();
    }

    const handleDeleteIcon = (id) =>{
        Delete_Icon({
            variables : {
                id : id
            }
        })
        window.location.reload();
    }

    return (
        <div className='mt-5 pt-5 container'>
            <h1 className='text-center mt-3 mb-5'>About Admin</h1>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <form className={classes.root}>
                        <TextField name="name" value={formData.name} id="outlined-basic" label="Name" type="text" variant="outlined" className='w-100 mb-3' onChange={handleChange} />

                        <TextField name="file" id="outlined-basic" type='file' variant="outlined" className='w-100 mb-3' onChange={handleChange} />

                        <TextField name="des1" value={formData.des1} id="outlined-basic" label="Description 1" type='text' variant="outlined" className='w-100 mb-3' onChange={handleChange} />

                        <TextField name="des2" value={formData.des2} id="outlined-basic" label="Description 2" type='text' variant="outlined" className='w-100 mb-3' onChange={handleChange} />

                        <TextField name="title" value={formData.title} id="outlined-basic" label="Title" type='text' variant="outlined" className='w-100 mb-3' onChange={handleChange} />
                    </form>
                    <Divider />
                    <Divider />
                    <Divider />
                    <Divider />
                    <div className={classes.root}>
                        <Button variant="contained" color="primary" className='mt-3 mb-5' onClick={handleSubmit}>
                            Update Profile
                        </Button>
                    </div>
                    {/* ========================================================================================here icon field */}
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField name="name" id="outlined-basic" label="Icon className" type="text" variant="outlined" className='w-100 mb-3' onBlur={handleChangeIcon} />

                        <TextField name="iconLink" label="@example.com" id="outlined-basic" type='text' variant="outlined" className='w-100 mb-3' onBlur={handleChangeIcon} />
                    </form>
                    <Divider />
                    <Divider />
                    <Divider />
                    <Divider />
                    <div className={classes.root}>
                        <Button variant="contained" color="primary" className='mt-3 mb-5' onClick={handleSubmitIcon} >
                            Add Icon
                        </Button>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <p className='text-center mb-3'>About preview</p>
                    <Row>
                        <Col lg={12} className='text-center'>
                            {
                                loadingAbout ? <p>loading..</p>
                                    : errorAbout ? <p>{errorAbout.message}</p>
                                        : <img
                                            src={aboutData.about[0].file}
                                            alt="this is about image"
                                            className='img-fluid'
                                        />
                            }
                        </Col>
                        <Col lg={12}>
                            {
                                loadingAbout ? <p>loading..</p>
                                    : errorAbout ? <p>{errorAbout.message}</p>
                                        : <>
                                            <p className='mb-2 mt-2'>Name : {aboutData.about[0].name}</p>
                                            <p className='mb-2'>Des1 : {aboutData.about[0].des1}</p>
                                            <p className='mb-2'>Des2 : {aboutData.about[0].des2}</p>
                                            <p className='mb-2'>Title : {aboutData.about[0].title}</p>
                                        </>
                            }
                        </Col>
                        <Divider />
                        <Divider />
                        <Divider />
                        <Divider />
                        <Row className='mt-3 mb-3'>
                            <div className='d-flex'>
                                {
                                    loadingIcon ? <p>loading..</p>
                                        : loadingError ? <p>{loadingError.message}</p>
                                            : IconData.SocailIcon.map((singleIcon) => {
                                                return (
                                                    <div key={singleIcon._id}>
                                                        <div className='icon-row'>
                                                            <i className={singleIcon.name}></i>
                                                        </div>
                                                        <i className="fa-solid fa-skull-crossbones cross" onClick={()=>handleDeleteIcon(singleIcon._id)}></i>
                                                    </div>
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