

import image3 from "../HomeAssests/Rectangle 37.svg"
import image2 from "../HomeAssests/Rectangle 36.svg"
import image4 from "../HomeAssests/Rectangle 38.svg"
import image5 from "../HomeAssests/Rectangle 39.svg"
import image6 from "../HomeAssests/Rectangle 40.svg"
import image7 from "../HomeAssests/Rectangle 41.svg"
import image8 from "../HomeAssests/Rectangle 43.svg"
import image9 from "../HomeAssests/Rectangle 44.svg"
import image10 from "../HomeAssests/Rectangle 45.svg"
const HomeBentoGrid = () => {
   
  return (
    
    <div className="grid grid-cols-10 grid-rows-6 max-h-[780px] gap-[16px] w-full mt-16 ">
            
            <div className="col-start-5 col-end-7 row-span-1 text-center whitespace-nowrap flex flex-col justify-center items-center ">
                <p className="md:text-[20px] text-[12px] text-gray-300 ">Share  your setup</p>
                <p className="md:text-[35px] sm:text-[20px] text-[18px] font-bold">#FuniroFurniture</p>
            </div>  
            <img src={image2} className="col-start-1 col-end-2    row-start-1 row-end-4 w-full h-full object-cover" />
            <img src={image4} className="col-start-2 col-end-5    row-start-2 row-end-4 w-full h-full object-cover "/>
            <img src={image6} className="col-start-5 col-end-7    row-start-3 row-end-6 w-full h-full object-cover"/>
            <img src={image8} className="col-start-7 col-end-9    row-start-2 row-end-4 w-full h-full object-cover "/>
            <img src={image10} className="col-start-9 col-end-11 pt-2  row-start-1 row-end-4 w-full h-full object-cover"/>
            <img src={image3} className="col-start-1 col-end-2    row-span-3 w-full h-full object-cover"/>
            <img src={image5} className="col-start-2 col-end-5    row-span-2 w-full h-full object-cover "/>
            <img src={image7} className="col-start-7 col-end-8    row-span-3 w-full h-full object-cover pb-8"/>
  
            <img src={image9} className="col-span-2    row-span-2 w-full h-full object-cover"/>
          

    </div>
  )
}

export default HomeBentoGrid