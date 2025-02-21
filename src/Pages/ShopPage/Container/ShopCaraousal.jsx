import {  useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import JsonData from "../../../Shared/Components/JsonData";
import { useSelector,useDispatch } from "react-redux";
import { setRange } from "./ShopSlice";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// Import required modules
import { Grid, Pagination } from "swiper/modules";
import useShowShop from "./useShowShop";


// Adjust the number of items per page

const ShopCaraousal = () => {
  const cardsNumber = useSelector((state) => state.Shop.showCards)
  const sortOption = useSelector((state) => state.Shop.sortOption)
  const GridStatus = useSelector((state) => state.Shop.viewStatus)
  const data = JsonData();
  const dispatch = useDispatch();

  const ITEMS_PER_PAGE = GridStatus ? 6 : 4; 
  // console.log(ITEMS_PER_PAGE , "items going in caraousal" , typeof(ITEMS_PER_PAGE))

  const { paginateddata } = useShowShop(data, cardsNumber);
 
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(paginateddata.length / ITEMS_PER_PAGE);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = (currentPage + 1) * ITEMS_PER_PAGE
  
    // Get the items for the current page
    const displayedItems = paginateddata.slice(
      startIndex,
      endIndex
    );

    console.log(sortOption,"value indisde caraousel")

    let sortedItems = [...displayedItems]; // Initialize the sortedItems array

    if (sortOption === 'price') {
      // Sort by discounted price
      sortedItems.sort((a, b) => 
        (a.price - (a.price * a.discount) / 100) - (b.price - (b.price * b.discount) / 100)
      );
    }

    useEffect(()=> {

    },[sortOption])

  // Function to change page
  const goToPage = (index) => {
    setCurrentPage(index);

  };

  // Function to handle Next Button
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      dispatch(setRange({ startIndex, endIndex }))
      console.log(startIndex,endIndex,"handle prevv wallal")

    }
  };

  // Function to handle Previous Button
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      dispatch(setRange({ startIndex, endIndex }))
      console.log(startIndex,endIndex,"handle nexrt wallal")
    }
  };

  
console.log(startIndex,endIndex,"s,e")
    

  return (
    <div className="mt-20 px-24 relative w-full pb-20">


   {  GridStatus  ? 
    
    <Swiper
        slidesPerView={3}
        slidesPerGroup={3} // Move 6 items (full grid) per swipe
          grid={{
            rows: 2,
            fill: 'row', // Fill row-wise
          }}
        spaceBetween={39}
        pagination={{ clickable: true }} 
        modules={[ Grid, Pagination ]}
        className="mySwiper"

      >
        {sortedItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-[250px]  text-center pb-6 pt-4 bg-peach items-center flex flex-col rounded-xl relative">
              <img
                src={item.image}
                alt={`Room ${item.id}`}
                className="w-[230px] h-[200px] object-cover rounded-lg "
              />
               <p className="font-bold text-[30px] mt-2">{item.name}</p>
              <p className="text-[15px] text-gray-400">{item.feature}</p>

                {/* The discount and price calculation logic */}
                <div className="flex gap-5 items-center"> 
                          <p className="text-[20px]">
                                 ${(item.price - (item.price * item.discount) / 100).toFixed(2)}
                          </p>
                           <p className="text-[15px] text-gray-500 line-through">${item.price}</p>
              </div>

              {/* The discount design */}

              <div className="absolute bg-red-400 px-1.5 py-2 text-white rounded-full top-4 right-5">
                  <p className="text-[13px]">{item.discount}%</p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      
      
      
      :

      
      <Swiper
      slidesPerView={2}
      slidesPerGroup={3} // Move 6 items (full grid) per swipe
        grid={{
          rows: 2,
          fill: 'row', // Fill row-wise
        }}
      spaceBetween={30}
      pagination={{ clickable: true }} 
      modules={[ Grid, Pagination ]}
      className="mySwiper"

    >
      {sortedItems.map((item) => (
        <SwiperSlide key={item.id}>
          <div className=" flex items-center gap-3 bg-peach pr-4 p-2 rounded-xl relative">
            <div>
              <img
                src={item.image}
                alt={`Room ${item.id}`}
                className="w-[250px] h-[200px] object-cover rounded-lg"
              />
            </div>

            <div>
              <p className="font-bold text-[30px]">{item.name}</p>
              <p className="text-[15px] text-gray-400">{item.feature}</p>
              {/* The discount and price calculation logic */}
              <div className="flex gap-5 items-center"> 
                          <p className="text-[20px]">
                                 ${(item.price - (item.price * item.discount) / 100).toFixed(2)}
                          </p>
                           <p className="text-[15px] text-gray-500 line-through">${item.price}</p>
              </div>
              {/* The discount design */}
              <div className="absolute bg-red-400 px-1.5 py-2 text-white rounded-full top-4 right-5">
                  <p className="text-[13px]">{item.discount}%</p>
              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      
      
      
      
      } 


        {/* //button section */}
      {/* Custom Pagination Buttons */}
      <div className="flex justify-center mt-4 absolute left-[40%] ">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-gray-300 text-black rounded-full mx-2 disabled:opacity-50"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`px-4 py-2 mx-1 rounded-full ${
              currentPage === index
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2 bg-gray-300 text-black rounded-full mx-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShopCaraousal;
