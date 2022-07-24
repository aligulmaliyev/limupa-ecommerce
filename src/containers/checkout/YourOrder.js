import React from 'react'
import { useSelector } from 'react-redux';

const YourOrder = () => {
    const cart = useSelector(state => state.cart);
    return (
        <div class="your-order">
            <h3>Your order</h3>
            <div class="your-order-table table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="cart-product-name">Product</th>
                            <th class="cart-product-total">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.cartItems.map(cartItem => (
                                <tr class="cart_item">
                                    <td class="cart-product-name"> {cartItem.name}<strong class="product-quantity"> × {cartItem.quantity}</strong></td>
                                    <td class="cart-product-total"><span class="amount">£{cartItem.totalPrice}</span></td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr class="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td><span class="amount">£{cart.totalPrice}</span></td>
                        </tr>
                        <tr class="order-total">
                            <th>Order Total</th>
                            <td><strong><span class="amount">£{cart.subtotalPrice}</span></strong></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="order-button-payment">
                <input value="Place order" type="submit" />
            </div>
        </div>
    )
}

export default YourOrder