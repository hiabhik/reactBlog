import React from 'react';
import { Routes, Route } from "react-router-dom";
import ArticlePage from '../pages/ArticlePage';
import Bollywood from '../pages/Bollywood';
import Fitness from '../pages/Fitness';
import Food from '../pages/Food';
import Hollywood from '../pages/Hollywood';
import Home from '../pages/Home';
import Technology from '../pages/Technology';

const RouteComp = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Bollywood" element={<Bollywood />} />
          <Route path="Technology" element={<Technology />} />
          <Route path="Hollywood" element={<Hollywood />} />
          <Route path="Fitness" element={<Fitness />} />
          <Route path="Food" element={<Food />} />
          <Route path="ArticlePage" element={<ArticlePage />} />
        </Routes>
    );
}

export default RouteComp;