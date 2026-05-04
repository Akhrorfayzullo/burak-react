import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import {
  Search,
  MonetizationOn,
  RemoveRedEye,
  ArrowBack,
  ArrowForward,
  ShoppingCart,
} from "@mui/icons-material";
import { Pagination, PaginationItem } from "@mui/material";
import Badge from "@mui/material/Badge";

import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveProducts } from "./selector";
import { setProducts } from "./slice";
import { Product, ProductInquiry } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enums";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { CardItem } from "../../../lib/types/search";

const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

interface ProductsProps {
  onAdd: (item: CardItem) => void;
}
export default function Products(props: ProductsProps) {
  const { onAdd } = props;

  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 8,
    order: "createdAt",
    productCollection: ProductCollection.DISH,
    search: "",
  });
  const [searchText, setSearchText] = useState<string>("");
  const [addedId, setAddedId] = useState<string | null>(null);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const history = useHistory();
  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts(productSearch)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [productSearch]);
  // Handlers
  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch });
  };
  const searchOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({ ...productSearch });
  };

  const searchProductHandler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({ ...productSearch });
  };

  const chooseDishHandler = (id: string) => {
    history.push(`/products/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    onAdd({
      _id: product._id,
      quantity: 1,
      name: product.productName,
      price: product.productPrice,
      image: product.productImages[0],
    });
    setAddedId(product._id);
    setTimeout(() => setAddedId(null), 900);

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const pid = Date.now();
    setParticles((prev) => [...prev, { id: pid, x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }]);
    setTimeout(() => setParticles((prev) => prev.filter((p) => p.id !== pid)), 800);
  };
  return (
    <div className="products">
      {particles.map((p) => (
        <span
          key={p.id}
          className="cart-particle"
          style={{ left: p.x, top: p.y }}
        />
      ))}
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar-big-box">
            <Stack className={"header"}>
              <p>Burak Restaurant</p>
              <Stack className={"search-box"}>
                <input
                  type={"search"}
                  className={"search-input"}
                  placeholder={"Type here"}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") searchProductHandler();
                  }}
                />

                <Button
                  className={"button-search"}
                  variant="contained"
                  endIcon={<Search />}
                  onClick={searchProductHandler}
                >
                  Search
                </Button>
              </Stack>
            </Stack>
          </Stack>

          <Stack className="dishes-filter-section">
            <Stack className="dishes-filter-box">
              <Button
                className={`order ${productSearch.order === "createdAt" ? "order-active" : ""}`}
                onClick={() => searchOrderHandler("createdAt")}
              >
                New
              </Button>
              <Button
                className={`order ${productSearch.order === "productPrice" ? "order-active" : ""}`}
                onClick={() => searchOrderHandler("productPrice")}
              >
                Price
              </Button>
              <Button
                className={`order ${productSearch.order === "productViews" ? "order-active" : ""}`}
                onClick={() => searchOrderHandler("productViews")}
              >
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className="list-category-section">
            <Stack className="product-category">
              <div className="category-main">
                {[
                  { label: "Dish",    col: ProductCollection.DISH },
                  { label: "Salad",   col: ProductCollection.SALAD },
                  { label: "Drink",   col: ProductCollection.DRINK },
                  { label: "Dessert", col: ProductCollection.DESSERT },
                  { label: "Other",   col: ProductCollection.OTHERS },
                ].map(({ label, col }) => (
                  <Button
                    key={col}
                    className={`${productSearch.productCollection === col ? "cat-active" : ""}`}
                    onClick={() => searchCollectionHandler(col)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </Stack>

            <Stack className="product-wrapper">
              {products?.length > 0 ? (
                products?.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.DRINK
                      ? product.productVolume + "L"
                      : product.productSize;
                  return (
                    <Stack
                      key={product._id}
                      className="product-card"
                      onClick={() => chooseDishHandler(product._id)}
                    >
                      <Stack className="product-img">
                        <img
                          src={imagePath}
                          alt={product.productName}
                          onError={(e) => { (e.target as HTMLImageElement).src = "/img/food-city.webp"; }}
                        />
                        <div className="product-sale">{sizeVolume}</div>

                        <Button
                          className={`shop-btn${addedId === product._id ? " shop-btn--added" : ""}`}
                          onClick={(e) => handleAddToCart(e, product)}
                        >
                          <ShoppingCart sx={{ fontSize: 16 }} />
                          {addedId === product._id ? "Added!" : "Add to Cart"}
                        </Button>

                        <Button className="view-btn" sx={{ right: "36px" }}>
                          <Badge
                            badgeContent={product.productViews}
                            color="secondary"
                          >
                            <RemoveRedEye
                              sx={{
                                color:
                                  product.productViews === 0 ? "gray" : "white",
                              }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className="product-desc">
                        <span className="product-title">
                          {product.productName}
                        </span>

                        <div className="product-desc">
                          <MonetizationOn />
                          {product.productPrice}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">No products available</Box>
              )}
            </Stack>
          </Stack>

          <Stack className="pagination-section">
            <Pagination
              count={
                products.length !== 0
                  ? productSearch.page + 1
                  : 1
              }
              page={productSearch.page}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBack,
                    next: ArrowForward,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
      </Container>

      <div className="brands-logo">
        <Container className={"family-brands"}>
          <Box className={"category-title"}>Our Family Brands</Box>
          <Stack className={"brand-list"}>
            <Box className={"img-box"}>
              <img alt="" src={"/img/gurme.webp"} />
            </Box>
            <Box className={"img-box"}>
              <img alt="" src={"/img/sweets.webp"} />
            </Box>
            <Box className={"img-box"}>
              <img alt="" src={"/img/seafood.webp"} />
            </Box>
            <Box className={"img-box"}>
              <img alt="" src={"/img/doner.webp"} />
            </Box>
          </Stack>
        </Container>
      </div>

      <div className="address">
        <Container>
          <Stack className="address-area">
            <Box className="title">Our Address</Box>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13052.276692297633!2d128.9948210120201!3d35.12994729603954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ea1e39aa4bb3%3A0xf48061816fe48d91!2z6rCV7JuQ7YGs66CI7J24!5e0!3m2!1sen!2skr!4v1721215454220!5m2!1sen!2skr"
              style={{ marginTop: "60px" }}
              width={"1320"}
              height={"500"}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
