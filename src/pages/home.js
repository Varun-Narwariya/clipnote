import React from 'react';

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">ClipNote</div>
          <div className="space-x-4 hidden md:flex">
            <a href="#how" className="hover:text-blue-600">How It Works</a>
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="/login" className="hover:text-blue-600">Login</a>
            <a href="/todos" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Open App</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Turn Reels & Shorts Into Structured Notes — Instantly
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            ClipNote helps you capture educational content from short videos and store them neatly, so you can revise, organize, and retain knowledge — effortlessly.
          </p>
          <a href="/Login" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            Get Started
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Paste Link</h3>
              <p>Just drop the link to any reel, short, or educational clip.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Extract Notes</h3>
              <p>We process the content and auto-generate structured, editable notes.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Save & Organize</h3>
              <p>Your notes are saved in a clean folder system — ready for revision anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Why ClipNote?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Distraction-Free</h3>
              <p>Focus on learning — we clean up and organize content for you.</p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Access Anywhere</h3>
              <p>Your notes sync across your devices — mobile, desktop, or tablet.</p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Organized Storage</h3>
              <p>All your notes live in one place, neatly organized by topic or source.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} ClipNote. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
