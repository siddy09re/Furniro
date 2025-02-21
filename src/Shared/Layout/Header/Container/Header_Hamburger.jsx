import { useState } from "react";
import image from '../Header_assests/Burger.png'
import { NavLink } from "react-router-dom";


function Hamburger() {
 
const [isToggle,setIsToggle] = useState(false)
  return (
    <div className='relative flex' id="Hamburger-section ">
      <button   onClick={() => setIsToggle(!isToggle)}>
        <img src={image} alt="Description of the image" className="sm:max-w-[28px] sm:max-h-[28px] max-w-[23px] max-h-[23px]
         px-1 py-1 bg-red-500 rounded-lg    " />
      </button>
      {/* Conditionally render the navigation links */}
      {isToggle && (
       <div className="absolute z-10 right-0 top-6 mt-2   border rounded-lg
        bg-white  ">
        
       <ul className="flex flex-col items-center gap-1 ">
       
         <li className="border-b rounded-md border-gray-400 my-1 mx-2 ">
         <NavLink to= "/">Home</NavLink>
         </li>
         <li className="border-b rounded-md border-gray-400 my-1 mx-2">
         <NavLink to= "/shop">Shop</NavLink>
         </li>
         {/* <li className="border-b rounded-md border-gray-400 my-1 mx-2">
         <NavLink to= "/blog">About</NavLink>
         </li>
         <li className="border-b rounded-md border-gray-400 my-1 mx-2">
         <NavLink to= "/contact">Contact</NavLink>
         </li> */}
         <li className="border-b rounded-md border-gray-400 my-1 mx-2">
         <NavLink to= "/cart">Cart</NavLink>
         </li>
         {/* <li className="mx-3 my-2">
            <HeaderIcons/>
         </li> */}
       </ul>
     </div>
     
      )}
    </div>
  );
}

export default Hamburger;
