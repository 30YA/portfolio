import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const whatIdoMock = [
  {
    title: 'Art Direction',
    description:
      'Get design tips & guid straight to your inbox for free! Get design tip & guid straight to your inbox for free!',
  },
  {
    title: 'Art Direction',
    description:
      'Get design tips & guid straight to your inbox for free! Get design tip & guid straight to your inbox for free!',
  },
  {
    title: 'Art Direction',
    description:
      'Get design tips & guid straight to your inbox for free! Get design tip & guid straight to your inbox for free!',
  },
];

function Slider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className} bg-color-title/20 h-4 w-4"></span>`;
    },
  };
  return (
    <div className="relative">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper about-swiper !static mb-5"
      >
        {whatIdoMock.map((item, index) => (
          <SwiperSlide key={index} className="cursor-grab">
            <h3 className="text-[26px] font-semibold text-color-title">
              {item.title}
            </h3>
            <p className="mb-7 mt-4 line-clamp-3 h-[84px] text-xl font-normal text-color-title">
              {item.description}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
