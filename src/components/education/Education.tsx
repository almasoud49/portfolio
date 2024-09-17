"use client"
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Education = () => {
  return (
    <section className="py-10 bg-white dark:bg-black">
      <h1 className="text-center text-4xl font-bold text-black dark:text-white mb-8">Education</h1>
      <div className="flex flex-col sm:flex-row sm:gap-10 items-center justify-center">
        
        
        <div className="sm:w-1/4 mb-10 sm:mb-0 flex justify-center">
          <div className="bg-gray-100 dark:bg-gray-800 p-10 rounded-full shadow-xl transition-transform transform hover:scale-105">
            <FontAwesomeIcon className="text-gray-700 dark:text-gray-300 fa-7x" icon={faGraduationCap} />
          </div>
        </div>
        
       
        <div className="sm:w-3/4">
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">MSS in Economics</h3>
            <h5 className="text-lg text-gray-700 dark:text-gray-400 mb-3">Jagannath University - Bangladesh</h5>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
