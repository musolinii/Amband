import { Link } from "react-router-dom";
import RFIDdropdown from "./RFIDdropdown";
import BigDatadropdown from "./BigDatadropdown";
import Servicesdropdown from "./Servicesdropdown";
import Logo from "../../../public/assets/amband.png";

const Navbar = () => {
    return (
      <nav className="bg-white p-4 w-full h-[100px] text-sm/[14px] shadow-md ">
        <div className="container mx-auto flex justify-between items-center">
          <a href="home" className="text-white text-2xl font-bold">
          <div className="ml-[180px] mt-[8px]">
            <Link to= "/home">
              <img src={Logo} alt="amband logo" className="w-[175px] h-[59px]"/>
            </Link>
          </div>
          </a>
          <div className="hidden md:flex space-x-4">

            <Link to="home" className="text-black hover:text-blue-300">Home</Link>
            <Link to="about-us" className="text-black hover:text-blue-300">About Us</Link>
            <Link to="services" className="text-black hover:text-blue-300"><Servicesdropdown/></Link>
            <Link to="RFID-solutions" className="text-black hover:text-blue-300"><RFIDdropdown /></Link>
            <Link to="communications-and-media" className="text-black hover:text-blue-300">Communications and Media</Link>
            <Link to="big-data" className="text-black hover:text-blue-300"><BigDatadropdown /></Link>
            <Link to="contact-us" className="text-black hover:text-blue-300">Contact Us</Link>
            
          </div>
          <div className="md:hidden">
            <button className="text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;