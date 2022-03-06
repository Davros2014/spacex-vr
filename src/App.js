import React from "react";
import About from "./components/about";
import Contacts from "./components/contacts";
import Header from "./components/header";
import Hero from "./components/hero";
import SignUpPage from "./components/signUpPage";

const App = () => {
  return (
    <div className="appContainer">
      <Header />
      <Hero />
      <About />
      <SignUpPage />
      <Contacts />
    </div>
  );
};

export default App;
