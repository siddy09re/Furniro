import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import ShopItem from "./ShopItem";
import HoverModel from "../../../Shared/Container/HoverModel";

const ShopGridView = ({ items }) => {
    const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <Swiper
      slidesPerView={3}
      slidesPerGroup={3}
      grid={{ rows: 2, fill: "row" }}
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Grid, Pagination]}
      className="mySwiper"
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}
        onMouseEnter={() => setHoveredItem(item)}
        onMouseLeave={() => setHoveredItem(null)}
        className="relative">
          <ShopItem item={item} />
           {/* Show modal on hover */}
           {hoveredItem?.id === item.id && <HoverModel item={item} isVisible forceLayout={false} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ShopGridView;
