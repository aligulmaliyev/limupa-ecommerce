import React, { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { cartActions } from '../../store/slices/cart-slice';
import { wishlistActions } from '../../store/slices/wishlist-slice';

const WishListCard = ({data}) => {
    const location = useLocation()
    const dispatch = useDispatch()

    const addToCart = useCallback((data) => {
        dispatch(cartActions.addToCart(data))
    }, [dispatch])

    const toggleWishList = useCallback((id) => {
        dispatch(wishlistActions.wishListToggler({ id }))
    }, [dispatch])

    return (
        <tr>
            <td className="li-product-remove"><Link onClick={() => toggleWishList(data.id)} to={location.pathname}><i className="fa fa-times"></i></Link></td>
            <td className="li-product-thumbnail"><Link to={location.pathname}><img src={process.env.PUBLIC_URL + `/assets/images/product/large-size/${data.image}`} alt="" /></Link></td>
            <td className="li-product-name"><Link to={location.pathname}>{data.name}</Link></td>
            <td className="li-product-price"><span className="amount">${data.price}</span></td>
            <td className="li-product-stock-status"><span className={data.stockStatus ? "in-stock" : "out-stock"}>{data.stockStatus ? "in stock" : "out stock"}</span></td>
            <td className="li-product-add-cart"><Link onClick={() => addToCart(data)} to={location.pathname}>add to cart</Link></td>
        </tr>
    )
}

export default WishListCard