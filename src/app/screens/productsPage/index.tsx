import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProducts";
import Products from "./Products";
import "../../../css/products.css";
export function ProductsPage() {
  const productsRoute = useRouteMatch();
  return (
    <div className="products-page">
      <Switch>
        <Route path={`${productsRoute.path}/:productId`}>
          <ChosenProduct />
        </Route>
        <Route path={`${productsRoute.path}`}>
          <Products />
        </Route>
      </Switch>
    </div>
  );
}
