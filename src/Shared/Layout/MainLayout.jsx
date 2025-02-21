import Header from "./Header/Container/Header"
import Footer from "./Footer/Container/Footer"
import { Outlet } from "react-router-dom"
import ScrollToTop from "../ScrollToTop"


const MainLayout = () => {
  return (
    <div>
        <Header />
        <ScrollToTop>
            <Outlet />
        </ScrollToTop>
        <Footer />
    </div>
  )
}

export default MainLayout