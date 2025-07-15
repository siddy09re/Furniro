import trophy from '../ShopAssests/Trophy.svg'
import Check from '../ShopAssests/Check.svg'
import Shipping from '../ShopAssests/shipping.svg'
import customerSupport from '../ShopAssests/customer-support.svg'

const ShopTrophy = () => {
  return (
    <div className="sm:px-12 px-6 sm:py-24 py-12 flex justify-center items-center bg-peach md:mt-20 mt-5">
        <div className='grid lg:grid-cols-4 grid-cols-2 sm:gap-8 gap-3 '>
            <div className='flex items-center gap-4 '>
                    <img src={trophy}  className="w-6 sm:w-8"/>
                    <div>
                            <h1 className='font-bold sm:text-xl text-[10px] whitespace-nowrap'>High Quality</h1>
                            <p className='sm:text-[12px] text-[8px] text-gray-400'>crafted from top materials</p>
                    </div>
            </div>

             {/* Warranty Protection */}
    <div className='flex items-center gap-4'>
        <img src={Check} className="w-6 sm:w-8" /> {/* Responsive Image */}
        <div>
            <h1 className='font-bold sm:text-xl text-[10px] whitespace-nowrap '>Warranty Protection</h1>
            <p className='sm:text-[12px] text-[8px] text-gray-400'>Over 2 years</p>
        </div>
    </div>

    {/* Free Shipping */}
    <div className='flex items-center gap-4'>
        <img src={Shipping} className="w-6 sm:w-8" />
        <div>
            <h1 className='font-bold sm:text-xl text-[10px] whitespace-nowrap'>Free Shipping</h1>
            <p className='sm:text-[12px] text-[8px] text-gray-400'>Order over 150 $</p>
        </div>
    </div>

    {/* 24/7 Support */}
    <div className='flex items-center gap-4'>
        <img src={customerSupport} className="w-6 sm:w-8" />
        <div>
            <h1 className='font-bold sm:text-xl text-[10px] whitespace-nowrap'>24 / 7 Support</h1>
            <p className='sm:text-[12px] text-[8px] text-gray-400'>Dedicated support</p>
        </div>
    </div>

        </div>
    </div>
  )
}

export default ShopTrophy