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
            className="events-info swiper-wrapper"
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            initialSlide={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
          >
            {plans?.map((plan, index) => (
              <SwiperSlide key={index} className="events-info-frame">
                <div className="events-img">
                  <img src={plan?.img} className="events-img" alt="" />
                </div>

                <Box className="events-desc">
                  <Box className="events-bott">
                    <Box className="bott-left">
                      <div className="event-title-speaker">
                        <strong>{plan?.title}</strong>
                        <div className="event-organizator">
                          <img src={"//icons/speaker.svg"} alt="" />
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
              alt=""
            />
            <div className="dot-frame-pagination swiper-pagination"></div>

            <img
              src="/icons/arrow-right.svg"
              className="swiper-button-next"
              style={{ transform: "rotate(-180deg)" }}
              alt=""
            />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
