import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

const initialState : HomePageState = {
    popularDishes: [],
    newDishes: [],
    topUsers: []
}
const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setPopularDishes: (state, action) => {
            state.popularDishes = action.payload;
        },
        setNewDishes: (state, action) => {
            state.popularDishes = action.payload;
        },
        setTopUsers: (state, action) => {
            state.popularDishes = action.payload;
        },
    }
})

export const {setNewDishes,setPopularDishes,setTopUsers} = homePageSlice.actions

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer