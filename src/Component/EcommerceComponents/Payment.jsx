import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Payment = () => {

    const classes = useStyles();

    const navigate = useNavigate()
    // const cart = useSelector((state) => state.handleCart)
    const [paymentMethodName, setPaymentMethodName] = useState(
        // cart.cart.paymentMethod || "PayPal"
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch(payment(paymentMethodName))
        // localStorage.setItem("paymentMethod", paymentMethodName)
        navigate("/placeOrder")
    }

    return (
        <div className='mt-5 pt-5 container'>
            <h1 className='text-center mt-3 mb-5'>Payment</h1>
            <Row>
                <Col md={6} className="mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <Form.Check
                                type='radio'
                                id="PayPal"
                                label="PayPal"
                                value="PayPal"
                                checked={paymentMethodName === "PayPal"}
                                onChange={(e) => setPaymentMethodName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <Form.Check
                                type='radio'
                                id="Stripe"
                                label="Stripe"
                                value="Stripe"
                                checked={paymentMethodName === "Stripe"}
                                onChange={(e) => setPaymentMethodName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <div className={classes.root}>
                                <Button variant="contained" type='submit' color="secondary" className='mt-2 mb-3 mx-auto d-flex'>
                                    Go to Order
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Payment;