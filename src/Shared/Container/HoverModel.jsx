import { useNavigate } from "react-router-dom";
import { CiShare2 } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import Button from "../Components/Button";
import { useSelector } from "react-redux";

const HoverModal = ({ item, isVisible , forceLayout  }) => {
  const navigate = useNavigate(); // ✅ Use the hook for navigation
  const LayoutStatus = useSelector((state) => state.Shop.viewStatus)

  if (!isVisible) return null; // Hide when not hovered

  const useLayout = forceLayout ? true : LayoutStatus;

  return (
    <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md flex flex-col items-center justify-center 
    text-white rounded-lg transition-opacity duration-300 p-2">

    {
        useLayout ?

<div> 
        <div className="flex flex-col items-center gap-[5px] ">
        <h3 className="font-semibold sm:text-[20px] text-[12px]">{item.name}</h3>

        <div className="flex">
            <Button
            variant="outlined"
            content="Know More"
            className="sm:mt-2 mt-0 sm:px-4 sm:py-2 px-1 py-0.5 sm:text-[15px] text-[10px] rounded-lg"
            onClick={() => navigate("/singleproduct" ,  { state: { item } }) }
            />
        </div>
    </div>


      <div className="flex lg:flex-row flex-col items-center  sm:mt-2  justify-between w-full sm:gap-2 gap-1 
      lg:px-9 px-3 mt-1">
            <div className="flex items-center sm:text-[14px] text-[9px]">
                 <CiShare2 />
                 <p>Share</p>
            </div>

            <div className="flex items-center sm:text-[14px] text-[9px]">
                 <MdCompareArrows />
                 <p>Compare</p>
            </div>

            <div className="flex items-center sm:text-[14px] text-[9px]">
                 <FcLike />
                 <p>Like</p>
            </div>

      </div> 
</div>
      :

<div>
      <div className=" flex flex-row items-center justify-between px-1 sm:gap-5 gap-[2px]">
        <h3 className="font-semibold sm:text-[20px] text-[11px]">{item.name}</h3>

        <div className="flex">
            <Button
            variant="outlined"
            content="Know More"
            className="sm:mt-2 mt-0 sm:px-4 sm:py-2 px-1 py-0.5 sm:text-[15px] text-[8px] hover:bg-custom-brown hover:text-white rounded-lg"
            onClick={() => navigate("/singleproduct" ,  { state: { item } }) }
            />
        </div>
    </div>


      <div className="flex flex-row  items-center  sm:mt-2  justify-between w-full lg:px-9 px-3 mt-1 gap-[5px] ">
            <div className="flex items-center sm:text-[16px] text-[8px]">
                 <CiShare2 />
                 <p>Share</p>
            </div>

            <div className="flex items-center sm:text-[16px] text-[8px]">
                 <MdCompareArrows />
                 <p>Compare</p>
            </div>

            <div className="flex items-center sm:text-[16px] text-[8px]">
                 <FcLike />
                 <p>Like</p>
            </div>

      </div>

</div>
    }










    
    </div>
  );
};

export default HoverModal;
