import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";
import { HomePage } from ".";

const selectHomePage = (state: AppRootState) => state.homepage;
export const retrievePopularDishes = createSelector(
    selectHomePage,
    (HomePage) => HomePage.popularDishes
)
export const retrieveNewDishes = createSelector(
    selectHomePage,
    (HomePage) => HomePage.newDishes
)
export const retrieveTopUsers = createSelector(
    selectHomePage,
    (HomePage) => HomePage.topUsers
)