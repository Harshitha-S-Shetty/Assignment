import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white p-4 w-full min-h-[80px] flex items-center">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-3 text-lg font-bold text-blue-800">
          <img
            src='https://media.licdn.com/dms/image/D560BAQFtI8XQ_-t63Q/company-logo_200_200/0/1711176610734/serproconsulting_logo?e=2147483647&v=beta&t=8YZysHswd8H3JYD6jOiqRE8hHxfvOTEWaKsQiq2o25c'
            alt='SerPro Consulting'
            className='h-10'
          />
          <span className="ml-1">SerPro<br />Consulting</span>
        </div>
        <div className="flex flex-grow items-center justify-between ml-8">
          <nav>
            <ul className="flex space-x-5 items-center">
              <li><Link to="/home" className="text-gray-700">Home</Link></li>
              <li><Link to="/product" className="text-gray-700">Product</Link></li>
              <li><Link to="/pricing" className="text-gray-700">Pricing</Link></li>
              <li><Link to="/aboutus" className="text-gray-700">About Us</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <button className="bg-gray-100 text-blue-800 border rounded-full px-4 py-1">Login</button>
            </Link>
            <button className="bg-blue-600 text-white rounded-full px-4 py-1">Request Demo</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
