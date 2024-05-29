import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="home" className="text-white text-2xl font-bold">
          <div className="text-black text-lg font-bold">
            MyWebsite
          </div>
          </a>
          <div className="hidden md:flex space-x-4">
            <ul className="list-none">
              <li>
                <Link to="home" className="text-black hover:text-blue-300">Home</Link>
              </li>
              <li>
                <Link to="about-us" className="text-black hover:text-blue-300">About</Link>
              </li>
              <li>
                <Link to="services" className="text-black hover:text-blue-300">Services</Link>
              </li>
              <li>
                <Link to="communications-and-media" className="text-black hover:text-blue-300">Communications and Media</Link>
              </li>
              <li>
                <Link to="contact-us" className="text-black hover:text-blue-300">Contact</Link>
              </li>
              <li>
                <Link to="RFID-solutions" className="text-black hover:text-blue-300">RFID Solutions</Link>
              </li>
              <li>
                <Link to="big-data" className="text-black hover:text-blue-300">Big Data</Link>
              </li>
            </ul>
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