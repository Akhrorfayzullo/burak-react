import React from "react";
import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";
import { Order } from "../../../lib/types/order";

// Redux Slice & Selector
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export function OrdersPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());
  const [value, setValue] = useState("1");

  // HANDLERS:
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="table-list"
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>

            <Stack className="order-main-content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="order-right">
          <Box className="order-info-box">
            <Box className="member-box">
              <div className="order-user-img">
                <img
                  alt=""
                  src={"/icons/default-user.svg"}
                  className="order-user-avatar"
                />

                <div className="order-user-icon-box">
                  <img
                    alt=""
                    src={"/icons/user-badge.svg"}
                    className="order-user-prof-img"
                  />
                </div>
              </div>

              <span className="order-user-name">Adam</span>
              <span className="order-user-name">User</span>
            </Box>
            <Box className="linea"></Box>

            <Box className="order-user-address">
              <div style={{ display: "flex" }}>
                <LocationOnIcon />
              </div>
              <div className="spec-address-txt">Busan, Busan Chingu</div>
            </Box>
          </Box>

          <Box className={"order-info-box"} sx={{ mt: "15px" }}>
            <input
              type={"text"}
              name={"cardNumber"}
              placeholder={"Card number : **** 4354 2033 9898"}
              className={"card-input"}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <input
                type={"text"}
                name={"cardPeriod"}
                placeholder={"10 / 29"}
                className={"card-half-input"}
              />
              <input
                type={"text"}
                name={"cardCVV"}
                placeholder={"CVV : 912"}
                className={"card-half-input"}
              />
            </div>
            <input
              type={"text"}
              name={"cardCreator"}
              placeholder={"Akhror Fayzullo"}
              className={"card-input"}
            />
            <div className={"cards-box"}>
              <img alt="" src={"/icons/western-card.svg"} />
              <img alt="" src={"/icons/master-card.svg"} />
              <img alt="" src={"/icons/paypal-card.svg"} />
              <img alt="" src={"/icons/visa-card.svg"} />
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
