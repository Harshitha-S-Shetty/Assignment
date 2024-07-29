import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3 text-lg font-bold text-blue-800">
          <img
            src='https://media.licdn.com/dms/image/D560BAQFtI8XQ_-t63Q/company-logo_200_200/0/1711176610734/serproconsulting_logo?e=2147483647&v=beta&t=8YZysHswd8H3JYD6jOiqRE8hHxfvOTEWaKsQiq2o25c'
            alt='SerPro Consulting'
            className='h-10 ml-10'
          />
          <span className="ml-1">SerPro<br/>Consulting</span>
        </div>
        <nav className='flex grow ml-20'>
          <ul className="flex space-x-7 items-center">
            <li><a href="#home" className="text-gray-700">Home</a></li>
            <li><a href="#product" className="text-gray-700">Product</a></li>
            <li><a href="#pricing" className="text-gray-700">Pricing</a></li>
            <li><a href="#about" className="text-gray-700">About Us</a></li>
          </ul>
        </nav>
        <div>
          <Link to="/register">
            <button className="bg-gray-100 text-blue-800 border rounded-full px-5 py-2">Login</button>
          </Link>
          <button className="ml-6 mr-20 bg-blue-600 text-white rounded-full px-5 py-2">Request Demo</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
