import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ItemsNumber: 0, 
    products: [], 
    totalPrice: 0,
    ModalStatus : true,
}

const CartSlice = createSlice({ 
    name:"Cart",
    initialState,
    reducers: { 

        addProduct(state, action) {
            const newItem = action.payload;
            
            // Calculate the discounted price
            const discountedPrice = parseFloat((newItem.price - (newItem.price * newItem.discount) / 100).toFixed(2));

            const totalDiscountedPrice = parseFloat((((discountedPrice * newItem.quantity) * 100) / 100).toFixed(2));

            const existingItem = state.products.find(item => item.id === newItem.id);
        
            if (existingItem) {
                existingItem.quantity += newItem.quantity; // Increase quantity
                existingItem.totalPrice += totalDiscountedPrice; // Update total price with discount
            } else {
                state.products.push({ 
                    ...newItem, 
                    totalPrice: totalDiscountedPrice,  // Store discounted total price
                    color : newItem.color,
                    size : newItem.size,
                    discountedPrice : discountedPrice
                });
            }
        
            state.ItemsNumber += newItem.quantity; // Update total items count
            state.totalPrice += totalDiscountedPrice; // Update total cart price with discount
        },
        
         

            removeProduct(state,action) {
               
                const ItemtoRemove = action.payload;

                const IndextoRemove = state.products.findIndex(item => item.id === ItemtoRemove.id);

                if(IndextoRemove >= 0){
                    const ItemtoRemove = state.products[IndextoRemove]
                    state.products = state.products.filter((item, index) => index !== IndextoRemove);

                    state.totalPrice -= ItemtoRemove.totalPrice;
                    state.ItemsNumber -= ItemtoRemove.quantity;
                }

            },

            setModalStatus(state) {
                state.ModalStatus = !state.ModalStatus
            },

            updateQuantity(state, action) {
                const { item, amount } = action.payload;
                const indextoChange = state.products.findIndex(existitem => existitem.id === item.id);
            
                if (indextoChange >= 0) {
                    const selectedItem = state.products[indextoChange]; // Use a different variable name
            
                    selectedItem.quantity += amount;
            
                    if (selectedItem.quantity < 1) {
                       
                        state.products = state.products.filter((_, index) => index !== indextoChange);
            
                        // Update state values correctly
                        state.totalPrice = state.products.reduce((total, product) => total + product.totalPrice, 0);
                        state.ItemsNumber = state.products.reduce((total, product) => total + product.quantity, 0);
                    } else {
                        selectedItem.totalPrice = selectedItem.quantity * selectedItem.discountedPrice;
                        state.totalPrice = state.products.reduce((total, product) => total + product.totalPrice, 0);
                        state.ItemsNumber = state.products.reduce((total, product) => total + product.quantity, 0);
                    }
                }
            },
            
            }

    }
);

export const {addProduct,removeProduct,setModalStatus,updateQuantity} = CartSlice.actions;
export default CartSlice.reducer;