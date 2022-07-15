import React, { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cartActions } from '../../store/slices/cart-slice';
import { getDicountValue } from '../../utils/getDiscountValue';

const Modal = ({ isVisible, close, id }) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.allProducts);
    const cartItems = useSelector(state => state.cart.cartItems);
    const location = useLocation()

    const [imgSrc, setImgSrc] = useState('1.jpg');
    const [images, setImages] = useState([]);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [dimension, setDimension] = useState([]);
    const [selectedDimension, setSelectedDimension] = useState(0);
    const [addedCart, setAddedCart] = useState({});

    const handleChangeImgSrc = (src) => {
        setImgSrc(src);
    }

    const changeQuantity = (type) => {
        if (!isNaN(type) && typeof Number(type) === 'number') {
            setQuantity(type)
        }
        else if (type === "INC") {
            setQuantity(prevQua => prevQua += 1)
        }
        else {
            if (quantity <= 1) {
                setQuantity(1)
            }
            else {
                setQuantity(prevQua => prevQua -= 1)
            }
        }
    }

    const handleBlur = () => {
        if (quantity <= 1) {
            setQuantity(1)
        }
    }

    const handlerDimension = (e) => {
        let dimensionId = e.target.value;
        setSelectedDimension(dimensionId)
    }

    const addToCart = useCallback((e) => {
        e.preventDefault()
        dispatch(cartActions.addToCart({
            id:product?.id,
            name: product?.name,
            image: imgSrc,
            dimension: selectedDimension,
            price: product?.price,
            quantity: quantity,
            totalPrice: quantity * product?.price
        }))
    }, [product, imgSrc, selectedDimension, quantity, dispatch])

    useEffect(() => {
        let existingProduct = products?.find(product => product.id === id);
        setDimension(existingProduct?.dimension)
        setImages(existingProduct?.images)
        setProduct(existingProduct)
    }, [products, id])

    useEffect(() => {
        let addedCart = cartItems?.find(cartItem => cartItem.id === id);
        if (addedCart) {
            setImgSrc(addedCart.image);
            setQuantity(addedCart.quantity)
            setAddedCart(addedCart)
        }
    }, [cartItems, products, id])

    return (
        <div className={isVisible ? 'modal fade modal-wrapper show' : 'modal fade modal-wrapper'}  >
            <div className="modal-dialog modal-dialog-centered" >
                <div className="modal-content">
                    <div className="modal-body">
                        <button onClick={close} type="button" className="close" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-inner-area row">
                            <div className="col-lg-5 col-md-6 col-sm-6">
                                <div className="product-details-left">
                                    <div className="product-details-images slider-navigation-1">
                                        <div className="lg-image">
                                            <img src={`assets/images/product/large-size/${imgSrc}`} alt="product" />
                                        </div>
                                    </div>
                                    <div className="product-details-thumbs slider-thumbs-1">
                                        <Swiper slidesPerView={4} loop={true}>
                                            {
                                                images?.map((img, index) => (
                                                    <SwiperSlide key={index}>
                                                        <div className="sm-image"><img onClick={() => handleChangeImgSrc(img)} src={`assets/images/product/small-size/${img}`} alt="product thumb" /></div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 col-sm-6">
                                <div className="product-details-view-content pt-60">
                                    <div className="product-info">
                                        <h2>{product?.name}</h2>
                                        <span className="product-details-ref">Reference: demo_15</span>
                                        <div className="rating-box pt-20">
                                            <ul className="rating rating-with-review-item">
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                <li className="review-item"><Link to={location.pathname}>Read Review</Link></li>
                                                <li className="review-item"><Link to={location.pathname}>Write Review</Link></li>
                                            </ul>
                                        </div>
                                        <div className="price-box pt-20">
                                            <span className="new-price new-price-2">${getDicountValue(product?.price, product?.discount)}</span>
                                        </div>
                                        <div className="product-desc">
                                            <p>
                                                <span>{product?.description}</span>
                                            </p>
                                        </div>
                                        <div className="product-variants">
                                            <div className="produt-variants-size">
                                                <label>Dimension</label>
                                                <select className="nice-select" onClick={handlerDimension}>
                                                    {
                                                        dimension?.map(dimension => (
                                                            <option key={dimension.id} value={dimension.id} defaultValue={addedCart?.dimension?.id === dimension.id} >{dimension.name}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="single-add-to-cart">
                                            <form onSubmit={addToCart} className="cart-quantity">
                                                <div className="quantity">
                                                    <label>Quantity</label>
                                                    <div className="cart-plus-minus">
                                                        <input onChange={(e) => changeQuantity(e.target.value)} onBlur={handleBlur} className="cart-plus-minus-box" value={quantity} type="text" />
                                                        <div onClick={() => changeQuantity("DEC")} className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                                        <div onClick={() => changeQuantity("INC")} className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                                    </div>
                                                </div>
                                                <button className="add-to-cart" type="submit">Add to cart</button>
                                            </form>
                                        </div>
                                        <div className="product-additional-info pt-25">
                                            <a className="wishlist-btn" href="wishlist.html"><i className="fa fa-heart-o"></i>Add to wishlist</a>
                                            <div className="product-social-sharing pt-25">
                                                <ul>
                                                    <li className="facebook"><Link to={location.pathname}><i className="fa fa-facebook"></i>Facebook</Link></li>
                                                    <li className="twitter"><Link to={location.pathname}><i className="fa fa-twitter"></i>Twitter</Link></li>
                                                    <li className="google-plus"><Link to={location.pathname}><i className="fa fa-google-plus"></i>Google +</Link></li>
                                                    <li className="instagram"><Link to={location.pathname}><i className="fa fa-instagram"></i>Instagram</Link></li>
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