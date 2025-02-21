import { NavLink } from "react-router-dom"


const HeaderNavigation = () => {
  return (
    <div className="max-w-[230px] w-full md:flex justify-between text-[16px] hidden gap-6 ">
      <NavLink to= "/">Home</NavLink>
      <NavLink to= "/shop">Shop</NavLink>
      {/* <NavLink to= "/blog">About</NavLink>
      <NavLink to= "/contact">Contact</NavLink> */}
      <NavLink to= "/cart">Cart</NavLink>
    </div>
  )
}

export default HeaderNavigation