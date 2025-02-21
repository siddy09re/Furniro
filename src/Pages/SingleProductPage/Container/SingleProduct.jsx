import { useLocation } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import SingleProductInformation from "./SingleProductInformation";
import SingleProductAdditional from "./SingleProductAdditional";
import HomeOurProduct from "../../../Shared/Container/HomeOurProduct";

const SingleProduct = () => {
  const location = useLocation();
  const item = location.state?.item; // ✅ Get item data from state

  if (!item) {
    return <p>Loading...</p>; // Handle case where item data is missing
  }

  return (
  <div className="font-poppins">

    <div className="sm:py-10 sm:px-24 py-8 px-8   bg-peach w-full font-poppins ">
      
      <div className="max-w-[365px] flex justify-between"> 

          <div className="flex sm:gap-5 gap-3 items-center">
              <p>Home</p>
              <SlArrowRight />
          </div>

          <div className="flex  sm:gap-5 gap-3 items-center">
              <p>Shop</p>
              <SlArrowRight />
          </div>

          <div className="flex  items-center justify-end max-w-[122px] w-full border-l-2 border-black">
              {item.name}
              
          </div>

      </div>
    </div>


      <div className="sm:px-24 px-8 sm:py-12 py-8">
      <SingleProductInformation item={item} />
      </div>
      <SingleProductAdditional/>
      <HomeOurProduct StartingItems={"4"} Title={"Related Items"} />


      
    
  </div>
  );
};

export default SingleProduct;
