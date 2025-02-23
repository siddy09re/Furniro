import HomeImage from '../ShopAssests/HomeDecor.png'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Dots from '../ShopAssests/Dots.svg'
import Convert from '../ShopAssests/Conversion.svg'

import ShopCaraousal2 from './ShopCaraousel2';
import '../Container/Shop.css'
import { useSelector,useDispatch } from 'react-redux';
import { setshowCards,setSortOption,changeviewStatus } from './ShopSlice';
import { BiBarChart } from "react-icons/bi";
import ShopTrophy from './ShopTrophy';

const Shop = () => {

  const dispatch = useDispatch();
  const value = useSelector((state) => state.Shop.showCards)
  const range = useSelector((state) => state.Shop.range);
  const ImageStatus = useSelector((state) => state.Shop.viewStatus);
const { startIndex, endIndex } = range;
  

  const handleShowCards = (event) => { 
      dispatch(setshowCards(event.target.value))
  }

  const handleSortChange = (e) => {
    dispatch(setSortOption(e.target.value)); 
    console.log(e.target.value, "sortchange ka function")// Dispatch the selected sort option to Redux
  };

  const handleimagetoggle = () => {
      dispatch(changeviewStatus())
  }
  console.log(value)
  return (
    <div className='font-poppins'>
      
    <img src={HomeImage} className='w-full max-h-[316px] ' />

    <div className='bg-peach flex lg:justify-between lg:items-center md:px-24 sm:px-12 px-4 py-6 
    lg:flex-row flex-col justify-center sm:text-[16px] text-[12px]' id='filtering part'>

            <div className='flex items-center justify-between max-w-md w-full'>
                <div className='gap-2 flex items-center'>
                    <HiAdjustmentsHorizontal />
                    <p>Filter</p>
                </div>

                <img src={Dots} />

                <button onClick={handleimagetoggle}>
                  {
                    ImageStatus ? <img src={Convert} /> : <BiBarChart className='size-6'/>
                  }
                 
                </button>

                <div className='py-2 pl-8 border-black border-l-2'>
                      <p>Showing {startIndex}-{endIndex} of 15 results</p>
                </div>

            </div>

            <div className='flex gap-4 items-center'> 

              <div className='flex gap-4'>
                  <p>Show </p>
                  <input 
                  type='number'
                  placeholder='5'
                  value={value}
                  onChange={handleShowCards}
                  className='max-w-[40px]'/>
              </div>

              <div>
              <div className="relative flex items-center gap-3">
                  <label className="block text-sm font-medium text-gray-700">Sort by</label>
                        <select id="dropdown" className="mt-2 block max-w-[190px] px-2 py-1 border border-gray-300 
                         rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" 
                         onChange={handleSortChange}>
                            <option value="default" >Default</option>
                            <option value="price">Price</option>
                            
                        </select>
              </div>
              </div>
              
            </div>

    </div>


    {/* <ShopCaraousal/> */}
    <ShopCaraousal2/>
    <ShopTrophy/>


    </div>
  )
}

export default Shop