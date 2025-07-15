import {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import JsonData from "../../../Shared/Components/JsonData";
import { setRange } from "./ShopSlice";
import useShowShop from "./useShowShop";
import ShopGridView from "./ShopGridView";
import ShopListView from "./ShopListView";
import ShopPagination from "./ShopPagination";

const ShopCaraousal = () => {
  const cardsNumber = useSelector((state) => state.Shop.showCards);
  const sortOption = useSelector((state) => state.Shop.sortOption);
  const GridStatus = useSelector((state) => state.Shop.viewStatus);
  const data = JsonData();
  const dispatch = useDispatch();

  const ITEMS_PER_PAGE = GridStatus ? 6 : 4;
  const { paginateddata } = useShowShop(data, cardsNumber);

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(paginateddata.length / ITEMS_PER_PAGE);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = (currentPage + 1) * ITEMS_PER_PAGE;
  const displayedItems = paginateddata.slice(startIndex, endIndex);

  let sortedItems = [...displayedItems];
  if (sortOption === "price") {
    sortedItems.sort((a, b) => 
      (a.price - (a.price * a.discount) / 100) - (b.price - (b.price * b.discount) / 100)
    );
  }

  const goToPage = (index) => setCurrentPage(index);
 
  // Function to handle Next Button
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      let newPage = currentPage + 1;
      setCurrentPage(newPage);
      
      // Corrected: Dispatch correct range for the new page
      dispatch(setRange({ 
        startIndex: newPage * ITEMS_PER_PAGE, 
        endIndex: (newPage + 1) * ITEMS_PER_PAGE 
      }));
  
      console.log(newPage * ITEMS_PER_PAGE, (newPage + 1) * ITEMS_PER_PAGE, "handle next");
    }
  };
  
  const handlePrev = () => {
    if (currentPage > 0) {
      let newPage = currentPage - 1;
      setCurrentPage(newPage);
  
      // Corrected: Dispatch correct range for the previous page
      dispatch(setRange({ 
        startIndex: newPage * ITEMS_PER_PAGE, 
        endIndex: (newPage + 1) * ITEMS_PER_PAGE 
      }));
  
      console.log(newPage * ITEMS_PER_PAGE, (newPage + 1) * ITEMS_PER_PAGE, "handle prev");
    }
  };

  return (
    <div className="flex justify-center items-center" id="the caraousel container">
        <div className="sm:mt-20 mt-9  relative  w-full sm:pb-15 pb-1 ">
        {GridStatus ? <ShopGridView items={sortedItems} /> : <ShopListView items={sortedItems} />}
        <ShopPagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} handleNext={handleNext} handlePrev={handlePrev} />
        </div>
    </div>
  );
};

export default ShopCaraousal;
