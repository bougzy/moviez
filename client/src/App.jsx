import React from 'react';
import AppNavbar from './AppNavbar'; // Assuming NavScrollExample is in the same directory
import { Routes, Route } from 'react-router-dom';
// import Sidebar from './Sidebar';
import Home from './Home';
import Footer from './Footer';
import Dashboard from './Dashboard';
import UserRegistrationComponent from './Register';
import UserLoginComponent from './Login';
import TidioChatWidget from './TidioChatWidget';


function App() {
  return (
    <div>
      <AppNavbar />
      {/* <Sidebar /> */}
      {/* Add other components or content here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<UserLoginComponent />} />
        <Route path="/register" element={<UserRegistrationComponent />} />
      </Routes>
      <TidioChatWidget />
      <Footer />
    </div>
  );
}

export default App;
