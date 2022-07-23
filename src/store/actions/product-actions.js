// import { API } from '../constants/api';
// import { filterQueryResolver } from '../../utils/filterQueryResolver';
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchProducts = createAsyncThunk('/get-products', async (filters) => {
//     const query = filterQueryResolver(filters);
//     return await axios.get(API + `/get-products/?${query}`).then((res) => res.data)
//         .catch((err => console.log(err)));
// })
import { productsActions } from "../slices/products-slice";
import { API } from '../constants/api';
import { filterQueryResolver } from '../../utils/filterQueryResolver';

export const fetchProducts = (filters) => {
    const query = filterQueryResolver(filters);

    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch(API + `/get-products/?${query}`);
            const data = await res.json();
            return data
        }
        const products = await fetchHandler();
        dispatch(productsActions.getProducts(products));
    }
}