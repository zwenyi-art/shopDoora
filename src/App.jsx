import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BestDetatil from "./components/BestDetatil";
import Member from "./components/Member";
import NewRelease from "./components/NewRelease";
import TryNewFlavor from "./components/TryNewFlavor";
import Devices_Page from "./components/Devices_Page";

const App = () => {
  return (
    <div className="max-w-sm h-full mx-auto container ">
      <Navbar></Navbar>
      <Hero></Hero>
      <BestDetatil></BestDetatil>
      <Member></Member>
      <NewRelease></NewRelease>
      <TryNewFlavor></TryNewFlavor>
      <Devices_Page></Devices_Page>
    </div>
  );
};

export default App;
