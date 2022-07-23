import React from 'react'
import { useSelector } from 'react-redux';
import WishListCard from '../../components/card/WishListCard';

const WishlistBody = () => {
    const wishlist = useSelector(state => state.wishlist.wishlistItems);
    return (
        <tbody>
            {
                wishlist?.map(wish => (
                    <WishListCard key={wish.id} data={wish} />
                ))
            }
        </tbody>
    )
}

export default WishlistBody