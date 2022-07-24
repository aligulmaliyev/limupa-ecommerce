import React from 'react'
import { useSelector } from 'react-redux';

const YourOrder = () => {
    const cart = useSelector(state => state.cart);
    return (
        <div className="your-order">
            <h3>Your order</h3>
            <div className="your-order-table table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="cart-product-name">Product</th>
                            <th className="cart-product-total">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.cartItems.map(cartItem => (
                                <tr key={cartItem.id} className="cart_item">
                                    <td className="cart-product-name"> {cartItem.name}<strong className="product-quantity"> × {cartItem.quantity}</strong></td>
                                    <td className="cart-product-total"><span className="amount">£{cartItem.totalPrice}</span></td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr className="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td><span className="amount">£{cart.totalPrice}</span></td>
                        </tr>
                        <tr className="order-total">
                            <th>Order Total</th>
                            <td><strong><span className="amount">£{cart.subtotalPrice}</span></strong></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="order-button-payment">
                <input form='checkout_form' value="Place order" type="submit" />
            </div>
        </div>
    )
}

export default YourOrder