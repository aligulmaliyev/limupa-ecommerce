import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../../components/cart/CartItem';

const CartBody = () => {
    const cart = useSelector(state => state.cart);
    return (
        <tbody>
            {
                cart.cartItems?.map(cartItem => (
                    <CartItem key={cartItem.id} data={cartItem} />
                ))
            }
        </tbody>
    )
}

export default CartBody