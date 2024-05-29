import Navbar from "../components/navigation/topnav";
import Footer from "../components/navigation/footer";
import { Outlet } from "react-router-dom";


export default function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
        </>
    );
}