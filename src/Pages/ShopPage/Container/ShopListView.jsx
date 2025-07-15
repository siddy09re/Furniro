import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import HoverModel from "../../../Shared/Container/HoverModel";
import { useState } from "react";

const ShopListView = ({ items }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const swiperStyles = {
        height: "max-content",
        marginLeft: "0",
        marginRight: "0",
        width: "90vw",
    };

    const swiperWrapperStyles = {
        height: "max-content",
        paddingBottom: "10px",
    };

    const swiperSlideStyles = {
        marginTop: "50px",
    };

    const paginationStyles = {
        position: "absolute",
        bottom: "-40px",
        left: "50%",
        transform: "translateX(-0%) translateY(10%)",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        zIndex: 800,
    };

    // const customPaginationBoxStyles = {
    //     display: "inline-block",
    //     width: "30px",
    //     height: "30px",
    //     border: "1px solid #ccc",
    //     borderRadius: "5px",
    //     textAlign: "center",
    //     lineHeight: "30px",
    //     backgroundColor: "lightcoral",
    //     margin: "0 5px",
    //     cursor: "pointer",
    //     transition: "background-color 0.3s ease",
    // };

    return (
        <div id="The actual swiper" className="max-w-fit flex mx-auto">
            <Swiper
                slidesPerView={2}
                slidesPerGroup={3}
                grid={{ rows: 2, fill: "row" }}
                spaceBetween={10}
                pagination={{ clickable: true }}
                modules={[Grid, Pagination]}
                style={swiperStyles}
                onSwiper={(swiper) => {
                    // Hide default pagination bullets directly when swiper is ready
                   
                }}
            >
                {items.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={swiperSlideStyles}
                        className="relative"
                    >
                        <div className="flex items-center sm:gap-3 gap-1 bg-peach sm:pr-4 sm:p-2 p-0.5 rounded-xl relative mr-1">
                            <div>
                                <img
                                    src={item.image}
                                    alt={`Room ${item.id}`}
                                    className="lg:w-[250px] sm:w-[200px] min-w-[40px] md:h-[180px] sm:h-[150px] min-h-[30px] object-cover rounded-lg"
                                />
                            </div>

                            <div>
                                <p className="font-bold lg:text-[30px] sm:text-[20px] text-[11px]">{item.name}</p>
                                <p className="sm:text-[12px] text-[7px] text-gray-400">{item.feature}</p>

                                <div className="flex gap-5 items-center">
                                    <p className="sm:text-[15px] text-[10px]">
                                        ${(item.price - (item.price * item.discount) / 100).toFixed(2)}
                                    </p>
                                    <p className="sm:text-[10px] text-[8px] text-gray-500 line-through">${item.price}</p>
                                </div>

                                <div className="absolute bg-red-400 sm:px-1.5 sm:py-2 px-0.5 py-1 text-white rounded-full sm:top-4 sm:right-0 top-0 right-1">
                                    <p className="sm:text-[13px] text-[8px]">{item.discount}%</p>
                                </div>
                            </div>
                        </div>

                        {hoveredItem?.id === item.id && <HoverModel item={item} isVisible forceLayout={false} />}
                    </SwiperSlide>
                ))}
            </Swiper>

           
        </div>
    );
};

export default ShopListView;
