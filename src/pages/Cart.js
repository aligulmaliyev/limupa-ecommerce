import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import CartItem from '../components/cart/CartItem';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    return (
        <>
            <Breadcrumb page="Cart" />
            <div className="Shopping-cart-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-content table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="li-product-remove">remove</th>
                                            <th className="li-product-thumbnail">images</th>
                                            <th className="cart-product-name">Product</th>
                                            <th className="li-product-price">Unit Price</th>
                                            <th className="li-product-quantity">Quantity</th>
                                            <th className="li-product-subtotal">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.cartItems?.map(cartItem => (
                                                <CartItem key={cartItem.id} data={cartItem} />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="coupon-all">
                                        <div className="coupon">
                                            <input id="coupon_code" className="input-text" name="coupon_code" defaultValue="" placeholder="Coupon code" type="text" />
                                            <input className="button" name="apply_coupon" defaultValue="Apply coupon" type="submit" />
                                        </div>
                                        <div className="coupon2">
                                            <input className="button" name="update_cart" defaultValue="Update cart" type="submit" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 ml-auto">
                                    <div className="cart-page-total">
                                        <h2>Cart totals</h2>
                                        <ul>
                                            <li>Subtotal <span>${cart.totalPrice}</span></li>
                                            <li>Total <span>${cart.subtotalPrice}</span></li>
                                        </ul>
                                        <Link to='/checkout'>Proceed to checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart