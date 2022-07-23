import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const CartTotals = () => {
    const cart = useSelector(state => state.cart);
    return (
        <div className="row">
            <div className="col-md-5 ml-auto">
                <div className="cart-page-total">
                    <h2>Cart totals</h2>
                    <ul>
                        <li>Subtotal <span>${cart.subtotalPrice}</span></li>
                        <li>Total <span>${cart.totalPrice}</span></li>
                    </ul>
                    <Link to='/checkout'>Proceed to checkout</Link>
                </div>
            </div>
        </div>
    )
}

export default CartTotals