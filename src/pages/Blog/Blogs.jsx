import React from 'react';
import blogData from './blogData';

function Blogs() {
  return (
    <div className="flex flex-wrap justify-center bg-divColor w-full min-h-screen p-4">
      {blogData.map((blog, index) => (
        <div key={index} className="p-4 w-full sm:w-80 md:w-96">
          <div className="relative flex flex-col rounded-lg bg-white dark:bg-gray-800 p-4 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-gray-800 dark:text-white text-lg font-medium truncate">{blog.title}</h2>
            </div>
            <div className="flex flex-col flex-grow">
              <p className="leading-relaxed text-sm text-gray-700 dark:text-gray-300 mb-4">
                {blog.description}
              </p>
              <a href={blog.link} target='_blank' rel="noopener noreferrer" className="text-indigo-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
