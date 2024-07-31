import React, { useEffect } from "react";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";
import { setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { retrievePopularDishes } from "./selector";

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);
export function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  // Selector => Data
  useEffect(() => {
    // const result = [
    //   {
    //     _id: "jjgh7893043n49fh839",
    //     productStatus: "PROCESS",
    //     productCollection: "DISH",
    //     productName: "Blabla",
    //     productPrice: 56,
    //     productCount: 2,
    //     productSize: "NORMAL",
    //     productVolume: 1,
    //     productDesc: "product",
    //   },
    //   {
    //     _id: "jjgh7893043n49fh839",
    //     productStatus: "PROCESS",
    //     productCollection: "DISH",
    //     productName: "Blabla",
    //     productPrice: 56,
    //     productCount: 2,
    //     productSize: "NORMAL",
    //     productVolume: 1,
    //     productDesc: "product",
    //   },
    //   {
    //     _id: "jjgh7893043n49fh839",
    //     productStatus: "PROCESS",
    //     productCollection: "DISH",
    //     productName: "Blabla",
    //     productPrice: 56,
    //     productCount: 2,
    //     productSize: "NORMAL",
    //     productVolume: 1,
    //     productDesc: "product",
    //   },
    // ];
    // @ts-ignore
    // setPopularDishes(result);
    //Backend =>Data
    //Slice data => Store
  }, []);
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
