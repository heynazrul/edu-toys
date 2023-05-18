import { Outlet } from "react-router-dom";

import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Header/Header";


const MainLayout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;