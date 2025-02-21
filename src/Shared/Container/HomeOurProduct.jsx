import JsonData from "../Components/JsonData";
import Button from "../Components/Button";
import useShow from "./useShow";
import HoverModel from "../Container/HoverModel";
import { useState } from "react";


const HomeOurProduct = ({StartingItems , Title}) => {
    const data = JsonData();
    const { paginatedData, loadMore, loadLess, status } = useShow(data, StartingItems);
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <div className="flex flex-col justify-center items-center mt-14 md:px-32 sm:px-24 px-8">
            <p className="font-bold md:text-[40px] text-[24px] text-center">{Title}</p>

            <div className="grid grid-cols-12 md:gap-10 gap-4 md:overflow-x-auto overflow-x-scroll mt-12">
            {
                paginatedData.map((item) => {
                    const discountedPrice = (item.price - (item.price * item.discount) / 100).toFixed(2);

                    return (
                        <div key={item.id} className="lg:col-span-3 sm:col-span-4 col-span-6 relative pb-4 pt-2 p-2
                         bg-peach rounded-xl"
                         onMouseEnter={() => setHoveredItem(item)} 
                         onMouseLeave={() => setHoveredItem(null)}  
                         >
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="md:max-w-[285px] max-w-[150px] rounded-lg w-full h-auto object-cover"
                            />
                            <p className="sm:text-[20px] text-[15px] font-bold mt-2">{item.name}</p>
                            <p className="md:text-[12px] text-[9px] text-gray-500 mt-2">{item.feature}</p>

                            {/* Discounted price and original price */}
                            <div className="flex justify-between items-center sm:gap-1 mt-2">
                                <p className="md:text-[16px] sm:text-[16px] text-[13px] font-bold">${discountedPrice}</p>
                                {item.discount > 0 && (
                                    <p className="md:text-[12px] sm:text-[12px] text-[11px] text-gray-500 line-through">${item.price}</p>
                                )}
                            </div>

                            {/* Discount Badge */}
                            {item.discount > 0 && (
                                <div className="absolute bg-red-400 sm:px-1.5 px-1 sm:py-2 py-1.5 text-white rounded-full sm:top-4 top-1 sm:right-5 right-1">
                                    <p className="sm:text-[13px] text-[10px]">{item.discount}%</p>
                                </div>
                            )}

                                {hoveredItem?.id === item.id && <HoverModel item={item} isVisible forceLayout={true}/>}
                        </div>
                        
                     
                    );
                })

               
            }

                {/* Load More / Load Less Button */}
                <div className="flex justify-center col-span-12">
                    <div className="max-w-96">
                        <Button 
                            content={status ? "Show more" : "Show less"} 
                            variant="outlined" 
                            onClick={status ? loadMore : loadLess} 
                            size="medium" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeOurProduct;
