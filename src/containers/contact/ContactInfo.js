import React from 'react'

const ContactInfo = () => {
    return (
        <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
            <div className="contact-page-side-content">
                <h3 className="contact-page-title">Contact Us</h3>
                <p className="contact-page-message mb-25">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
                <div className="single-contact-block">
                    <h4><i className="fa fa-fax"></i> Address</h4>
                    <p>123 Main Street, Anytown, CA 12345 – USA</p>
                </div>
                <div className="single-contact-block">
                    <h4><i className="fa fa-phone"></i> Phone</h4>
                    <p>Mobile: (08) 123 456 789</p>
                    <p>Hotline: 1009 678 456</p>
                </div>
                <div className="single-contact-block last-child">
                    <h4><i className="fa fa-envelope-o"></i> Email</h4>
                    <p>contact@limupa.com</p>
                    <p>support@limupa.com</p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo