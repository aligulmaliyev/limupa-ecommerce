import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

const Register = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            re_password: ''
        },
        validationSchema: Yup.object({
            firstName: Yup
                .string()
                .max(20, 'Must be 20 characters or less')
                .required('This field is required'),
            lastName: Yup
                .string()
                .max(20, 'Must be 20 characters or less')
                .required('This field is required'),
            email: Yup
                .string()
                .email('Invalid email address')
                .required('This field is required'),
            password: Yup
                .string()
                .min(8, 'Must be 8 characters or much')
                .max(15, 'Must be 20 characters or less')
                .required('This field is required'),
            re_password: Yup
                .string()
                .when("password", {
                    is: val => (val && val.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        "Both password need to be the same"
                    )
                }).required('This field is required'),
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <>
           <Breadcrumb page="Register"/>
            <div className="page-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-12 col-lg-8 col-xs-12">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="login-form">
                                    <h4 className="login-title">Register</h4>
                                    <div className="row">
                                        <div className="col-md-6 col-12 mb-20">
                                            <label htmlFor='firstName'>First Name</label>
                                            <input className="mb-0" type="text" id='firstName' placeholder="First Name" {...formik.getFieldProps('firstName')} />
                                            {formik.touched.firstName && formik.errors.firstName ? (
                                                <div className="alert alert-danger mt-2" role="alert">
                                                    {formik.errors.firstName}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="col-md-6 col-12 mb-20">
                                            <label htmlFor='lastName'>Last Name</label>
                                            <input className="mb-0" type="text" id='lastName' placeholder="Last Name" {...formik.getFieldProps('lastName')} />
                                            {formik.touched.lastName && formik.errors.lastName ? (
                                                <div className="alert alert-danger mt-2" role="alert">
                                                    {formik.errors.lastName}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="col-md-12 mb-20">
                                            <label htmlFor='email'>Email Address*</label>
                                            <input className="mb-0" type="email" id='email' placeholder="Email Address" {...formik.getFieldProps('email')} />
                                            {formik.touched.email && formik.errors.email ? (
                                                <div className="alert alert-danger mt-2" role="alert">
                                                    {formik.errors.email}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label htmlFor='password'>Password</label>
                                            <input className="mb-0" type="password" id='password' placeholder="Password" {...formik.getFieldProps('password')} />
                                            {formik.touched.password && formik.errors.password ? (
                                                <div className="alert alert-danger mt-2" role="alert">
                                                    {formik.errors.password}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label htmlFor='re_password'>Confirm Password</label>
                                            <input className="mb-0" type="password" id='re_password' placeholder="Confirm Password" {...formik.getFieldProps('re_password')} />
                                            {formik.touched.re_password && formik.errors.re_password ? (
                                                <div className="alert alert-danger mt-2" role="alert">
                                                    {formik.errors.re_password}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="col-12">
                                            <button className="register-button mt-0">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register