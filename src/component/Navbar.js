import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">MyApp</div>
        <div className="space-x-4">
          <a href="/Dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition">
            Home
          </a>
          <a href="/todos" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition">
            To-Do List
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
