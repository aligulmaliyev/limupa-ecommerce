import React from 'react'
import CartHeader from './CartHeader';
import CartBody from './CartBody';

const CartList = () => {
    return (
        <div className="table-content table-responsive">
            <table className="table">
                <CartHeader />
                <CartBody/>
            </table>
        </div>
    )
}

export default CartList