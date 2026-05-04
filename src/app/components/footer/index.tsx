import React from "react";
import { Container, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";

export default function Footer() {
  const { authMember } = useGlobals();

  return (
    <footer className="footer">
      <Container className="footer-container">
        <Stack className="footer-main" flexDirection="row">

          {/* Brand column */}
          <Stack className="footer-brand" flexDirection="column">
            <img width="100px" src="/icons/burak.svg" alt="Burak" />
            <p className="foot-desc-txt">
              Focusing on the gourmet Turkish breakfast as well as the youth
              society, CZN Burak Gurme aims to bring Turkish cuisine back and
              creates an illusion with its cuisine.
            </p>
            <Box className="sns-context">
              <a href="#" aria-label="Facebook">
                <img src="/icons/facebook.svg" alt="Facebook" width="18" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src="/icons/twitter.svg" alt="Twitter" width="18" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="/icons/instagram.svg" alt="Instagram" width="18" />
              </a>
              <a href="#" aria-label="YouTube">
                <img src="/icons/youtube.svg" alt="YouTube" width="18" />
              </a>
            </Box>
          </Stack>

          {/* Links column */}
          <Stack sx={{ ml: "auto", mr: "80px" }} flexDirection="column">
            <Box className="foot-category-title">Links</Box>
            <Box className="foot-category-link">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              {authMember && <Link to="/orders">Orders</Link>}
              {authMember && <Link to="/member-page">My Page</Link>}
              <Link to="/help">Help</Link>
            </Box>
          </Stack>

          {/* Find us column */}
          <Stack flexDirection="column">
            <Box className="foot-category-title">Find us</Box>
            <Box className="foot-category-link" sx={{ mt: "16px" }}>
              <Box className="find-us">
                <span>L.</span>
                <div>Downtown, Dubai</div>
              </Box>
              <Box className="find-us">
                <span>P.</span>
                <div>+971 4 554 7777</div>
              </Box>
              <Box className="find-us">
                <span>E.</span>
                <div>devexuz@gmail.com</div>
              </Box>
              <Box className="find-us">
                <span>H.</span>
                <div>Open 24 hours</div>
              </Box>
            </Box>
          </Stack>

        </Stack>

        {/* Bottom bar */}
        <Stack className="footer-bottom">
          <p className="copyright-txt">
            © {new Date().getFullYear()} <span>Burak Gurme</span>. All rights reserved.
          </p>
        </Stack>
      </Container>
    </footer>
  );
}
