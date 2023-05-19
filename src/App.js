import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Component/FooterComponents/Footer";
import Home from "./Component/HomeComponents/Home";
import Cart from "./Component/HomeComponents/Cart";
import Login from "./Component/HomeComponents/Login";
import Signup from "./Component/HomeComponents/Signup";
import Navbar from "./Component/NavbarComponents/Navbar";




function App() {

  return (
    <BrowserRouter>
      <div className="min-height d-flex flex-column">
        <header className="relative">
          {/* Navbar component */}
          <Navbar />
        </header>
        <main>
          <Routes>
            {/* this is home route a part of main content */}
            <Route path="/" element={<Home/>}/>
            {/* drawer normal user link */}
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}


export default App;
