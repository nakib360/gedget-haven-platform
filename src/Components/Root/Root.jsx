import { Outlet, useLocation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {

    const location = useLocation();
    
    return (
        <div className={`${location.pathname === "/" || location.pathname === "/Laptops" || location.pathname === "/Accessories" || location.pathname === "/Smart-Watches" || location.pathname === "/MacBook" ||  location.pathname === "/Iphone" || location.pathname === "/Phones" ? "p-4 md:p-8" : "p-0"} bg-slate-300`}>
            <Header/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;