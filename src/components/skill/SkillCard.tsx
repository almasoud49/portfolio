"use client";
import React from 'react';

const SkillCard: React.FC = () => {
  return (
    <section className="py-10 bg-white dark:bg-black">
      <h1 className="text-center text-4xl font-bold text-black dark:text-white mb-8">My Skills</h1>
      <div className="flex flex-col sm:flex-row sm:gap-10 items-center justify-center">
        
        {/* Expertise Section */}
        <div className="sm:w-full mb-10 sm:mb-0 flex justify-center">
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">Expertise</h3>
            <p className="text-base text-gray-700 dark:text-gray-400">
              HTML, CSS, JavaScript, React JS, Next JS, Tailwind, Bootstrap
            </p>
          </div>
        </div>
        
        {/* Comfortable Section */}
        <div className="sm:w-full mb-10 sm:mb-0 flex justify-center">
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">Comfortable</h3>
            <p className="text-base text-gray-700 dark:text-gray-400">
              REST API, MongoDB, Mongoose, JWT, Axios
            </p>
          </div>
        </div>

        {/* Familiar Section */}
        <div className="sm:w-full mb-10 sm:mb-0 flex justify-center">
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">Familiar</h3>
            <p className="text-base text-gray-700 dark:text-gray-400">
              Node JS, Express JS, Redux, Context API, TypeScript
            </p>
          </div>
        </div>

        {/* Tools Section */}
        <div className="sm:w-full flex justify-center">
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">Tools</h3>
            <p className="text-base text-gray-700 dark:text-gray-400">
              VS Code, Git, GitHub, Figma, Vercel, Netlify, Vite, Redux Dev Tool, Firebase, Dev Tools
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillCard;
