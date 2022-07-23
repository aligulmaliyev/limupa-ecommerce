import React from 'react';
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import ContactInfo from '../containers/contact/ContactInfo';
import GoogleMap from '../containers/contact/GoogleMap';
import ContactForm from '../containers/contact/ContactForm';

const Contact = () => {
    return (
        <>
            <Breadcrumb page='Contact' />
            <div className="contact-main-page mt-60 mb-40 mb-md-40 mb-sm-40 mb-xs-40">
                <GoogleMap/>
                <div className="container">
                    <div className="row">
                        <ContactInfo/>
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div className="contact-form-content pt-sm-55 pt-xs-55">
                                <h3 className="contact-page-title">Tell Us Your Message</h3>
                                <div className="contact-form">
                                   <ContactForm/>
                                </div>
                                <p className="form-messege"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact