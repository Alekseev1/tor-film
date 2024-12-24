import { useRef, useState } from "react";
import updatesBgImage from "./../assets/img/updates/bg-image.png";
import arrowLeft from "./../assets/img/svgicons/arrow-left.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import "swiper/css";
import Card from "./Card";
import { Link } from "react-router";

const Updates = ({ dataUpdates, isLoadingUpdates }) => {
  const [init, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="updates">
      <div className="container">
        <div className="updates__title title-2">Вышедшие новинки</div>

        <div className="updates__sort-wrapper">
          <div className="updates__sort-list"></div>
          <div className="updates__arrows">
            <button
              ref={prevRef}
              className="updates__sort-cross-wrapper arrow-wrapper arrow-wrapper-left"
            >
              <img
                className="icon arrow-left"
                src={arrowLeft}
                alt="arrow-left"
              />
            </button>
            <button
              ref={nextRef}
              className="updates__sort-cross-wrapper arrow-wrapper arrow-wrapper-right"
            >
              <img
                className="icon arrow-right"
                src={arrowLeft}
                alt="arrow-right"
              />
            </button>
          </div>
        </div>
        <div className="updates__cards swiper">
          <div className="updates__cards-list swiper-wrapper">
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={30}
              slidesPerView={6}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{ clickable: true }}
              onInit={() => setInit(true)}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 8,
                },
                350: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                },
                460: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                760: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
            >
              {isLoadingUpdates ? (
                <div className="updates__loading">Загрузка...</div>
              ) : (
                dataUpdates.map((el, index) => (
                  <SwiperSlide key={index}>
                    <Card {...el} />
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
        </div>
        <div className="updates__bg">
          <div className="updates__bg-overlay"></div>
        </div>
      </div>
      <img className="updates__bg-image" src={updatesBgImage} />
    </section>
  );
};

export default Updates;
