import image1 from '../SingleProductAssests/Group 94.svg'
import image2 from '../SingleProductAssests/Group 96.svg'
import image3 from '../SingleProductAssests/Group 97.svg'
import image4 from '../SingleProductAssests/Group 98.svg'
import Star from '../SingleProductAssests/Stars.svg'
import Line from "../SingleProductAssests/Line.svg"
import Button from '../../../Shared/Components/Button'

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import SingleButton from '../Component/SingleButton'
import { useState } from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { addProduct } from '../../../Shared/Slices/CartSlice'

import { ToastContainer, toast,Bounce } from 'react-toastify';

const SingleProductInformation = ({item}) => {

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState(""); 
  const discountedPrice = (item.price - (item.price * item.discount) / 100).toFixed(2);

  const [mainImage, setMainImage] = useState(item.image);
  const sideImages = [image1, image2, image3, image4 ];

  const notify = (item) => toast.success(`${item.name} added to cart`, {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce,
                            });

  const handleCartLogic = (e,item) => {
      
        dispatch(addProduct({ ...item, quantity , color:selectedColor , size:selectedSize }));
        notify(item);
  }
  return (
    <div className=" flex lg:flex-row flex-col  lg:justify-between justify-center items-start gap-8">
          
          <div className="max-h-[500px] w-full flex gap-6 ">
        
                  {/* Side Images Section */}
                  <div className="grid grid-cols-1 grid-rows-4 gap-1 mb-20">
                        {sideImages.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            className="sm:max-w-20 max-w-15 sm:max-h-20 max-h-15 cursor-pointer hover:opacity-70 transition-opacity"
                            onClick={() => setMainImage(img)} // Update main image on click
                          />
                        ))}
                  </div>

                  {/* Main Product Image */}
                  <div className="sm:max-w-[350px] w-full max-w-[250px] ">
                     <img src={mainImage} className="h-full w-full object-cover" />
                  </div>
                </div>



{/* Details Secton */}
        <div className='text-start w-full '>
          <h1 className='font-bold sm:text-4xl text-2xl'> {item.name}</h1>

          <div className='flex lg:gap-40 md:gap-80 md:justify-normal justify-between items-center sm:text-3xl text-xl mt-5 text-gray-500'>
            <p>${discountedPrice}</p>
            <p className='line-through'>${item.price}</p>
          </div>

          <div className='mt-4 flex justify-between max-w-[269px] items-center'>
            
              <img src={Star} className='max-w-32 max-h-5'/>
              <img src={Line} className='w-1 h-5'/>
              <p className='text-xs text-gray-400'>5 Customer Review</p>


          </div>

            <div className='max-w-md text-xs mt-5'>
                  <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a 
                    compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange
                     and extended highs for a sound.
                  </p>
            </div>


            <div>

                <div className='mt-6'>
                  <p className='text-xs'>Size</p>

                  <div className="flex gap-4">

                      {["L", "XL", "XS"].map((size) => (
                        <SingleButton
                          key={size} 
                          content={size}  // ✅ Pass dynamic size
                          onClick={() => setSelectedSize(size)}  // ✅ Handle click
                          className={` ${
                            selectedSize === size ? "bg-custom-brown text-white" : "border-gray-400"
                          }`}
                        />
                      ))}

                         {/* <SingleButton props={"XL"} />

                        <SingleButton props={"XS"} /> */}

                    </div>
                  </div>
                


                <div className='mt-6'>
                  <p className='text-xs'>Colors</p>

                  <div className='flex gap-4'>

                            {["bg-purple-900", "bg-black", "bg-lime-400"].map((color) => (
                                <SingleButton
                                  key={color}
                                  onClick={() => setSelectedColor(color)}
                                  className={`rounded-full  border-2 transition-all hover:${color} ${
                                    selectedColor === color ? "border-red-300  border-4" : "border-transparent"
                                  } ${color}`}
                                />
                             ))}

                        {/* <SingleButton className={"rounded-full bg-black border-0 hover:bg-black"} />

                        <SingleButton className={"rounded-full bg-lime-400 border-0 hover:bg-lime-400"} /> */}

                  </div>
                </div>


{/* -------------------------------------- Buttons --------------------------------------- */}
                <div className='mt-8 flex sm:flex-row flex-col  gap-12'>

                  <div className=' flex sm:py-3 py-2 px-2 sm:px-5 border-2 border-custom-brown sm:max-w-fit 
                  rounded-xl justify-center '>
                      <div className='flex gap-4 items-center max-w-fit '>

                        <button onClick={() => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1))}> - </button>
                        <p className=' '>{quantity}</p>
                        <button onClick={() => setQuantity(quantity+1)}> + </button>

                      </div>
                  </div>

                  <div className=''>
                      <Button
                      content="Add to Cart"
                      className="lg:px-12 md:px-20 sm:px-12 sm:py-4 px-5 py-2 whitespace-nowrap text-black rounded-xl "
                      variant="outlined"
                      onClick={(e) => handleCartLogic(e,item)}/>
                      <ToastContainer
                          position="top-right"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick={false}
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="colored"
                          transition={Bounce}
                          />
                  </div>

                  {/* <div>
                      <Button
                        content="+ Compare"
                        className="lg:px-12 md:px-20 sm:px-12 sm:py-4 px-5 py-2 whitespace-nowrap text-black rounded-xl "
                        variant="outlined"/>
                  </div> */}

                </div>


            </div>

            <div className='border-t-2 mt-14  pt-8'>
            <div className='  grid grid-cols-12 grid-auto-flow:row max-w-[200px] text-gray-500 text-xs'>

                  <p className='col-span-4'>SKU</p>
                  <p className='col-span-2'>:</p>
                  <p className='col-span-6'>SSO1</p>

                  <p className='col-span-4'>Category</p>
                  <p className='col-span-2'>:</p>
                  <p className='col-span-6'>Sofas</p>

                  <p className='col-span-4'>Tags</p>
                  <p className='col-span-2'>:</p>
                  <p className='col-span-6'>Sofa,Chair,Home,Shop</p>

                  <p className='col-span-4'>SKU</p>
                  <p className='col-span-2'>:</p>
                  <div className='flex gap-3 items-center col-span-6'>
                      <FaFacebookF className='min-w-[10px] ' />
                      <FaLinkedin  className='min-w-[10px]' />
                      <FaTwitter  className='min-w-[10px]'/>
                  </div>

              </div>
            </div>

        </div>


  </div>
  )
}

export default SingleProductInformation