import React from 'react'

const CartHeader = () => {
    return (
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
    )
}

export default CartHeader