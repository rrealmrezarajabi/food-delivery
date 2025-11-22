import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { use, useState } from "react";
const App = () => {
  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <div>
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
