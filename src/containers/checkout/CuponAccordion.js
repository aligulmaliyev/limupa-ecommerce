import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { authActions } from '../../store/slices/auth-slice';

const CuponAccordion = () => {
    const [accordion, setAccordion] = useState(0);
    const handleAccordion = (number) => {
        if (accordion === number) {
            setAccordion(0)
        }
        else {
            setAccordion(number)
        }
    }
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Invalid email address')
                .required('This field is required'),
            password: Yup
                .string()
                .min(8, 'Must be 8 characters or much')
                .max(15, 'Must be 20 characters or less')
                .required('This field is required'),
        }),
        onSubmit: (values) => {
            dispatch(authActions.login(values));
        }
    })

    return (
        <div class="coupon-accordion">
            <h3 >Returning customer? <span onClick={() => handleAccordion(1)} id="showlogin">Click here to login</span></h3>
            <div id="checkout-login" class={`coupon-content ${accordion === 1 ? 'show' : ''}`}>
                <div class="coupon-info">
                    <p class="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.</p>
                    <form onSubmit={formik.handleSubmit}>
                        <p class="form-row-first">
                            <label>Username or email <span class="required">*</span></label>
                            <input type="text" {...formik.getFieldProps('email')} />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="alert alert-danger mt-2" role="alert">
                                    {formik.errors.email}
                                </div>
                            ) : null}
                        </p>
                        <p class="form-row-last">
                            <label>Password  <span class="required">*</span></label>
                            <input type="text"  {...formik.getFieldProps('password')} />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="alert alert-danger mt-2" role="alert">
                                    {formik.errors.password}
                                </div>
                            ) : null}
                        </p>
                        <p class="form-row">
                            <input value="Login" type="submit" />
                            <input type="checkbox" id="remember_me" />
                            <label htmlFor="remember_me">Remember me</label>
                        </p>
                        <p class="lost-password"><Link to="/register">Create Account?</Link></p>
                    </form>
                </div>
            </div>
            <h3 >Have a coupon? <span onClick={() => handleAccordion(2)} id="showcoupon">Click here to enter your code</span></h3>
            <div id="checkout_coupon" class={`coupon-checkout-content ${accordion === 2 ? 'show' : ''}`}>
                <div class="coupon-info">
                    <form action="#">
                        <p class="checkout-coupon">
                            <input placeholder="Coupon code" type="text" />
                            <input value="Apply Coupon" type="submit" />
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CuponAccordion