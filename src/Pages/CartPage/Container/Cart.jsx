import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, updateQuantity } from "../../../Shared/Slices/CartSlice";

import ShopTrophy from "../../ShopPage/Container/ShopTrophy";
import Button from "../../../Shared/Components/Button";
import { useNavigate } from "react-router-dom";

import DecorImage from "../../ShopPage/ShopAssests/HomeDecor.png";
import ProductNotFound from '../CartAssests/product-not-found.png'

const Cart = () => {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.Cart.products);
  const TotalPrice = useSelector((state) => state.Cart.totalPrice);
  const navigate = useNavigate();

  return (
    <div>
      <img src="https://st.hzcdn.com/simgs/pictures/patios/east-hampton-home-elizabeth-kohn-design-img~db6147d2061d65e5_14-5001-1-5ef2a90.jpg" 
    className='w-full max-h-[316px]  object-cover' />
      <div className="md:px-24 sm:px-12 px-8 md:pt-20 sm:pt-15 pt-8">
        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Ensures content doesn't shrink */}
            <div className="grid grid-cols-6 grid-flow-row bg-custom-brown text-white rounded-2xl py-7 text-xl mb-12">
              <p></p>
              <p>Product</p>
              <p>Quantity</p>
              <p>Price</p>
              <p>Subtotal</p>
              <p></p>
            </div>

            {Products.length > 0 ? (
              Products.map((item, index) => (
                <div key={index} className="grid grid-cols-6 grid-flow-row items-center py-5 my-12">
                  <img src={item.image} className="max-w-20 max-h-20 rounded-2xl" alt={item.name} />

                  <div id="The name section"> 
                       <p className="text-xl">{item.name}</p>
                       <div className="flex flex-col ">

                        <div className="flex items-center">

                          <span>Color : </span> 
                          <span className={`ml-1 w-5 h-5 border border-gray-300 inline-block rounded-full ${item.color}`}></span>

                        </div>
                      
                        <span>Size : {item.size}</span>
                      </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button onClick={() => dispatch(updateQuantity({ item, amount: -1 }))}>-</button>
                    <p className="md:text-[16px] text-xs">{item.quantity}</p>
                    <button onClick={() => dispatch(updateQuantity({ item, amount: 1 }))}>+</button>
                  </div>

                  <p>$ {item.discountedPrice}</p>
                  <p>$ {item.totalPrice}</p>
                  <MdDelete className="w-7 h-7 cursor-pointer" onClick={() => dispatch(removeProduct(item))} />
                </div>
              ))
            ) : (
              <div className="  flex sm:justify-center">
                <img src={ProductNotFound} className="md:max-w-lg md:max-h-full sm:max-w-80 max-w-48 "/>
              </div>
            )}
          </div>
        </div>

        {Products.length > 0 && (
          <div className="bg-custom-brown rounded-xl mt-12">
            <div className="flex sm:flex-row flex-col justify-end gap-6 bg-custom-brown text-white items-center rounded-2xl py-7 px-5 text-xl mb-12 w-full">
              <p>Total: $ {TotalPrice}</p>
              <div>
                <Button
                  content="Checkout"
                  variant="outlined"
                  className="rounded-xl hover:bg-orange-300 py-2 px-3"
                  onClick={() => navigate("/checkout")}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <ShopTrophy />
    </div>
  );
};

export default Cart;
