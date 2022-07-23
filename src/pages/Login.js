import { useFormik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import * as Yup from 'yup';

const Login = () => {
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
            console.log(values)
        }
    })
    return (
        <>
            <Breadcrumb page='Register' />
            <div className="page-section mb-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                            <form onSubmit={formik.handleSubmit} action="#" >
                                <div className="login-form">
                                    <h4 className="login-title">Login</h4>
                                    <div className="row">
                                        <div className="col-md-12 col-12 mb-20">
                                            <label htmlFor='email'>Email Address*</label>
                                            <input className="mb-0" type="email" id='email' placeholder="Email Address" {...formik.getFieldProps('email')} />
                                            {formik.touched.email && formik.errors.email ? (
                                                <div className="alert alert-danger mt-2" role="alert">
                                                    {formik.errors.email}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="col-12 mb-20">
                                            <label htmlFor='password'>Password</label>
                                            <input className="mb-0" type="password" id='password' placeholder="Password" {...formik.getFieldProps('password')} />
                                            {formik.touched.password && formik.errors.password ? (
                                                <div className="alert alert-danger mt-2" role="alert">
                                                    {formik.errors.password}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="col-md-8">
                                            <div className="check-box d-inline-block ml-0 ml-md-2 mt-10">
                                                <input type="checkbox" id="remember_me" />
                                                <label htmlFor="remember_me">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-10 mb-20 text-left text-md-right">
                                            <Link to={""}> Forgotten pasward?</Link>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="register-button mt-0">Login</button>
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

export default Login