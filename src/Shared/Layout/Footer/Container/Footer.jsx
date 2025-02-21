import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
 <div className="mb-8">   
    <div className="md:px-24 md:pt-12 px-8 pt-8 font-poppins border-2 border-gray-300 ">
            <div className="grid grid-cols-12 gap-4     ">
                {/* Funiro (Spans 2 Rows) */}
                <div className="col-span-8 sm:col-span-6 lg:col-span-3 lg:mr-0  ">
                    <p className="md:mb-12 mb-8 md:text-[24px] text-[18px] font-bold">Funiro</p>
                    <p className="whitespace-nowrap md:text-[16px] text-[13px]">400 University Drive  
                        </p>  <span className="md:text-[16px] text-[13px]"> Suite 200 Coral Gables, FL 33134 USA</span>
                </div>

                {/* Other Columns */}
                <div className="col-span-4 sm:col-span-3 lg:col-span-2 md:text-[16px] text-[14px] lg:mr-32 ">
                    <p className="md:mb-12 mb-8 text-gray-500 "><NavLink to="/">Home</NavLink></p>
                    <p className="md:mb-12 mb-8">Link</p>
                    <p className="md:mb-12 mb-8"><NavLink to="/shop">Shop</NavLink></p>
                    <p className="md:mb-12 mb-8"><NavLink to="/blog">About</NavLink></p>
                    <p className=""><NavLink to="/contact">Contact</NavLink></p>
                    </div>

                <div className="col-span-7 sm:col-span-6 lg:col-span-2 lg:mr-16 md:mr-8  md:text-[16px] text-[14px] whitespace-nowrap">
                    <p className="text-gray-500 md:mb-12 mb-8">Help</p>
                    <p className="md:mb-12 mb-8">Payment Options</p>
                    <p className="md:mb-12 mb-8">Returns</p>
                    <p className="md:mb-12 mb-8">Privacy Policy</p>
                </div>

                <div className="col-span-6 sm:col-span-4 lg:col-span-4  md:text-[16px] text-[14px] ">
                        <p className="mb-12 text-gray-500 ">Newsletter</p>
                        <div className="flex gap-4">
                            <input type="email" className="w-full min-w-[173px] text-[12px]   rounded-lg" 
                            placeholder="Enter your email address" />
                            <p>Subscribe</p>
                        </div>
                </div>
                </div>
                <div className="border-t-2 border-gray-200 min-h-[59px] sm:text-[16px] text-[14px] mt-12 flex-grow 
                flex flex-col justify-end ">
                        <p>2023 furino. All rights reverved</p>
                </div>

    </div>
</div>
  )
}

export default Footer