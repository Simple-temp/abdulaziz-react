import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Cart from "./Component/Home/Cart";
import Login from "./Component/Home/Login";
import Signup from "./Component/Home/Signup";




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
            {/* this is home route a part of main content and the drawer normal user link */}
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
