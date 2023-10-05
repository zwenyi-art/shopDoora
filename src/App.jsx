import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BestDetatil from "./components/BestDetatil";
import Member from "./components/Member";
import NewRelease from "./components/NewRelease";
import TryNewFlavor from "./components/TryNewFlavor";
import Devices_Page from "./components/Devices_Page";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="max-w-sm h-full mx-auto container flex flex-col">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="flex flex-col w-full h-full gap-y-3">
        <BestDetatil></BestDetatil>
        <Member></Member>
        <NewRelease></NewRelease>
        <TryNewFlavor></TryNewFlavor>
        <Devices_Page></Devices_Page>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default App;
