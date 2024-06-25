import { faEnvelope, faGlobe, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterSection = () => {
  return (
    <footer className="bg-slate-100 py-8 text-slate-600 h-[400px]">
      <div className="container px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm/[13px] leading-relaxed ">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p >
            We are an innovative and dynamic information technology company that prides itself by offering bespoke and 
            <strong>“out of the box”</strong> IT related solutions to our clients. With Amband’s company philosophy of providing a large range of services and solutions at an affordable price, we should be your one and only port of call.
            <br />
            Amband has a specialist team of consultants who are skilled and qualified in their various fields, technologies and methodologies and who discharge their duties effectively, efficiently and flexibly to ensure an organization’s goals are met and objectives satisfied.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:underline">Absolute Software</a></li>
              <li><a href="#" className="hover:underline">Buiseness Process Reengineering</a></li>
              <li><a href="#" className="hover:underline">Data Analytics</a></li>
              <li><a href="#" className="hover:underline">ICT Consulting Services</a></li>
              <li><a href="#" className="hover:underline">IS Audit and Governance</a></li>
              <li><a href="#" className="hover:underline">Machine Learning</a></li>
              <li><a href="#" className="hover:underline">RFID/Bar-Code Asset Management</a></li>
              <li><a href="#" className="hover:underline">RFID Supply Chain Management</a></li>
              <li><a href="#" className="hover:underline">Website and Software Management</a></li>
              <li><a href="#" className="hover:underline">Stoptrack</a></li>
            </ul>
          </div>
          <div className="grid">
            <h3 className="text-lg font-bold mb-4">Contact </h3>
            <div>
              <FontAwesomeIcon icon={faPhone}/> +254 720 970 959 
            </div>

            <div>
              <FontAwesomeIcon icon={faEnvelope}/> info@amband.co.ke
            </div>

            <div>
              <FontAwesomeIcon icon={faLocationDot}/> Pili Trade Center, <br /> Opp Hilton Garde Inn, Mombasa Road <br /> P.O. Box 2882 - 00200, NAIROBI,Kenya
            </div>

            <div>
              <FontAwesomeIcon icon={faGlobe}/> www.amband.co.ke
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
