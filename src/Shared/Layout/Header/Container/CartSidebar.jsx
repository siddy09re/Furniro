import { IoCloseSharp } from "react-icons/io5";
import { useSelector,useDispatch } from "react-redux";
import { removeProduct,setModalStatus } from "../../../Slices/CartSlice";
import Button from "../../../Components/Button";
import { useNavigate } from "react-router-dom";


const CartSidebar = () => {

    const navigate = useNavigate()
  
      const Products = useSelector((state) => state.Cart.products)
      const TotalPrice = useSelector((state) => state.Cart.totalPrice)
    
      const dispatch = useDispatch();

  return (
    <div className="absolute top-0 right-0 bg-white z-20 p-7 md:max-w-96 max-w-xl w-full shadow-2xl rounded-3xl "> 

    <div className="flex justify-between items-center pb-6 border-b-2">
          <p className="font-bold text-[24px]">Shopping Cart</p>
          <button onClick={() => dispatch(setModalStatus())}><IoCloseSharp className="w-5 h-5"/></button>
    </div>


    <div>
        <div>
          {
            Products.map((product, index) => (
            
           
              <div key={index} className="flex flex-col  justify-star md:items-center mt-12 md:max-w-full max-w-80  relative">
                <div className="flex md:justify-start items-center gap-5">
                  <img src={product.image} className="w-20 h-full object-cover rounded-xl"/>

                  <div className="flex items-between sm:gap-6 gap-5">
                    <div> 

                      <p className="font-bold sm:text-[16px] text-xs ">{product.name}</p>
                      <p  className="sm:text-[16px] text-xs mt-1">{product.quantity} * ${product.discountedPrice}</p>

                    </div>

                    <div> 
                        <p className="flex items-center sm:text-[16px] text-xs">
                          Color :
                          <span className={`${product.color} sm:w-5 sm:h-5 w-4 h-4 rounded-full border border-gray-300 
                            inline-block sm:ml-2 ml-1`}></span>
                        </p>
                        <p className="sm:text-[16px] text-xs"> Size: {product.size}</p>

                    </div>
                  </div>

                    {/* <p className="font-bold">{product.totalPrice}</p> */}
                 
                <div className="absolute -top-2  right-0 border-red-300 hover:bg-red-300  border-2 flex rounded-full"> 
                  <button onClick={() => dispatch(removeProduct(product))}><IoCloseSharp className="w-4 h-4"/>
                  </button>
                </div>
              </div>

              <p className="md:pl-0 pl-24">Price: <span className="font-bold">${product.totalPrice}</span></p>

            </div>
            
            ))
          }
            </div>
        
    </div>

    <div className="flex justify-center items-center mt-12 border-y-2">
            <p className="sm:text-[16px] text-xs">Total Price : <span className="font-bold">${TotalPrice}</span></p>
    </div>

    <div className="flex px-8 justify-between mt-6">
          <div>
            <Button
            variant="outlined"
            content="Cart" 
            size="small"
            className="rounded-xl"
            onClick={()=> navigate('/cart')}/>
          </div>

          <div>
            <Button
            variant="outlined"
            content="Checkout" 
            size="small"
            className="rounded-xl"
            onClick={()=> navigate('/checkout')}/>
          </div>
    </div>    

  </div>
  )
}

export default CartSidebar