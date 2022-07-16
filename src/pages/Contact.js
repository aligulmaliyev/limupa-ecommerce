import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'

const Contact = () => {
    return (
        <>
        <Breadcrumb page='Contact'/>
        <div className="contact-main-page mt-60 mb-40 mb-md-40 mb-sm-40 mb-xs-40">
            <div className="container mb-60">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48625.558628958956!2d49.776006116108185!3d40.384533547541714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d8c33c62a3f%3A0x77807ca915edd570!2sYasamal%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1658011179325!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="container">
                <div className="row">
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
                                <p>yourmail@domain.com</p>
                                <p>support@hastech.company</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                        <div className="contact-form-content pt-sm-55 pt-xs-55">
                            <h3 className="contact-page-title">Tell Us Your Message</h3>
                            <div className="contact-form">
                                <form id="contact-form" action="http://demo.hasthemes.com/limupa-v3/limupa/mail.php" method="post">
                                    <div className="form-group">
                                        <label>Your Name <span className="required">*</span></label>
                                        <input type="text" name="customerName" id="customername" required />

                                    </div>
                                    <div className="form-group">
                                        <label>Your Email <span className="required">*</span></label>
                                        <input type="email" name="customerEmail" id="customerEmail" required />

                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input type="text" name="contactSubject" id="contactSubject" />

                                    </div>
                                    <div className="form-group mb-30">
                                        <label>Your Message</label>
                                        <textarea name="contactMessage" id="contactMessage" ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" value="submit" id="submit" className="li-btn-3" name="submit">send</button>
                                    </div>
                                </form>
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