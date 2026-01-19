import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import RealFakeGame from "./components/RealFakeGame";
import DeepFakeDetector from "./components/DeepFakeDetector";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <RealFakeGame />
      <DeepFakeDetector />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
