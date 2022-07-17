import React, { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from '../store/slices/cart-slice';
import { wishlistActions } from '../store/slices/wishlist-slice';

const WishList = () => {
    const wishlist = useSelector(state => state.wishlist.wishlistItems);
    const location = useLocation()
    const dispatch = useDispatch()

    const addToCart = useCallback((wish) => {
        dispatch(cartActions.addToCart(wish))
    }, [dispatch])
    const toggleWishList = useCallback((id) => {
        dispatch(wishlistActions.wishListToggler({ id }))
    }, [dispatch])
    return (
        <div className="wishlist-area pt-60 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="#">
                            <div className="table-content table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="li-product-remove">remove</th>
                                            <th className="li-product-thumbnail">images</th>
                                            <th className="cart-product-name">Product</th>
                                            <th className="li-product-price">Unit Price</th>
                                            <th className="li-product-stock-status">Stock Status</th>
                                            <th className="li-product-add-cart">add to cart</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            wishlist?.map(wish => (
                                                <tr key={wish.id}>
                                                    <td className="li-product-remove"><Link onClick={() => toggleWishList(wish.id)} to={location.pathname}><i className="fa fa-times"></i></Link></td>
                                                    <td className="li-product-thumbnail"><Link to={location.pathname}><img src={process.env.PUBLIC_URL + `/assets/images/wishlist-thumb/${wish.image}`} alt="" /></Link></td>
                                                    <td className="li-product-name"><Link to={location.pathname}>{wish.name}</Link></td>
                                                    <td className="li-product-price"><span className="amount">${wish.price}</span></td>
                                                    <td className="li-product-stock-status"><span className={wish.stockStatus ? "in-stock" : "out-stock"}>{wish.stockStatus ? "in stock" : "out stock"}</span></td>
                                                    <td className="li-product-add-cart"><Link onClick={() => addToCart(wish)} to={location.pathname}>add to cart</Link></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList