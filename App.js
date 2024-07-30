import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Login from './Pages/Login';

import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen flex flex-col">
        <Content />
      
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
