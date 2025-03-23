import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import HomeScreen from './components/HomeScreen';
//import UploadMedia from './components/UploadMedia';
//import SearchMedia from './components/SearchMedia';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/upload" element={<UploadMedia />} />
        <Route path="/search" element={<SearchMedia />} />
      </Routes>
    </Router>
  );
};

export default App;
