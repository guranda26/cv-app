import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPageComponent from "./services/mainPage";
import IntroPageComponent from "./services/introPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPageComponent />} />
      <Route path="/inner/*" element={<MainPageComponent />} />
    </Routes>
  );
};

export default App;
