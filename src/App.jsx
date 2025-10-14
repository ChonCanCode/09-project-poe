import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Currency from "../pages/Currency";
import "../style/style.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currency" element={<Currency />} />
      </Routes>
    </>
  );
}

export default App;
