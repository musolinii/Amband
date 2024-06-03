import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BigDatadropdown= () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div
        className="rela-block"
        onMouseOver={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onKeyDown={(e) => e.key === 'Enter' && setIsVisible(!isVisible)}>
    
          <span className="text-black hover:text-blue-300">Big Data</span>
        {isVisible && (
          <div className="absolute pt-2 transition transform duration-300 ease-out translate-y-0 scale-100 opacity-100">
            <div className="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl">
              <div className="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"></div>
              <div className="relative">
                <Link to ="data-analytics" className="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
                  Data Analytics
                </Link>
                <Link to ="visualization" className="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
                  Visualization
                </Link>
                <Link to ="machine-learning" className="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
                  Machine Learning
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BigDatadropdown;
