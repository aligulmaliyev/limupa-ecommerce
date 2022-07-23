import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/slices/cart-slice';

const MiniCartItem = ({ data }) => {
    const dispatch = useDispatch()
    const removeFromCart = (id) => {
        dispatch(cartActions.removeFromCart(id));
    }
    return (
        <li>
            <Link to={`/product/${data?.id}`} className="minicart-product-image">
                <img src={process.env.PUBLIC_URL + `/assets/images/product/small-size/${data?.image}`} alt="cart products" />
            </Link>
            <div className="minicart-product-details">
                <h6><Link to={`/product/${data?.id}`}>{data?.name}</Link></h6>
                <span>${data?.totalPrice} x {data?.quantity}</span>
            </div>
            <button onClick={() => removeFromCart(data.id)} className="close" title="Remove">
                <i className="fa fa-close"></i>
            </button>
        </li>
    )
}

export default MiniCartItem