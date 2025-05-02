import React from 'react';
import Navbar from '../component/Navbar';

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">ClipNote Dashboard</h1>
        </div>
        <nav className="px-6 py-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="block text-gray-700 hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-blue-500">Notes</a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-blue-500">Bookmarks</a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-blue-500">Settings</a>
            </li>
            <li>
              <a href="/login" className="block text-red-600 hover:underline">Logout</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Welcome Back 👋</h2>
          <div className="space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">New Note</button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Refresh</button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Total Notes</h3>
            <p className="text-2xl text-blue-600 font-bold">128</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Bookmarked</h3>
            <p className="text-2xl text-blue-600 font-bold">32</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Last Login</h3>
            <p className="text-xl text-gray-500">Apr 29, 2025</p>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default Dashboard;
