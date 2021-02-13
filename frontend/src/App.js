import React from "react";
import HomePage from "./screens/HomePage";
import FeatureDisplay from "./screens/FeatureDisplay";
import CuratedEvent from "./screens/CuratedEvent";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
