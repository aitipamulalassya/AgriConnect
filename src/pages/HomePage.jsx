import React from 'react';
import Hero from '../components/Hero';
import ProductCategories from '../components/ProductCategories';

import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProductCategories />
     
      <Testimonials />
    </>
  );
};

export default HomePage;