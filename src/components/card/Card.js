import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import Modal from '../modal/Modal';
import { cartActions } from '../../store/slices/cart-slice';
import { wishlistActions } from '../../store/slices/wishlist-slice';
import { useDiscountHandler } from '../../hooks/useDiscountHandler';
import ProductDetailContent from '../../containers/products/ProductDetailContent';

const Card = ({ data, type = 'normal' }) => {
    const wishlist = useSelector(state => state.wishlist.wishlistItems);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [isAddedWishList, setAddedWishList] = useState(false);
    const [discount, setDiscount] = useDiscountHandler();
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

    const toggleWishList = useCallback(() => {
        dispatch(wishlistActions.wishListToggler({
            id: data?.id,
            name: data?.name,
            image: data?.images[0],
            dimension: data?.dimension[0],
            price: data?.price,
            discountPrice: discount.discountedPrice,
            quantity: 1,
            totalPrice: data?.price,
            stockStatus: data.stock > 0,
        }))
    }, [data, discount, dispatch])

    useEffect(() => {
        setDiscount(data?.price, data?.discount);
    }, [data]);

    useEffect(() => {
        let addedWishList = wishlist.some(item => item.id === data?.id)
        setAddedWishList(addedWishList)
    }, [wishlist]);

    return (
        <>
            {
                type === 'normal' &&
                <div className="single-product-wrap">
                    <div className="product-image">
                        <Link to={`/product/${data?.id}`}>
                            <img src={process.env.PUBLIC_URL + `/assets/images/product/large-size/${data?.images[Math.floor(Math.random() * 5)]}`} alt="Li's Product" />
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
                                <li onClick={toggleWishList}><span>
                                    {isAddedWishList ?
                                        <i style={{ color: 'red' }} className="fa fa-heart"></i> :
                                        <i className="fa fa-heart-o"></i>}
                                </span></li>
                                <li><span onClick={handleModal}><i className="fa fa-eye"></i></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
            {
                type === 'list' && <div className="row product-layout-list">
                    <div className="col-lg-3 col-md-5 ">
                        <div className="product-image">
                            <Link to={`/product/${data.id}`}>
                                <img src={process.env.PUBLIC_URL + `/assets/images/product/large-size/${data?.images[Math.floor(Math.random() * 5)]}`} alt="Li's Product" />
                            </Link>
                            <span className="sticker">New</span>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-7">
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
                                <p>{data?.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="shop-add-action mb-xs-30">
                            <ul className="add-actions-link  flex-product">
                                <li onClick={addToCart} className="add-cart"><span>Add to cart</span></li>
                                <li className="wishlist"><Link to="/wishlist"><i className="fa fa-heart-o"></i>Add to wishlist</Link></li>
                                <li onClick={handleModal}><span className="quick-view"><i className="fa fa-eye"></i>Quick view</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
            }
            <Modal isVisible={isVisibleModal} close={handleModal} >
                <ProductDetailContent id={data?.id} product={data} />
            </Modal>
        </>
    )
}

export default Card

