import React from 'react';

const Footer = () => {
    const handleReturnToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="text-gray-400">
            &copy; 2024 MyWebsite. All rights reserved.
          </div>

          <div>
            <button onClick={handleReturnToTop}>Return to Top</button>
          </div>
    
      </footer>
    );
    
        
};

export default Footer;
