// import './App.css';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import React from 'react';
// import Home from './pages/home';
// import Login from './pages/login';
// import Register from './pages/reg';
// import TodoApp from './pages/todo';

// import { useState } from 'react';
// import { useEffect } from 'react';  


// function App() {
//   return (
//      <>
//       <Router>
//         <Routes>
          
//           <Route path="/register" element={<Register />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login/>} />
//           <Route path="/todos" element={<TodoApp />} />
//         </Routes>
//       </Router> 

//      </>
//   );
// }



// export default App;
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React from 'react';
// import Home from './pages/home';
// import Login from './pages/login';
// import Register from './pages/reg';
// import TodoApp from './pages/todo';
// import Dashboard from './pages/Dashboard';
// import PrivateRoute from './component/private'; // Make sure this is the correct path

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Home />} />

//         {/* Protected Routes */}
//         <Route element={<PrivateRoute />}>
//           <Route path="/todos" element={<TodoApp />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/reg';
import TodoApp from './pages/todo';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './component/private';
import { AuthProvider } from './component/authcontext'; // Adjust path

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/todos" element={<TodoApp />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
