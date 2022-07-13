import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ img }) => {
    return (
        <div class="single-product-wrap">
            <div class="product-image">
                <Link to='/product'>
                    <img src={`assets/images/product/large-size/${img}`} alt="Li's Product Image" />
                </Link>
                <span class="sticker">New</span>
            </div>
            <div class="product_desc">
                <div class="product_desc_info">
                    <div class="product-review">
                        <h5 class="manufacturer">
                            <a href="shop-left-sidebar.html">Studio Design</a>
                        </h5>
                        <div class="rating-box">
                            <ul class="rating">
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                            </ul>
                        </div>
                    </div>
                    <h4><a class="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                    <div class="price-box">
                        <span class="new-price new-price-2">$71.80</span>
                        <span class="old-price">$77.22</span>
                        <span class="discount-percentage">-7%</span>
                    </div>
                </div>
                <div class="add-actions">
                    <ul class="add-actions-link">
                        <li class="add-cart active"><a href="#">Add to cart</a></li>
                        <li><a class="links-details" href="wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                        <li><a href="#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Card