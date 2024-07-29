import React from 'react';

function Content() {
  return (
    <main className="flex-grow bg-blue-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center py-2 px-4 rounded mb-6">
          <span className="text-white bg-blue-700 font-semibold px-3 rounded-full ml-3">#1</span>
          <span className="ml-3 text-gray-400 font-semibold">School Billing ERP</span>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-black ml-7">
              Streamline your<br /> school's <span className="text-blue-600">financial<br /> management</span>
            </h1>
            <p className="mt-8 ml-6 text-gray-700">
              Efficient billing, seamless payments, and<br /> comprehensive reporting for modern educational<br /> institutions.
            </p>
            <div className="mt-7 flex items-center">
              <input
                type="email"
                placeholder="Enter your email to get started"
                className="p-5 pr-32 rounded-l-full border border-gray-300 w-full md:w-2/3"
              />
              <button className="bg-blue-700 text-white p-3 border-none rounded-r-full w-32 ml-[-4px]">
                Request Demo
              </button>
            </div>
            <p className="mt-6 text-gray-600 ml-4">Trusted by 0000+ schools</p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end">
            <img
              src="https://www.spinxdigital.com/app/uploads/2022/09/7-Smart-Ways-to-Get-More-Leads-for-Your-Web.jpg"
              alt="School Billing Dashboard"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
