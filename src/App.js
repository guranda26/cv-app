import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPageComponent from "./modules/mainPage";
import IntroPageComponent from "./modules/introPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPageComponent />} />
      <Route path="/inner/*" element={<MainPageComponent />} />
    </Routes>
  );
};

export default App;
