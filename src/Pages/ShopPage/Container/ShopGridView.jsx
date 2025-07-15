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
    <div className="flex mx-auto lg:max-w-[800px] sm:max-w-[600px] max-w-[280px] " id="The swiper element">
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            grid={{ rows: 2, fill: "row" }}
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Grid, Pagination]}
            className="mySwiperrrrrr "
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
    </div>
  );
};

export default ShopGridView;
