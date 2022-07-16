import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ProductFeedback = ({ product }) => {
    const location = useLocation();
    return (
        <div className="modal-body">
            <h3 className="review-page-title">Write Your Review</h3>
            <div className="modal-inner-area row">
                <div className="col-lg-6">
                    <div className="li-review-product">
                        <img src={process.env.PUBLIC_URL + `/assets/images/product/large-size/${product?.images[0]}`} alt="Li's Product" />
                        <div className="li-review-product-desc">
                            <p className="li-product-name">{product?.name}</p>
                            <p>
                                <span>{product?.description}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="li-review-content">
                        <div className="feedback-area">
                            <div className="feedback">
                                <h3 className="feedback-title">Our Feedback</h3>
                                <form action="#">
                                    <p className="your-opinion">
                                        <label>Your Rating</label>
                                        <span>
                                            <select className="star-rating">
                                                <option defaultValue="1">1</option>
                                                <option defaultValue="2">2</option>
                                                <option defaultValue="3">3</option>
                                                <option defaultValue="4">4</option>
                                                <option defaultValue="5">5</option>
                                            </select>
                                        </span>
                                    </p>
                                    <p className="feedback-form">
                                        <label htmlFor="feedback">Your Review</label>
                                        <textarea id="feedback" name="comment" cols="45" rows="8" aria-required="true"></textarea>
                                    </p>
                                    <div className="feedback-input">
                                        <p className="feedback-form-author">
                                            <label htmlFor="author">Name<span className="required">*</span>
                                            </label>
                                            <input id="author" name="author" defaultValue="" size="30" aria-required="true" type="text" />
                                        </p>
                                        <p className="feedback-form-author feedback-form-email">
                                            <label htmlFor="email">Email<span className="required">*</span>
                                            </label>
                                            <input id="email" name="email" defaultValue="" size="30" aria-required="true" type="text" />
                                            <span className="required"><sub>*</sub> Required fields</span>
                                        </p>
                                        <div className="feedback-btn pb-15">
                                            <Link to={location.pathname} className="close" data-dismiss="modal" aria-label="Close">Close</Link>
                                            <Link to={location.pathname}>Submit</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFeedback