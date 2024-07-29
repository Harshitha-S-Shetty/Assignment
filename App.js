import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Register from './Pages/Register';
import Content from './components/Content';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen flex flex-col">
        <Content />
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
