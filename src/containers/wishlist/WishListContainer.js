import React from 'react'
import WishlistHeader from './WishlistHeader';
import WishlistBody from './WishlistBody';

const WishListContainer = () => {
    return (
        <table className="table">
            <WishlistHeader />
            <WishlistBody />
        </table>

    )
}

export default WishListContainer