import { Link } from 'react-router-dom'
import Logo from '../Header_assests/Header_Logo.png'
import HeaderIcons from './HeaderIcons'
import HeaderNavigation from './HeaderNavigation'
import Hamburger from './Header_Hamburger'

const Header = () => {
  return (
    <div className="flex justify-center items-center py-7 md:px-12 sm:pl-8 sm:pr-11 px-6 sticky top-0 z-50 bg-white" id="Header">
        <div className="flex justify-between w-full  sm:gap-36 gap-1 items-center">

            <div id="Logo Section" className='flex items-center'>
                <div className='md:min-w-[50px] md:min-h-[32px] min-w[27px] min-[25px]'>
                        <img src={Logo} className='md:min-w-[50px] md:min-h-[32px] min-w-[25px] min-h-[20px]'  />
                </div>
                <div className=''>
                        <h1 className='md:text-[34px] text-[20px] font-bold font-montserrat '>
                           <Link to='/'>Furniro</Link> 
                        </h1>
                </div>
            </div>

            <div className='flex max-w-[800px] w-full md:justify-between justify-end md:gap-0 gap-10 items-center'>
                <HeaderNavigation/>
                <HeaderIcons />
        
                <div id="Hamburger-section" className='md:hidden flex items-center'>
                    <Hamburger />
                </div>
            </div>
            


        </div>
    </div>
  )
}

export default Header
