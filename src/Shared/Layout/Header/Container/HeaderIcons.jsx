
import { useState } from "react";
import { PiPersonSimpleThrowFill } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector,useDispatch } from "react-redux";
import { removeProduct , setModalStatus} from "../../../Slices/CartSlice";
import Button from "../../../Components/Button";
import CartSidebar from "./CartSidebar";

const HeaderIcons = ({ className }) => {

  // const[modelStatus , setmodelStatus] = useState(true);
  const ItemsNo = useSelector((state) => state.Cart.ItemsNumber)
  const modelStatus = useSelector((state) => state.Cart.ModalStatus)

  const dispatch = useDispatch();
    return (
      <div className={`w-full  flex justify-end items-center md:gap-5  gap-3 
      sm:max-w-[230px] sm:max-h-[28px] max-w-[230px] max-h-[18px] font-poppins ${className} `} id="header_icons">
          {/* <PiPersonSimpleThrowFill  className='min-w-[24px] min-h-[23px] '/> 
          <IoSearchOutline className='min-w-[25px] min-h-[24px]' /> 
          <FaRegHeart className='min-w-[20px] min-h-[20px] ' />  */}
        
        {
          modelStatus ? (

              <button onClick={() => dispatch(setModalStatus())} className="relative">
                <FaCartShopping className='min-w-[22px] min-h-[22px] '  />
                {
                  ItemsNo > 0 ?
                  <div className="absolute -top-3 -right-2 w-4 h-4 text-xs bg-red-400 rounded-2xl">
                    {ItemsNo}
                  </div>
                  : null
                }
              </button> )
          :(
            <CartSidebar/>
          )

        }
      </div>
    )
  }
  
  export default HeaderIcons;
  