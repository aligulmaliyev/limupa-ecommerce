import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Modal from '../components/modal/Modal'
import Card from '../components/card/Card';
import ProductDetailContent from '../containers/products/ProductDetailContent'
import ProductFeedback from '../containers/products/ProductFeedback';

const ProductsDetail = () => {
    const products = useSelector(state => state.products.allProducts);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const handleModal = () => {
        setIsVisibleModal(prev => !prev);
    }
    return (
        <>
            <ProductDetailContent>
                <div className="block-reassurance">
                    <ul>
                        <li>
                            <div className="reassurance-item">
                                <div className="reassurance-icon">
                                    <i className="fa fa-check-square-o"></i>
                                </div>
                                <p>Security policy (edit with Customer reassurance module)</p>
                            </div>
                        </li>
                        <li>
                            <div className="reassurance-item">
                                <div className="reassurance-icon">
                                    <i className="fa fa-truck"></i>
                                </div>
                                <p>Delivery policy (edit with Customer reassurance module)</p>
                            </div>
                        </li>
                        <li>
                            <div className="reassurance-item">
                                <div className="reassurance-icon">
                                    <i className="fa fa-exchange"></i>
                                </div>
                                <p> Return policy (edit with Customer reassurance module)</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </ProductDetailContent>
            <div className="product-area pt-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-product-tab">
                                <ul className="nav li-product-menu">
                                    <li><a className="active" data-toggle="tab" href="#description"><span>Description</span></a></li>
                                    <li><a data-toggle="tab" href="#product-details"><span>Product Details</span></a></li>
                                    <li><a data-toggle="tab" href="#reviews"><span>Reviews</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="description" className="tab-pane active show" role="tabpanel">
                            <div className="product-description">
                                <span>The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in your desk or in an open-space office. Painted wooden frame with passe-partout for more depth.</span>
                            </div>
                        </div>
                        <div id="product-details" className="tab-pane" role="tabpanel">
                            <div className="product-details-manufacturer">
                                <a href="#">
                                    <img src="images/product-details/1.jpg" alt="Product Manufacturer Image" />
                                </a>
                                <p><span>Reference</span> demo_7</p>
                                <p><span>Reference</span> demo_7</p>
                            </div>
                        </div>
                        <div id="reviews" className="tab-pane" role="tabpanel">
                            <div className="product-reviews">
                                <div className="product-details-comment-block">
                                    <div className="comment-review">
                                        <span>Grade</span>
                                        <ul className="rating">
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li className="no-star"><i className="fa fa-star-o"></i></li>
                                            <li className="no-star"><i className="fa fa-star-o"></i></li>
                                        </ul>
                                    </div>
                                    <div className="comment-author-infos pt-25">
                                        <span>HTML 5</span>
                                        <em>01-12-18</em>
                                    </div>
                                    <div className="comment-details">
                                        <h4 className="title-block">Demo</h4>
                                        <p>Plaza</p>
                                    </div>
                                    <div className="review-btn">
                                        <a className="review-links" href="#" onClick={handleModal}>Write Your Review!</a>
                                    </div>
                                    <div className="modal fade modal-wrapper" id="mymodal" >
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <Modal isVisible={isVisibleModal} close={(handleModal)}>
                                                    <ProductFeedback />
                                                </Modal>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="product-area li-laptop-product pt-30 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-section-title">
                                <h2>
                                    <span>4 other products in the same category:</span>
                                </h2>
                            </div>
                            <div className="row">
                                {
                                    products?.slice(0, 4).map(product => (
                                        <div key={product.id} className="col-lg-3 col-md-3 col-sm-4 mt-40">
                                            <Card data={product} type='normal' />
                                        </div>
                                    ))

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductsDetail