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
import {
  ProductCollection,
  ProductVolume,
} from "../../../lib/enums/product.enums";

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
            <CssVarsProvider>
              {newDishes.length !== 0 ? (
                newDishes.map((ele: Product) => {
                  const imagePath = `${serverApi}/${ele.productImages[0]}`;
                  const sizeVolume =
                    ele.productCollection === ProductCollection.DRINK
                      ? ele.productVolume + " l"
                      : ele.productSize + " size";
                  // console.log("SSSSSSSSSSS", sizeVolume);
                  return (
                    <Card key={ele._id} variant="outlined" className="card">
                      <CardOverflow>
                        <div className="product-sale">${sizeVolume}</div>
                        <AspectRatio ratio="1">
                          <img src={imagePath} alt={ele.productName} />
                        </AspectRatio>
                      </CardOverflow>

                      <CardOverflow variant="soft" className="product-detail">
                        <Stack className="info">
                          <Stack flexDirection={"row"}>
                            <Typography className="title">
                              {ele.productName}
                            </Typography>

                            <Divider width="2" height="24" bg="#d9d9d9" />

                            <Typography className="price">
                              {ele.productPrice}
                            </Typography>
                          </Stack>

                          <Stack>
                            <Typography className="views">
                              {ele.productViews}
                              <VisibilityIcon
                                sx={{ fontSize: 20, marginLeft: "5px" }}
                              />
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
