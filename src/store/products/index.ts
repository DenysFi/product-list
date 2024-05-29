import { LoadingType } from "@/constaints/enums";
import { Product } from "@/types/products";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ProductsState {
    products: Product[];
    loading: LoadingType,
}

const initialState: ProductsState = {
    products: [],
    loading: LoadingType.NONE,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadProducts: (state, action: PayloadAction<Product[]>) => {
            state.loading = LoadingType.ISLOADING
            state.products = action.payload;
            state.loading = LoadingType.LOADED
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
        removeProductByID: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(prod => prod.id !== action.payload)
        },
        updateProductByID: (state, action: PayloadAction<Product>) => {
            state.products = state.products.map(p => p.id === action.payload.id ? action.payload : p)
        },
    }
})

export default productsSlice.reducer;
export const { loadProducts, addProduct, removeProductByID, updateProductByID } = productsSlice.actions