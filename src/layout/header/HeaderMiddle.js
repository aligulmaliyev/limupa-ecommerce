import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import MiniCart from '../../containers/cart/MiniCart';
import SearchBox from '../../components/form-elements/search-box/SearchBox';

const HeaderMiddle = () => {
    const wishlist = useSelector(state => state.wishlist);
    const handleSearch = (e) => {

    }
    return (
        <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="logo pb-sm-30 pb-xs-30">
                            <Link to='/'>
                                <img src={process.env.PUBLIC_URL + `/assets/images/menu/logo/1.jpg`} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                        <SearchBox onSearch={(e) => handleSearch(e)} />
                        <div className="header-middle-right">
                            <ul className="hm-menu">
                                <li className="hm-wishlist">
                                    <Link to='/wishlist'>
                                        <span className="cart-item-count wishlist-item-count">{wishlist.totalQuantity}</span>
                                        <i className="fa fa-heart-o"></i>
                                    </Link>
                                </li>
                                <MiniCart />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMiddle