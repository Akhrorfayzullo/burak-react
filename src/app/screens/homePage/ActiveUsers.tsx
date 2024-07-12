import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider, Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ActiveUsers() {
  const activeUsers = [
    { memberNick: "Martin", memberImage: "/img/martin.webp" },
    { memberNick: "Justin", memberImage: "/img/justin.webp" },
    { memberNick: "Rose", memberImage: "/img/rose.webp" },
  ];

  SwiperCore.use([Autoplay, Navigation, Pagination]);

  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active Users</Box>
          <Swiper
            className="cards-frame"
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            initialSlide={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
          >
            {activeUsers.length !== 0 ? (
              activeUsers.map((ele, index) => (
                <SwiperSlide key={index} className="user-card-frame">
                  <CssVarsProvider>
                    <Card variant="outlined" className="card">
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={ele.memberImage} alt={ele.memberNick} />
                        </AspectRatio>
                      </CardOverflow>
                      <CardOverflow>
                        <Typography className="member-nickname">
                          {ele.memberNick}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                </SwiperSlide>
              ))
            ) : (
              <Box className="no-data">No Active Users!</Box>
            )}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
