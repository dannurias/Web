import React from "react";
import Header from "../src/components/Header";
import HeroSection from "../src/components/HeroSection";
import ProductList from "../src/components/ProductList";
import ContactSection from "../src/components/ContactSection";
import Footer from "../src/components/Footer";

function App () {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductList />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
