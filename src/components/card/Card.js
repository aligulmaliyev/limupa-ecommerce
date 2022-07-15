import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import Modal from '../modal/Modal';
import { cartActions } from '../../store/slices/cart-slice';
import { getDicountValue } from '../../utils/getDiscountValue';

const Card = ({ data, type = 'normal' }) => {
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [discount, setDiscount] = useState({ isDiscount: false, discountValue: 0, discountedPrice: 0 });

    const dispatch = useDispatch()
    const handleModal = () => {
        setIsVisibleModal(prev => !prev);
    }

    const addToCart = useCallback(() => {
        dispatch(cartActions.addToCart({
            id: data?.id,
            name: data?.name,
            image: data?.images[0],
            dimension: data?.dimension[0],
            price: data?.price,
            discountPrice: discount.discountedPrice,
            quantity: 1,
            totalPrice: data?.price
        }))
    }, [data, discount, dispatch])

    const getDiscount = useCallback(
        () => {
            let isDiscount = data?.discount > 0;
            if (isDiscount) {
                let discountedPrice = getDicountValue(data?.price, discount.discountValue)
                setDiscount({ isDiscount: true, discountValue: data?.discount, discountedPrice: discountedPrice });
            }
        },
        [data, discount],
    )

    useEffect(() => {
        getDiscount()
    }, [data]);

    return (
        <>
            {
                type === 'normal' &&
                <div className="single-product-wrap">
                    <div className="product-image">
                        <Link to={`/product/${data?.id}`}>
                            <img src={`assets/images/product/large-size/${data?.images[Math.floor(Math.random() * 5)]}`} alt="Li's Product" />
                        </Link>
                        {data?.new && <span className="sticker">New</span>}
                    </div>
                    <div className="product_desc">
                        <div className="product_desc_info">
                            <div className="product-review">
                                <h5 className="manufacturer">
                                    <Link to={`/products/category/${data?.categoryId}`}>{data?.categoryName}</Link>
                                </h5>
                                <div className="rating-box">
                                    <ul className="rating">
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li className="no-star"><i className="fa fa-star-o"></i></li>
                                        <li className="no-star"><i className="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <h4><Link className="product_name" to={`/product/${data?.id}`}>{data?.name}</Link></h4>
                            <div className="price-box">
                                <span className={discount.isDiscount ? "new-price new-price-2" : "new-price"}>${discount.isDiscount ? discount.discountedPrice : data?.price}</span>
                                {discount.isDiscount &&
                                    <>
                                        <span className="old-price">${data?.price}</span>
                                        <span className="discount-percentage">-{discount.discountValue}%</span>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="add-actions">
                            <ul className="add-actions-link">
                                <li onClick={addToCart} className="add-cart active"><span> Add to cart</span></li>
                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                <li><span onClick={handleModal}><i className="fa fa-eye"></i></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
            {
                type === 'list' && <div class="row product-layout-list">
                    <div class="col-lg-3 col-md-5 ">
                        <div class="product-image">
                            <a href="single-product.html">
                                <img src={`assets/images/product/large-size/${data?.images[Math.floor(Math.random() * 5)]}`} alt="Li's Product" />
                            </a>
                            <span class="sticker">New</span>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-7">
                        <div class="product_desc">
                            <div class="product_desc_info">
                                <div class="product-review">
                                    <h5 class="manufacturer">
                                        <Link to={`/products/category/${data?.categoryId}`}>{data?.categoryName}</Link>
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
                                <h4><Link class="product_name" to={`/product/${data?.id}`}>{data?.name}</Link></h4>
                                <div class="price-box">
                                    <span class="new-price">$46.80</span>
                                </div>
                                <p>{data?.description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="shop-add-action mb-xs-30">
                            <ul class="add-actions-link  flex-product">
                                <li onClick={addToCart} class="add-cart"><span>Add to cart</span></li>
                                <li class="wishlist"><Link to="/wishlist"><i class="fa fa-heart-o"></i>Add to wishlist</Link></li>
                                <li onClick={handleModal}><span class="quick-view"><i class="fa fa-eye"></i>Quick view</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
            }
            <Modal id={data?.id} isVisible={isVisibleModal} close={handleModal} />
        </>
    )
}

export default Card

