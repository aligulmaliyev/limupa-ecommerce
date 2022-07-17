import React from 'react'
import { useSelector } from "react-redux";
import WishListCard from '../components/card/WishListCard';

const WishList = () => {
    const wishlist = useSelector(state => state.wishlist.wishlistItems);

    return (
        <div className="wishlist-area pt-60 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="#">
                            <div className="table-content table-responsive">
                                <table className="table">
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
                                    <tbody>
                                        {
                                            wishlist?.map(wish => (
                                                <WishListCard key={wish.id} data={wish} />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList