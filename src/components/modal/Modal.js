import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const Modal = ({ isVisible, close, data }) => {
    const [imgSrc, setImgSrc] = useState(data?.images[2]);

    const handleChangeImgSrc = (src) => {
        setImgSrc(src);
    }
    return (
        <div class={isVisible ? 'modal fade modal-wrapper show' : 'modal fade modal-wrapper'}  >
            <div class="modal-dialog modal-dialog-centered" >
                <div class="modal-content">
                    <div class="modal-body">
                        <button onClick={close} type="button" class="close" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="modal-inner-area row">
                            <div class="col-lg-5 col-md-6 col-sm-6">
                                <div class="product-details-left">
                                    <div class="product-details-images slider-navigation-1">
                                        <div class="lg-image">
                                            <img src={`assets/images/product/large-size/${imgSrc}`} alt="product image" />
                                        </div>
                                    </div>
                                    <div class="product-details-thumbs slider-thumbs-1">
                                        <Swiper slidesPerView={4}>
                                            <SwiperSlide>
                                                <div class="sm-image"><img onClick={() => handleChangeImgSrc('1.jpg')} src={`assets/images/product/small-size/1.jpg`} alt="product image thumb" /></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div class="sm-image"><img onClick={() => handleChangeImgSrc('2.jpg')} src={`assets/images/product/small-size/2.jpg`} alt="product image thumb" /></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div class="sm-image"><img onClick={() => handleChangeImgSrc('3.jpg')} src={`assets/images/product/small-size/3.jpg`} alt="product image thumb" /></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div class="sm-image"><img onClick={() => handleChangeImgSrc('4.jpg')} src={`assets/images/product/small-size/4.jpg`} alt="product image thumb" /></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div class="sm-image"><img onClick={() => handleChangeImgSrc('5.jpg')} src={`assets/images/product/small-size/5.jpg`} alt="product image thumb" /></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div class="sm-image"><img onClick={() => handleChangeImgSrc('6.jpg')} src={`assets/images/product/small-size/6.jpg`} alt="product image thumb" /></div>
                                            </SwiperSlide>
                                        </Swiper>

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-7 col-md-6 col-sm-6">
                                <div class="product-details-view-content pt-60">
                                    <div class="product-info">
                                        <h2>Today is a good day Framed poster</h2>
                                        <span class="product-details-ref">Reference: demo_15</span>
                                        <div class="rating-box pt-20">
                                            <ul class="rating rating-with-review-item">
                                                <li><i class="fa fa-star-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                <li class="review-item"><a href="#">Read Review</a></li>
                                                <li class="review-item"><a href="#">Write Review</a></li>
                                            </ul>
                                        </div>
                                        <div class="price-box pt-20">
                                            <span class="new-price new-price-2">$57.98</span>
                                        </div>
                                        <div class="product-desc">
                                            <p>
                                                <span>100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.
                                                </span>
                                            </p>
                                        </div>
                                        <div class="product-variants">
                                            <div class="produt-variants-size">
                                                <label>Dimension</label>
                                                <select class="nice-select">
                                                    <option value="1" title="S" selected="selected">40x60cm</option>
                                                    <option value="2" title="M">60x90cm</option>
                                                    <option value="3" title="L">80x120cm</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="single-add-to-cart">
                                            <form action="#" class="cart-quantity">
                                                <div class="quantity">
                                                    <label>Quantity</label>
                                                    <div class="cart-plus-minus">
                                                        <input class="cart-plus-minus-box" value="1" type="text" />
                                                        <div class="dec qtybutton"><i class="fa fa-angle-down"></i></div>
                                                        <div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>
                                                    </div>
                                                </div>
                                                <button class="add-to-cart" type="submit">Add to cart</button>
                                            </form>
                                        </div>
                                        <div class="product-additional-info pt-25">
                                            <a class="wishlist-btn" href="wishlist.html"><i class="fa fa-heart-o"></i>Add to wishlist</a>
                                            <div class="product-social-sharing pt-25">
                                                <ul>
                                                    <li class="facebook"><a href="#"><i class="fa fa-facebook"></i>Facebook</a></li>
                                                    <li class="twitter"><a href="#"><i class="fa fa-twitter"></i>Twitter</a></li>
                                                    <li class="google-plus"><a href="#"><i class="fa fa-google-plus"></i>Google +</a></li>
                                                    <li class="instagram"><a href="#"><i class="fa fa-instagram"></i>Instagram</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal