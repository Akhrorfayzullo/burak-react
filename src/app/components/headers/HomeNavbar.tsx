import {
  Box,
  Button,
  Container,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import Basket from "./Basket";
import React, { useEffect, useState } from "react";
import { CardItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { Logout } from "@mui/icons-material";

interface HomeNavbarProps {
  cartItems: CardItem[];
  onAdd: (item: CardItem) => void;
  onRemove: (item: CardItem) => void;
  onDelete: (item: CardItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
  handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  handleCloseLogout: () => void;
  handleLogoutRequest: () => void;
}

export function HomeNavbar(props: HomeNavbarProps) {
  const {
    cartItems,
    onAdd,
    onDelete,
    onDeleteAll,
    onRemove,
    setLoginOpen,
    setSignupOpen,
    handleLogoutClick,
    anchorEl,
    handleCloseLogout,
    handleLogoutRequest,
  } = props;
  const { authMember } = useGlobals();

  return (
    <div className="home-navbar" style={{ backgroundImage: "url('/img/banner.webp')" }}>
      <Container className="navbar-container">
        <Stack className="menu" style={{ animation: "fadeIn 0.8s cubic-bezier(0.4,0,0.2,1) 2.6s both" }}>
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
              <NavLink to="/">Home</NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products" activeClassName={"underline"}>
                Products
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>
                  My page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName={"underline"}>
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
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "2px solid #c9a84c",
                  objectFit: "cover",
                  cursor: "pointer",
                  boxShadow: "0 0 12px rgba(201,168,76,0.3)",
                }}
                src={
                  authMember?.memberImage
                    ? `${serverApi}/${authMember?.memberImage}`
                    : "/icons/default-user.svg"
                }
                aria-haspopup={"true"}
                onClick={handleLogoutClick}
              />
            )}

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={Boolean(anchorEl)}
              onClose={handleCloseLogout}
              onClick={handleCloseLogout}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleLogoutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
        <Stack className="header-frame">
          <Stack className="detail" style={{ animation: "fadeUp 1s cubic-bezier(0.4,0,0.2,1) 2.8s both" }}>
            <Box className="head-main-txt">World's Most Delicious Cuisine</Box>
            <Box className="wel-txt">The Choice, not just a choice</Box>
            <Box className="service-txt">⏱ Open 24 hours · Free delivery over $30</Box>
            <Box className="signup" style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <Button variant="contained" className="signup-button">
                  Order Now
                </Button>
              </Link>
              {!authMember && (
                <Button
                  variant="outlined"
                  onClick={() => setSignupOpen(true)}
                  style={{
                    width: "160px",
                    height: "56px",
                    borderRadius: "8px",
                    borderColor: "rgba(201,168,76,0.5)",
                    color: "#e8c96d",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: "15px",
                    textTransform: "none",
                  }}
                >
                  Sign Up
                </Button>
              )}
            </Box>
          </Stack>
          <Box className="logo-frame" style={{ animation: "fadeIn 1.2s cubic-bezier(0.4,0,0.2,1) 3.1s both" }}>
            <div className="logo-img" style={{ backgroundImage: "url('/img/logo.webp')" }}></div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
