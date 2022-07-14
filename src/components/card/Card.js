import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import Modal from '../modal/Modal';
import { cartActions } from '../../store/slices/cart-slice';

const Card = ({ data }) => {
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [discount, setDiscount] = useState({ isDiscount: false, discountValue: 0, discountedPrice: null });

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch()
    const handleModal = () => {
        setIsVisibleModal(prev => !prev);
    }

    const addToCart = () => {
        dispatch(cartActions.addToCart({
            ...data,
            quantity: 1,
            totalPrice: 20
        }))
    }

    const getDiscount = () => {
        let isDiscount = data?.discount > 0;
        if (isDiscount) {
            let discountedPrice = data?.price - (data?.price * discount.discountValue / 100)
            setDiscount({ isDiscount: true, discountValue: data?.discount, discountedPrice: discountedPrice });
        }
    }

    useEffect(() => {
        getDiscount()
    }, [data]);

    return (
        <>
            <div className="single-product-wrap">
                <div className="product-image">
                    <Link to={`/product/${data?.id}`}>
                        <img src={`assets/images/product/large-size/${data?.images[Math.floor(Math.random() * 5)]}`} alt="Li's Product Image" />
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
                            <li onClick={addToCart} className="add-cart active"> Add to cart</li>
                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                            <li><span onClick={handleModal}><i className="fa fa-eye"></i></span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Modal data={data} isVisible={isVisibleModal} close={handleModal} />
        </>
    )
}

export default Card