import React from "react";
import About from "./components/about";
import Header from "./components/header";
import Hero from "./components/hero";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
    </div>
  );
};

export default App;
