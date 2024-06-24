import Navbar from "../components/navigation/topnav";
import Footer from "../components/navigation/footer";
import { Outlet } from "react-router-dom";
import FooterSection from "../components/sections/quick-links/FooterSection";
import Home from "../components/pages/home-page/Home";


export default function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <FooterSection />
            <Footer/>
        </>
    );
}