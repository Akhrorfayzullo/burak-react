import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import {
  Search,
  MonetizationOn,
  RemoveRedEye,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";
import { Pagination, PaginationItem } from "@mui/material";
import Badge from "@mui/material/Badge";
// import "../../../css/products.css";

const productsData = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
];

export default function Products() {
  return (
    <div className="products">
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
                />
                <Button
                  className={"button-search"}
                  variant="contained"
                  endIcon={<Search />}
                >
                  Search
                </Button>
              </Stack>
            </Stack>
          </Stack>

          <Stack className="dishes-filter-section">
            <Stack className="dishes-filter-box">
              <Button variant="contained" color="primary" className="order">
                New
              </Button>
              <Button variant="contained" color="secondary" className="order">
                Price
              </Button>
              <Button variant="contained" color="secondary" className="order">
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className="list-category-section">
            <Stack className="product-category">
              <div className="category-main">
                <Button variant="contained" color="secondary">
                  Other
                </Button>
                <Button variant="contained" color="secondary">
                  Dessert
                </Button>
                <Button variant="contained" color="secondary">
                  Drink
                </Button>
                <Button variant="contained" color="secondary">
                  Salad
                </Button>
                <Button variant="contained" color="secondary">
                  Dish
                </Button>
              </div>
            </Stack>

            <Stack className="product-wrapper">
              {productsData?.length > 0 ? (
                productsData?.map((product, index) => (
                  <Stack key={index} className="product-card">
                    <Stack
                      className="product-img"
                      sx={{ backgroundImage: `url(${product?.imagePath})` }}
                    >
                      <div className="product-sale">Normal Size</div>

                      <Button className="shop-btn">
                        <img
                          src={"/icons/shopping-cart.svg"}
                          style={{ display: "flex" }}
                          alt=""
                        />
                      </Button>

                      <Button className="view-btn" sx={{ right: "36px" }}>
                        <Badge badgeContent={20} color="secondary">
                          <RemoveRedEye sx={{ color: 20 ? "gray" : "white" }} />
                        </Badge>
                      </Button>
                    </Stack>
                    <Box className="product-desc">
                      <span className="product-title">
                        {product?.productName}
                      </span>

                      <div className="product-desc">
                        <MonetizationOn />
                        12
                      </div>
                    </Box>
                  </Stack>
                ))
              ) : (
                <Box className="no-data">Products are not availabe!</Box>
              )}
            </Stack>
          </Stack>

          <Stack className="pagination-section">
            <Pagination
              count={3}
              page={1}
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
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=123-45+Gangnam-daero,Gangnam-gu,Seoul,South+Korea"
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
