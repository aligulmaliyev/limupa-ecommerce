import { API } from '../constants/api';
import { filterQueryResolver } from '../../utils/filterQueryResolver';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('/get-products', async (filters) => {
    const query = filterQueryResolver(filters);
    return await axios.get(API + `/get-products/?${query}`).then((res) => res.data)
        .catch((err => console.log(err)));
})