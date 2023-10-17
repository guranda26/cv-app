import React from "react";
import Panel from "../components/Panel/index";
import AllComponents from "../pages/Inner/allComponent";
import { Routes, Route } from "react-router-dom";

const MainPageComponent = () => {
  return (
    <section className="layout-section">
      <Panel></Panel>
      <AllComponents></AllComponents>
      <Routes>
        <Route path="/inner/*" element={<AllComponents />} />
      </Routes>
    </section>
  );
};

export default MainPageComponent;
