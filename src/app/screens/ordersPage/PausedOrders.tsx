import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";

export default function PausedOrders() {
  return (
    <TabPanel value="1">
      <Stack>
        {[1, 2].map((ele, index) => {
          return (
            <Box key={index} className="order-main-box">
              <Box className="order-box-scroll">
                {[1, 2, 3].map((ele2, index2) => (
                  <Box key={index2} className="orders-name-price">
                    <img
                      alt=""
                      src="/img/lavash.webp"
                      className="order-dish-img"
                    />
                    <p className="title-dish">Lavash</p>

                    <Box className="price-box">
                      <p>$9</p>
                      <img src={"/icons/close.svg"} alt="" />
                      <p>2</p>
                      <img src={"/icons/pause.svg"} alt="" />
                      <p style={{ marginLeft: "15px" }}>$24</p>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box className="total-price-box">
                <Box className="box-total">
                  <p>Product price</p>
                  <p>$10</p>
                  <img
                    alt=""
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Delivery cost</p>
                  <p>$4</p>
                  <img
                    alt=""
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>$14</p>
                </Box>

                <Button
                  value={index}
                  variant="contained"
                  color="secondary"
                  className="cancel-button"
                >
                  Cancel
                </Button>

                <Button
                  value={index}
                  variant="contained"
                  className="payment-button"
                >
                  Payment
                </Button>
              </Box>
            </Box>
          );
        })}

        {false && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              alt=""
              src={"/icons/noimage-list.svg"}
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
