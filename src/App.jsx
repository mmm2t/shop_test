import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import ProductAll from "./pages/ProductAll";
import LogIn from "./pages/LogIn";
import ProductDetail from "./pages/ProductDetail";
import IntroPage from "./pages/IntroPage";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();

  // Don't show navbar on intro page
  const showNavbar = location.pathname !== '/';

  return (
    <div>
      {showNavbar && (
        <Navbar
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      )}
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/products" element={<ProductAll />} />
        <Route
          path="/login"
          element={<LogIn setAuthenticated={setAuthenticated} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticated={authenticated} />}
        />
      </Routes>
    </div>
  );
}

export default App;
