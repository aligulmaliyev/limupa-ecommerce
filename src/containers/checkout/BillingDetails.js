import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';

const BillingDetails = () => {

    const formik = useFormik({
        initialValues: {
            country: '',
            firstName: '',
            lastName: '',
            companyName: '',
            address: '',
            apartment: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            phone: '',
        },
        validationSchema: Yup.object({
            country: Yup
                .string()
                .required('Country is required'),
            firstName: Yup
                .string()
                .required('First Name is required'),
            lastName: Yup
                .string()
                .required('Last Name is required'),
            companyName: Yup
                .string(),
            address: Yup
                .string()
                .required('Address is required'),
            apartment: Yup
                .string(),
            city: Yup
                .string()
                .required('City is required'),
            state: Yup
                .string()
                .required('State is required'),
            zip: Yup
                .string()
                .required('Zip is required'),
            email: Yup
                .string()
                .email('Invalid email address')
                .required('Email is required'),
            phone: Yup
                .number()
                .required('Phone is required')
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} id="checkout_form">
            <div className="checkbox-form">
                <h3>Billing Details</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="country-select clearfix">
                            <label>Country <span className="required">*</span></label>
                            <select className="nice-select wide" {...formik.getFieldProps('country')}>
                                <option >--</option>
                                <option value="uk">London</option>
                                <option value="rou">Romania</option>
                                <option value="fr">French</option>
                                <option value="de">Germany</option>
                                <option value="aus">Australia</option>
                            </select>
                        </div>
                        {formik.touched.country && formik.errors.country ? (
                            <div className="alert alert-danger mt-2" role="alert">
                                {formik.errors.country}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-6">
                        <div className="checkout-form-list">
                            <label>First Name <span className="required">*</span></label>
                            <input placeholder="" type="text" {...formik.getFieldProps('firstName')} />
                        </div>
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="alert alert-danger mt-2" role="alert">
                                {formik.errors.firstName}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-6">
                        <div className="checkout-form-list">
                            <label>Last Name <span className="required">*</span></label>
                            <input placeholder="" type="text" {...formik.getFieldProps('lastName')} />
                        </div>
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="alert alert-danger mt-2" role="alert">
                                {formik.errors.lastName}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>Company Name</label>
                            <input placeholder="" type="text" {...formik.getFieldProps('companyName')} />
                        </div>
                        {formik.touched.companyName && formik.errors.companyName ? (
                            <div className="alert alert-danger mt-2" role="alert">
                                {formik.errors.companyName}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>Address <span className="required">*</span></label>
                            <input placeholder="Street address" type="text" {...formik.getFieldProps('address')} />
                        </div>
                        {formik.touched.address && formik.errors.address ? (
                            <div className="alert alert-danger mt-2" role="alert">
                                {formik.errors.address}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <input placeholder="Apartment, suite, unit etc. (optional)" type="text" {...formik.getFieldProps('apartment')} />
                        </div>
                        {formik.touched.apartment && formik.errors.apartment ? (
                            <div className="alert alert-danger mt-2" role="alert">
                                {formik.errors.apartment}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>Town / City <span className="required">*</span></label>
                            <input type="text" {...formik.getFieldProps('city')} />
                        </div>
                        {formik.touched.city && formik.errors.city ? (
                            <div className="alert alert-danger mt-2" role="alert">
                                {formik.errors.city}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-6">
                        <div className="checkout-form-list">
                            <label>State / County <span className="required">*</span></label>
                            <input placeholder="" type="text" {...formik.getFieldProps('state')} />
                        </div>
                        {formik.touched.state && formik.errors.state ? (
                            <div className="alert alert-danger mt-2" role="alert">
                                {formik.errors.state}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-6">
                        <div className="checkout-form-list">
                            <label>Postcode / Zip <span className="required">*</span></label>
                            <input placeholder="" type="text" {...formik.getFieldProps('zip')} />
                        </div>
                        {formik.touched.zip && formik.errors.zip ? (
                            <div className="alert alert-danger mt-2" role="alert">
                                {formik.errors.zip}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-6">
                        <div className="checkout-form-list">
                            <label>Email Address <span className="required">*</span></label>
                            <input placeholder="" type="email" {...formik.getFieldProps('email')} />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="alert alert-danger mt-2" role="alert">
                                {formik.errors.email}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-6">
                        <div className="checkout-form-list">
                            <label>Phone  <span className="required">*</span></label>
                            <input type="text" {...formik.getFieldProps('phone')} />
                        </div>
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="alert alert-danger mt-2" role="alert">
                                {formik.errors.phone}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </form>
    )
}

export default BillingDetails