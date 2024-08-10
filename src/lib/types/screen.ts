import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/**React App State */
export interface AppRootState {
    homePage: HomePageState;
    productsPage: ProductsPageState;
    ordersPage: OrdersPageState;
}

export interface HomePageState{
    popularDishes: Product[],
    newDishes: Product[],
    topUsers: Member[]
}

export interface ProductsPageState{
    restaurant: Member | null,
    chosenProduct: Product | null,
    products: Product[];

}

/**OrdersPage **/

export interface OrdersPageState{
    pausedOrders: Order[];
    processOrders: Order[];
    finishedOrders: Order[];

}