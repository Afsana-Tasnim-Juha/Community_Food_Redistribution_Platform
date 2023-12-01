import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from './../Pages/Shared/NavBar/NavBar';
import ExtraFeatured1 from "../Pages/Home/ExtraFeatured1/ExtraFeatured1";



const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <ExtraFeatured1></ExtraFeatured1>
            <Footer></Footer>
        </div>
    );
};

export default Main;