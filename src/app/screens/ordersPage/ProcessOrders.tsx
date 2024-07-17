import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";

const ProcessOrders = () => {
  return (
    <TabPanel value="2">
      <Stack>
        {[1, 2].map((ele, index) => {
          return (
            <Box key={index} className="order-main-box">
              <Box className="order-box-scroll">
                {[1, 2].map((ele, index) => (
                  <Box key={index} className="orders-name-price">
                    <img
                      src={"/img/lavash.webp"}
                      alt=""
                      className="order-dish-img"
                    />
                    <p className="title-dish">Lavash</p>

                    <Box className="price-box">
                      <p>$11</p>
                      <img src={"/icons/close.svg"} alt="" />
                      <p>2</p>
                      <img src={"/icons/pause.svg"} alt="" />
                      <p style={{ marginLeft: "15px" }}>$22</p>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box className="total-price-box">
                <Box className="box-total">
                  <p>Product price</p>
                  <p>$30</p>
                  <img
                    alt=""
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Delivery cost</p>
                  <p>$3</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <p>Total</p>
                  <p>$33</p>
                </Box>

                <p className="data-compl">
                  {moment().format("YY-MM-DD HH:mm")}
                </p>

                <Button variant="contained" className="verify-button">
                  Verify to Fulfill
                </Button>
              </Box>
            </Box>
          );
        })}

        {false && (
          <Box display="flex" flexDirection={"row"} justifyContent={"center"}>
            <img
              src={"/icons/noimage-list.svg"}
              alt=""
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
};

export default ProcessOrders;

// Done
