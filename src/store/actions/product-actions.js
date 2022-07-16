import { productsActions } from "../slices/products-slice";
import { API } from '../constants/api';
import { filterQueryResolver } from '../../utils/filterQueryResolver';

export const fetchProducts = (filters) => {
    const query = filterQueryResolver(filters);

    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch(API + `/products/?${query}`);
            const data = await res.json();
            return data
        }
        const products = await fetchHandler();
        dispatch(productsActions.allProducts(products));
    }
}