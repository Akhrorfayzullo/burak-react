import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProducts";
import Products from "./Products";
import "../../../css/products.css";
import { CardItem } from "../../../lib/types/search";

interface ProductsPageProps {
  onAdd: (item: CardItem) => void;
}
export function ProductsPage(props: ProductsPageProps) {
  const { onAdd } = props;
  const productsRoute = useRouteMatch();
  return (
    <div className="products-page">
      <Switch>
        <Route path={`${productsRoute.path}/:productId`}>
          <ChosenProduct onAdd={onAdd} />
        </Route>
        <Route path={`${productsRoute.path}`}>
          <Products onAdd={onAdd} />
        </Route>
      </Switch>
    </div>
  );
}
