import React from "react";
import Hero from "./pages/Hero";
import Marque from "./pages/Marque";
import Footer from "./components/Foot&Nav/Footer";
import Person from "./pages/Person";

const App = () => {
  return (
    <div className=" scrollbar-none overflow-y-scroll h-[100vh] bg-black">
      <Marque />
      <Hero />
      <Person />
      <Footer />
    </div>
  );
};

export default App;
