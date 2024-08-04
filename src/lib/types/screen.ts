import { Member } from "./member";
import { Product } from "./product";

/**React App State */
export interface AppRootState {
    homePage: HomePageState;
    productsPage: ProductsPageState;
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