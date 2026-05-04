import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { plans } from "../../../lib/data/plans";

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function Events() {
  return (
    <div className="events-frame">
      <Container>
        <Stack className="events-main">
          <Box className="events-text">
            <span className="category-title">Events</span>
          </Box>

          <Swiper
            className="events-info"
            slidesPerView={"auto"}
            centeredSlides={false}
            spaceBetween={24}
            loop={false}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {plans?.map((plan, index) => (
              <SwiperSlide key={index} className="events-info-frame">
                <img src={plan?.img} className="events-img" alt={plan?.title} />

                <Box className="events-desc">
                  <Box className="events-bott">
                    <Box className="bott-left">
                      <div className="event-title-speaker">
                        <strong>{plan?.title}</strong>
                        <div className="event-organizator">
                          <p className="spec-text-author">{plan?.author}</p>
                        </div>
                      </div>

                      <p className="text-desc">{plan?.desc}</p>

                      <div className="bott-info">
                        <div className="bott-info-main">
                          <img src="/icons/calendar.svg" alt="" />
                          {plan?.date}
                        </div>
                        <div className="bott-info-main">
                          <img src="/icons/location.svg" alt="" />
                          {plan?.location}
                        </div>
                      </div>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          <Box className="prev-next-frame">
            <img
              className="swiper-button-prev"
              src="/icons/arrow-right.svg"
              style={{ transform: "rotate(180deg)", cursor: "pointer" }}
              alt="prev"
            />
            <div className="dot-frame-pagination swiper-pagination"></div>
            <img
              src="/icons/arrow-right.svg"
              className="swiper-button-next"
              style={{ cursor: "pointer" }}
              alt="next"
            />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
