import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";

import Nav from "../../pages/Shared/Navbar/Nav"
const Root = () => {
    return (
        <div >
            This is root 
            <div>
            <Nav></Nav>    
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;