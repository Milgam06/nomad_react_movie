import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/hello" element={<h1>hello</h1>} />
      </Routes>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
      <Routes>
        <Route path="/page/:pg" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
