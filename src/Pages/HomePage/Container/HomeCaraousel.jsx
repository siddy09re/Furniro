import Button from "../../../Shared/Components/Button";
import JsonData from "../../../Shared/Components/JsonData";
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../Container/Home.css'


// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards"; // Required for 'cards' effect


// Import Swiper modules
import { Navigation, Pagination } from "swiper/modules";
import { EffectCards } from 'swiper/modules';

// Your carousel component
const HomeCaraousel = () => {
    const data = JsonData(); // Fetching JSON data

    return (
        <div className="mt-24 flex md:flex-row flex-col justify-between bg-peach md:py-11 py-20 lg:pl-24 sm:pl-16   
        items-center ">
            <div className="md:my-32  max-w-[422px] flex flex-col md:justify-start justify-center items-center md:px-0 px-5 ">
                <p className="font-bold md:text-[40px] sm:text-[25px] text-[18px]">
                    50+ Beautiful rooms inspiration
                </p>
                <p className="md:text-[16px] text-[10px]">
                    Our designer already made a lot of beautiful prototypes of rooms that inspire you.
                </p>
                <div className="max-w-44 mt-6">
                    <Button
                        variant={"customBrown"}
                        content={"Explore More"}
                        size={"large"}
                        className={"sm:px-9 sm:py-3 px-3 py-1 text-[16px]"}
                    />
                </div>
            </div>

            {/* Swiper Carousel */}
        <div className="lg:max-w-[808px] md:max-w-[580px] w-full  flex flex-col items-center relative ">



 {/* Navigation Buttons & Pagination - Positioned Below */}
                <div className="flex items-center gap-4 mt-4 absolute -bottom-16">
                        {/* Custom Previous Button */}
                        <div className="custom-prev flex items-center justify-center w-10 h-10 bg-gray-300 
                        rounded-full cursor-pointer">
                        <i className="fas fa-chevron-left text-gray-700"></i>
                        </div>

                        {/* Swiper Pagination */}
                        {/* <div className="swiper-pagination"></div> */}

                        {/* Custom Next Button */}
                        <div className="custom-next flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer">
                        <i className="fas fa-chevron-right text-gray-700"></i>
                        </div>
                    </div>


                    {/* Swiper Component */}
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={8}
                        slidesPerView={2} // Default slidesPerView
                        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
                        pagination={{ clickable: true}}
                        className="mySwiper "
                        breakpoints={{
                            
                            768: {
                            slidesPerView: 2,
                            spaceBetween : 3,
                            },
                          
                            1026: {
                                slidesPerView: 3, 
                                },
                        }}
                        // effect="cards"
                        >
 

                        {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="md:w-[250px] md:h-[250px] w-[150px] h-[150px]">
                            <img
                                src={item.image}
                                alt={`Room ${item.id}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* <div className="swiper-pagination"></div>   */}
                    </div>
        </div>
    );
};

export default HomeCaraousel;
