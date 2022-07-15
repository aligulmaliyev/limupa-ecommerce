import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ButtonLink from '../../components/form-elements/buttons/ButtonLink';

const MiniCart = () => {
    const cart = useSelector(state => state.cart);
    const [showMinicart, setShowMinicart] = useState(false)
    const handleMinicart = () => {
        setShowMinicart(perv => !perv)
    }
    return (
        <li className="hm-minicart">
            <div className="hm-minicart-trigger is-active" onClick={handleMinicart}>
                <span className="item-icon"></span>
                <span className="item-text">${cart.totalPrice}
                    <span className="cart-item-count">{cart.totalQuantity}</span>
                </span>
            </div>
            <span></span>
            {showMinicart && <div className='minicart'>
                <ul className="minicart-product-list">
                    {
                        cart.cartItems?.slice(0, 3).map(cartItem => (
                            <MiniCartItem key={cartItem.id} data={cartItem} />
                        ))
                    }
                    {
                        cart.totalQuantity == '0' && <li style={{ textAlign: 'center', display: 'block' }}>Empty Cart</li>
                    }
                </ul>
                <p className="minicart-total">SUBTOTAL: <span>£{cart.totalPrice}</span></p>
                <div className="minicart-button">
                    <ButtonLink onClick={handleMinicart} type='dark' url='/cart' text='View Full Cart' />
                    <ButtonLink onClick={handleMinicart} type='light' url='/checkout' text='Checkout' />
                </div>
            </div>}
        </li>
    )
}

const MiniCartItem = ({ data }) => {
    return (
        <li>
            <Link to={`/product/${data?.id}`} className="minicart-product-image">
                <img src={`assets/images/product/small-size/${data?.image}`} alt="cart products" />
            </Link>
            <div className="minicart-product-details">
                <h6><Link to={`/product/${data?.id}`}>{data?.name}</Link></h6>
                <span>${data?.totalPrice} x {data?.quantity}</span>
            </div>
            <button className="close" title="Remove">
                <i className="fa fa-close"></i>
            </button>
        </li>
    )
}

export default MiniCart