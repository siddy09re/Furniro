import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    viewStatus:true,
    showCards : 6,
    range: { startIndex: 0, endIndex: 6 },
    sortOption: 'default',
   
}

export const ShopSlice = createSlice({
    name:"Shop",
    initialState,
    reducers:{ 
        changeviewStatus : (state) => {
            state.viewStatus = !state.viewStatus
        },
        setshowCards : (state,action) => {
            state.showCards = action.payload
        },
        setRange: (state, action) => {
            state.range = action.payload;
          },
          setSortOption: (state, action) => {
            state.sortOption = action.payload; // Set the sorting option from the dropdown
          },
          
    }
})

export const { changeviewStatus, setshowCards,setRange,setSortOption } = ShopSlice.actions;
export default ShopSlice.reducer