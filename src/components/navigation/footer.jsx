import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    const handleReturnToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-200 text-slate-600 py-8 grid">
          <div className="text-gray-400 text-sm/[14px] ml-[180px]">
            &copy; 2024 MyWebsite. All rights reserved.
          </div>

          <div className='place-self-end bg-black rounded-full'>
            <button onClick={handleReturnToTop}></button>
            <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
          </div>
    
      </footer>
    );
    
        
};

export default Footer;
