import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Footer = () => {
    const handleReturnToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-200 text-slate-600 py-8 grid w-full">
          <div className="text-gray-400 text-[14px] ">
            &copy; 2024 MyWebsite. All rights reserved.
          </div>

          <div className='place-self-end'>
            <button onClick={handleReturnToTop} className=' py-[10px] px-[10px] rounded-full hover:bg-slate-500 transition'>
            <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
    
      </footer>
    );
    
        
};

export default Footer;
