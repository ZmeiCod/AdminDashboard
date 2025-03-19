import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { useEffect } from "react";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { startTokenCheck } from "./api/userApi";

function TokenCheck() {
  const location = useLocation();

  useEffect(() => {
    const checkInterval = startTokenCheck(location.pathname);
    return () => clearInterval(checkInterval);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
    <TokenCheck />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<Auth />} />
        <Route path="*" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
