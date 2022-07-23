import React from 'react';
import WishListContainer from '../containers/wishlist/WishListContainer';

const WishList = () => {
    return (
        <div className="wishlist-area pt-60 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="#">
                            <div className="table-content table-responsive">
                                <WishListContainer />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList