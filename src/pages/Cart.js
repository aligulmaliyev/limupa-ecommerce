import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import CartCupon from '../containers/cart/CartCupon';
import CartList from '../containers/cart/CartList';
import CartTotals from '../containers/cart/CartTotals';

const Cart = () => {
    return (
        <>
            <Breadcrumb page="Cart" />
            <div className="Shopping-cart-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <CartList />
                            <CartCupon />
                            <CartTotals />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart