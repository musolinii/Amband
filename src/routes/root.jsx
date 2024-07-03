import Navbar from "../components/navigation/topnav";
import Footer from "../components/navigation/footer";
import { Outlet } from "react-router-dom";
import FooterSection from "../components/sections/quick-links/FooterSection";


export default function Root() {
    return (
        <>
            <Navbar />
            <div className="flex items-center flex-col justify-center">
                <Outlet /> 
                <FooterSection />
                <Footer/>
            </div>
            
        </>
    );
}