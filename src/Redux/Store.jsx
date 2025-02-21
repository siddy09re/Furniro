import { configureStore } from '@reduxjs/toolkit'
import  ShopSlice  from '../Pages/ShopPage/Container/ShopSlice'
import CartSlice from "../Shared/Slices/CartSlice"




export const Store = configureStore({
    reducer:{
            Shop : ShopSlice,
            Cart : CartSlice
    }
})