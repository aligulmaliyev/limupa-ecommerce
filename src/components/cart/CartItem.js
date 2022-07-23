import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/slices/cart-slice';
import { useDiscountHandler } from '../../hooks/useDiscountHandler';

const CartItem = ({ data }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems);
    const [quantity, setQuantity] = useState(1);
    const [discount, setDiscount] = useDiscountHandler();

    const addToCart = useCallback(() => {
        dispatch(cartActions.addToCart({
            id: data?.id,
            quantity,
            price: data?.price,
            totalPrice: quantity * data?.price,
            discountPrice: discount.discountedPrice,
        }))
        // eslint-disable-next-line
    }, [quantity, dispatch])

    const removeFromCart = (id) => {
        dispatch(cartActions.removeFromCart(id));
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
        addToCart()
    }

    const onBlurInput = () => {
        if (quantity <= 1) {
            setQuantity(1)
        }
        addToCart()
    }


    useEffect(() => {
        let addedCart = cartItems?.find(cartItem => cartItem.id === data.id);
        if (addedCart) {
            setQuantity(addedCart.quantity)
        }
        // eslint-disable-next-line
    }, [cartItems])
    useEffect(() => {
        setDiscount(data?.price, data?.discount);
        // eslint-disable-next-line
    }, [data]);

    return (
        <tr key={data.id}>
            <td className="li-product-remove" onClick={() => removeFromCart(data.id)}><span><i className="fa fa-times"></i></span></td>
            <td className="li-product-thumbnail"><Link to={`/product/${data.id}`}><img src={`assets/images/product/small-size/${data.image}`} alt="Li's Product" /></Link></td>
            <td className="li-product-name"><Link to={`/product/${data.id}`}>{data.name}</Link></td>
            <td className="li-product-price"><span className="amount">${data.price}</span></td>
            <td className="quantity">
                <label>Quantity</label>
                <div className="cart-plus-minus">
                    <input onChange={(e) => changeQuantity(e.target.value)} onBlur={onBlurInput} className="cart-plus-minus-box" value={quantity} type="text" />
                    <div onClick={() => changeQuantity("DEC")} className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                    <div onClick={() => changeQuantity("INC")} className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                </div>
            </td>
            <td className="product-subtotal"><span className="amount">${data.totalPrice}</span></td>
        </tr>
    )
}

export default CartItem