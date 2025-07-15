import image from '../HomeAssests/BannerImage.svg'
import Button from '../../../Shared/Components/Button'
import JsonData from '../../../Shared/Components/JsonData'
import HomeOurProduct from '../../../Shared/Container/HomeOurProduct';
import HomeBentoGrid from './HomeBentoGrid';
import HomeCaraousel from './HomeCaraousel';
import "./Home.css"

const Home = () => {
  const data = JsonData();
  console.log(data)
  console.log(data.length);
  return (
    <div>
      <div className='relative font-montserrat w-full ' id="whole image and card section">
          <img src={image} loading='lazy' alt="Banner Image" className='w-full h-auto max-h-[716px] object-cover '/>
          <div className='xl:absolute bg-custom-pink z-10 bottom-28 right-20 sm:pt-[62px] pt-12 sm:pl-10 pl-6 sm:pb-9 pb-6
           sm:pr-16 pr-10 xl:w-1/2.5 h-1/1.5 
          rounded-2xl flex xl:flex-col sm:flex-row flex-col justify-between items-center xl:items-start ' id="card section">
    
            
            <div className='sm:text-left text-center max-w-lg '>
            <span className='md:text-[18px] text-[14px]'> New Arrival </span>
            <p className='mt-1 md:text-[52px] sm:text-[30px] text-[25px] text-custom-brown'>Discover Our</p>
            <p className='md:text-[52px] sm:text-[30px] text-[25px] text-custom-brown'>New Collection</p>

            <p className='md:text-[18px] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
              luctus nec ullamcorper mattis.</p>
              </div>

                <div className='sm:max-w-fit w-full' >
                  <Button 
                      variant="customBrown" 
                      size="medium" 
                      className="xl:mt-3    sm:text-[16px] text-[11px] sm:mt-0 mt-5 " 
                      content="Buy Now" 
                    />
                </div>


          </div>
      </div>



      <div className='md:mt-14 mt-8 md:mx-32 mx-6 flex flex-col justify-center font-poppins' id="Browse the range">

          <div className='text-center'>
              <p className='font-bold md:text-[32px] text-[20px]'>Browse the Range</p>
              <p className='md:text-[20px] text-[12px]  text-gray-400'>Collect now the exculsively premium sectios , which u could not find anywhere else</p>
          </div>

          <div className='md:mt-12 mt-4'> 
                <div className='grid grid-cols-3  gap-5'>
                      {
                        data.slice(0, 3).map((item) => {
                          console.log(item);  
                          return (
                            <div key={item.id} >
                              <img src={item.image} className='w-full rounded-lg ' />
                              <p className='text-center mt-8 md:text-[16px] text-[12px]'> {item.name} </p>
                            </div>
                          );
                        })
                      }
                </div>
          </div>
      </div>


      <div className='font-poppins'>                

      <HomeOurProduct StartingItems={"8"} Title={"Our Product"}/>
      <HomeCaraousel/>
      <HomeBentoGrid/>

      </div>
    </div>
  )
}

export default Home