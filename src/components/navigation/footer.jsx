import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Footer = () => {
    const handleReturnToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-200 text-slate-600 py-8">
          <div className="text-gray-400 text-sm/[14px] ml-[180px]">
            &copy; 2024 MyWebsite. All rights reserved.
          </div>

          <div className=' ml-[1340px] mb-[90px]'>
            <button onClick={handleReturnToTop} className=' py-[10px] px-[10px] rounded-full hover:bg-slate-500 transition'>
            <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
    
      </footer>
    );
    
        
};

export default Footer;
