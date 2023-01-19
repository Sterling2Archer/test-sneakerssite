old code

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Buy from './routes/Buy';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/buy' element={<Buy />} />
      </Routes>
    </>
  );
}

export default App;
