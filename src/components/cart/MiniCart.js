import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ButtonLink from '../form-elements/buttons/ButtonLink';

const MiniCart = () => {
    const [showMinicart, setShowMinicart] = useState(false)
    const handleMinicart = () => {
        setShowMinicart(perv => !perv)
    }
    return (
        <li className="hm-minicart">
            <div className="hm-minicart-trigger is-active" onClick={handleMinicart}>
                <span className="item-icon"></span>
                <span className="item-text">£80.00
                    <span className="cart-item-count">2</span>
                </span>
            </div>
            <span></span>
            {showMinicart && <div className='minicart'>
                <ul className="minicart-product-list">
                    <MiniCartItem />
                    <MiniCartItem />
                </ul>
                <p className="minicart-total">SUBTOTAL: <span>£80.00</span></p>
                <div className="minicart-button">
                    <ButtonLink type='dark' url='/cart' text='View Full Cart' />
                    <ButtonLink type='light' url='/checkout' text='Checkout' />
                </div>
            </div>}
        </li>
    )
}

const MiniCartItem = () => {
    return (
        <li>
            <Link to='product' className="minicart-product-image">
                <img src="assets/images/product/small-size/5.jpg" alt="cart products" />
            </Link>
            <div className="minicart-product-details">
                <h6><Link to='product'>Aenean eu tristique</Link></h6>
                <span>£40 x 1</span>
            </div>
            <button className="close" title="Remove">
                <i className="fa fa-close"></i>
            </button>
        </li>
    )
}

export default MiniCart