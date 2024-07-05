import React from "react";
import "../css/app.css";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";

function App() {
  return (
    <Container sx={{ background: "orange" }}>
      <Stack flexDirection={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h4"}>
            Creating Burak Client Page
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={5}>
            <Button variant="contained" color={"secondary"}>
              Contained
            </Button>
          </RippleBadge>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
