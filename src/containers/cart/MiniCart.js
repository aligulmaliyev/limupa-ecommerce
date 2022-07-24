import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MiniCartItem from '../../components/card/MiniCardItem';
import ButtonLink from '../../components/form-elements/buttons/ButtonLink';
import { configActions } from '../../store/slices/config-slice';

const MiniCart = () => {
    const dispatch = useDispatch();
    const miniCart = useSelector(state => state.config.miniCart);
    const cart = useSelector(state => state.cart);

    const handleMinicart = () => {
        dispatch(configActions.miniCartToggle())
    }

    return (
        <>
            {miniCart && <div className='overlay' onClick={handleMinicart}></div>}
            <li className="hm-minicart">
                <div className="hm-minicart-trigger is-active" onClick={handleMinicart}>
                    <span className="item-icon"></span>
                    <span className="item-text">${cart.subtotalPrice}
                        <span className="cart-item-count">{cart.totalQuantity}</span>
                    </span>
                </div>
                <span></span>
                {miniCart && <div className='minicart'>
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