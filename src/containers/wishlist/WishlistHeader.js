import React from 'react'

const WishlistHeader = () => {
    return (
        <thead>
            <tr>
                <th className="li-product-remove">remove</th>
                <th className="li-product-thumbnail">images</th>
                <th className="cart-product-name">Product</th>
                <th className="li-product-price">Unit Price</th>
                <th className="li-product-stock-status">Stock Status</th>
                <th className="li-product-add-cart">add to cart</th>
            </tr>
        </thead>
    )
}

export default WishlistHeader