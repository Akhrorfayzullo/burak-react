import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CardItem } from "../../../lib/types/search";

interface OtherNavbarProps {
  cartItems: CardItem[];
  onAdd: (item: CardItem) => void;
  onRemove: (item: CardItem) => void;
  onDelete: (item: CardItem) => void;
  onDeleteAll: () => void;
}

export function OtherNavbar(props: OtherNavbarProps) {
  const { cartItems, onAdd, onDelete, onDeleteAll, onRemove } = props;
  const authMember = null;
  return (
    <div className="other-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img
                style={{ width: "125px", height: "30px" }}
                src="/icons/burak.svg"
              />
            </NavLink>
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            minWidth={"700px"}
            alignItems={"center"}
          >
            <Box className={"hover-line"}>
              <NavLink
                to="/"
                activeClassName={"underline"}
                style={{ color: "white" }}
              >
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink
                to="/products"
                activeClassName={"underline"}
                style={{ color: "white" }}
              >
                Products
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink
                  to="/orders"
                  activeClassName={"underline"}
                  style={{ color: "white" }}
                >
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink
                  to="/member-page"
                  activeClassName={"underline"}
                  style={{ color: "white" }}
                >
                  My page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink
                to="/help"
                activeClassName={"underline"}
                style={{ color: "white" }}
              >
                Help
              </NavLink>
            </Box>
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />
            {!authMember ? (
              <Box>
                <Button
                  variant="contained"
                  style={{ background: "#3776cc", color: "##f8f8ff" }}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img
                style={{ width: "50px", height: "50px", borderRadius: "24px" }}
                src={"/icons/default-user.svg"}
                aria-haspopup={"true"}
              />
            )}
          </Stack>
        </Stack>
        {/* <Stack className="header-frame">
          <Stack className="detail">
            <Box className="head-main-txt"> World's Most Delicious Cousine</Box>
            <Box className="wel-txt">The Choice, not just a choice</Box>
            <Box className="service-txt">24 hours service</Box>
            <Box className="signup">
              {!authMember ? (
                <Button variant="contained" className="signup-button">
                  SIGN UP
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Box className="logo-frame">
            <div className="logo-img"></div>
          </Box>
        </Stack> */}
      </Container>
    </div>
  );
}
