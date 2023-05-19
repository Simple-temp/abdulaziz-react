import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        // '& > *': {
        //     margin: theme.spacing(1),
        //     width: '25ch',
        // },
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Contact = () => {

    const classes = useStyles();

    return (
        <section>
            <div className="section-title-little text-center">
                Contact
            </div>
            <div className="section-title text-center">
                Contact
            </div>
            <Row className='section-content'>
                <h1 className='text-center mt-3 mb-5'>Contact</h1>
                <form className={classes.root} noValidate autoComplete="off">
                    <Row>
                        <Col md={8} sm={12} className='mx-auto'>
                            <TextField id="standard-basic" label="Name" className='w-100' />
                            <TextField id="standard-basic" label="Email" className='w-100' />
                            <label htmlFor="" className='mt-3 text-secondary mb-2'>Message</label>
                            <textarea name="" id="standard-basic" className='w-100 message-box mb-5' rows="8"></textarea>
                            <Button variant="contained" color="primary">
                                Send Message
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Row>
        </section>
    );
};

export default Contact;