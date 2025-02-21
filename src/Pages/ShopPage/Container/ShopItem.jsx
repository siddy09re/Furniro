

const ShopItem = ({ item }) => {
    const discountedPrice = (item.price - (item.price * item.discount) / 100).toFixed(2);
  
    return (
      <div className="  pb-4 pt-2 p-2 bg-peach pl-2 flex flex-col rounded-xl relative">
        <img
          src={item.image}
          alt={`Room ${item.id}`}
          className="lg:w-[230px] sm:w-[190px] w-[90px]  lg:h-[200px] sm:h-[150px] object-cover rounded-lg"
        />
        <p className="font-bold lg:text-[30px] sm:text-[25px] text-[12px] mt-2">{item.name}</p>
        <p className="sm:text-[15px] text-[8px] text-gray-400">{item.feature}</p>
  
        {/* Discounted price and original price */}
        <div className="flex justify-between items-center sm:pr-6 "> 
          <p className="sm:text-[20px] text-[10px] ">${discountedPrice}</p>
          <p className="sm:text-[15px] text-[8px]  text-gray-500 line-through">${item.price}</p>
        </div>
  
        {/* Discount Badge */}
        <div className="absolute bg-red-400 sm:px-1.5 px-1 sm:py-2 py-1.5 text-white rounded-full sm:top-4 top-1 
        sm:right-5 right-1">
          <p className="sm:text-[13px] text-[10px]">{item.discount}%</p>
        </div>
      </div>
    );
  };
  
  export default ShopItem;
  