import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser'
import Notifilx from 'notiflix';

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .max(15, 'Must be 15 characters or less')
                .required('This field is required'),
            email: Yup
                .string()
                .email('Invalid email address')
                .required('This field is required'),
            subject: Yup
                .string()
                .max(30, 'Must be 30 characters or less')
                .required('This field is required'),
            message: Yup
                .string()
                .min(5, 'Must be 5 characters or many')
                .max(200, 'Must be 15 characters or less')
                .required('This field is required'),
        }),
        onSubmit: (values) => {
            try {
                emailjs.send('service_804m70k', 'template_utx012q', values, 'BXPAkeohtvKL0Jvwj')
                formik.resetForm()
                Notifilx.Notify.success("Sent..")
            } catch (error) {
                Notifilx.Notify.success(error.text)

            }
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} id="contact-form" >
            <div className="form-group">
                <label>Your Name <span className="required">*</span></label>
                <input
                    type="text"
                    id="name"
                    {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div className="alert alert-danger mt-2" role="alert">
                        {formik.errors.name}
                    </div>
                ) : null}
            </div>
            <div className="form-group">
                <label>Your Email <span className="required">*</span></label>
                <input
                    type="email"
                    id="email"
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="alert alert-danger mt-2" role="alert">
                        {formik.errors.email}
                    </div>
                ) : null}
            </div>
            <div className="form-group">
                <label>Subject</label>
                <input
                    type="text"
                    id="subject"
                    {...formik.getFieldProps('subject')}
                />
                {formik.touched.subject && formik.errors.subject ? (
                    <div className="alert alert-danger mt-2" role="alert">
                        {formik.errors.subject}
                    </div>
                ) : null}
            </div>
            <div className="form-group mb-30">
                <label>Your Message</label>
                <textarea
                    id="message"
                    {...formik.getFieldProps('message')}>
                </textarea>
                {formik.touched.message && formik.errors.message ? (
                    <div className="alert alert-danger mt-2" role="alert">
                        {formik.errors.message}
                    </div>
                ) : null}
            </div>
            <div className="form-group">
                <button type="submit" value="submit" id="submit" className="li-btn-3" name="submit">send</button>
            </div>
        </form>
    )
}

export default ContactForm