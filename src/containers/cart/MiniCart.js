import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import MiniCartItem from '../../components/card/MiniCardItem';
import ButtonLink from '../../components/form-elements/buttons/ButtonLink';

const MiniCart = () => {
    const cart = useSelector(state => state.cart);
    const [showMinicart, setShowMinicart] = useState(false)
    const handleMinicart = () => {
        setShowMinicart(perv => !perv)
    }

    return (
        <>
            {showMinicart && <div className='overlay' onClick={handleMinicart}></div>}
            <li className="hm-minicart">
                <div className="hm-minicart-trigger is-active" onClick={handleMinicart}>
                    <span className="item-icon"></span>
                    <span className="item-text">${cart.subtotalPrice}
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
                            cart.totalQuantity === '0' && <li style={{ textAlign: 'center', display: 'block' }}>Empty Cart</li>
                        }
                    </ul>
                    <p className="minicart-total">SUBTOTAL: <span>£{cart.subtotalPrice}</span></p>
                    <div className="minicart-button">
                        <ButtonLink onClick={handleMinicart} type='dark' url='/cart' text='View Full Cart' />
                        <ButtonLink onClick={handleMinicart} type='light' url='/checkout' text='Checkout' />
                    </div>
                </div>}
            </li>
        </>
    )
}

export default MiniCart