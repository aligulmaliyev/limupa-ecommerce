import { productsActions } from "../slices/products-slice";
import { API } from '../constants/api';

export const fetchProducts = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch(API + '/get-products');
            const data = await res.json();
            return data
        }
        const products = await fetchHandler();
        dispatch(productsActions.allProducts(products));
    }
}