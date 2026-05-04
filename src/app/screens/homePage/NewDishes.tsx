import React from "react";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Divider from "../../components/divider";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
// import { Product } from "../../../lib/types/product";
import { retrieveNewDishes } from "./selector";
import { serverApi } from "../../../lib/config";
import { Product } from "../../../lib/types/product";

const newDishesRetriever = createSelector(retrieveNewDishes, (newDishes) => ({
  newDishes,
}));

export default function NewDishes() {
  const { newDishes } = useSelector(newDishesRetriever);

  return (
    <div className="new-products-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Fresh Menu</Box>
          <Stack className="cards-frame">
            <CssVarsProvider defaultMode="dark">
              {newDishes.length !== 0 ? (
                newDishes.map((ele: Product) => {
                  const imagePath = `${serverApi}/${ele.productImages[0]}`;
                  return (
                    <Card key={ele._id} variant="outlined" className="card">
                      <CardOverflow sx={{ position: "relative" }}>
                        <div className="product-sale">${ele.productPrice}</div>
                        <AspectRatio ratio="1">
                          <img
                            src={imagePath}
                            alt={ele.productName}
                            onError={(e) => { (e.target as HTMLImageElement).src = "/img/food-city.webp"; }}
                          />
                        </AspectRatio>
                      </CardOverflow>

                      <CardOverflow variant="soft" className="product-detail">
                        <Stack className="info">
                          <Stack flexDirection={"row"} alignItems="center" gap={1}>
                            <Typography className="title">
                              {ele.productName}
                            </Typography>
                            <Divider width="1" height="16" bg="rgba(201,168,76,0.4)" />
                            <Typography className="views" sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                              {ele.productViews}
                              <VisibilityIcon sx={{ fontSize: 16 }} />
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New dishes are not available</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
