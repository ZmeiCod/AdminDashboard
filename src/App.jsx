import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<Auth />} />
        <Route path="*" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
