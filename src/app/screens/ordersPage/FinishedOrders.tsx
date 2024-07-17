import React from "react";
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

const FinishedOrders = () => {
  return (
    <TabPanel value="3">
      <Stack>
        {[].map((ele, index) => (
          <Box key={index} className="order-main-box">
            <Box className="order-box-scroll">
              {[].map((ele, index) => (
                <Box key={index} className={"orders-name-price"}>
                  <img
                    alt=""
                    src={"/img/cutlet.webp"}
                    className={"order-dish-img"}
                  />
                  <p className={"title-dish"}>Cutlet</p>
                  <Box className={"price-box"}>
                    <p>$11</p>
                    <img alt="" src={"/icons/close.svg"} />
                    <p>3</p>
                    <img alt="" src={"/icons/pause.svg"} />
                    <p style={{ marginLeft: "15px" }}>${11 * 3}</p>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box className={"total-price-box"}>
              <Box className={"box-total"}>
                <p>Product price</p>
                <p>${11 * 3 * 2}</p>
                <img
                  alt=""
                  src={"/icons/plus.svg"}
                  style={{ marginLeft: "20px" }}
                />
                <p>Delivery cost</p>
                <p>$5</p>
                <img
                  alt=""
                  src={"/icons/pause.svg"}
                  style={{ marginLeft: "20px" }}
                />
                <p>Total</p>
                <p>${33 * 2 + 5}</p>
              </Box>
            </Box>
          </Box>
        ))}

        {true && (
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
};

export default FinishedOrders;
