import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Location from '../pages/Location';
import MasterPlan from '../pages/MasterPlan';
import FloorPlan from '../pages/FloorPlan';
import Price from '../pages/Price';
import Amenities from '../pages/Amenities';
import Specification from '../pages/Specification';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<Location />} />
      <Route path="/master-plan" element={<MasterPlan />} />
      <Route path="/floor-plan" element={<FloorPlan />} />
      <Route path="/price" element={<Price />} />
      <Route path="/amenities" element={<Amenities />} />
      <Route path="/specification" element={<Specification />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
