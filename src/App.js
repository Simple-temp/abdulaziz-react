import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Component/FooterComponents/Footer";
import Home from "./Component/HomeComponents/Home";
import Cart from "./Component/HomeComponents/Cart";
import Login from "./Component/HomeComponents/Login";
import Signup from "./Component/HomeComponents/Signup";
import Navbar from "./Component/NavbarComponents/Navbar";
import AdminAboutScreen from "./Component/AdminComponents/AdminAboutScreen";
import AdminAccount from "./Component/AdminComponents/AdminAccount";
import AdminBLog from "./Component/AdminComponents/AdminBLog";
import AdminDashBoard from "./Component/AdminComponents/AdminDashBoard";
import AdminAllOrders from "./Component/AdminComponents/AdminAllOrders";
import AdminMyOrder from "./Component/AdminComponents/AdminMyOrder";
import AdminServices from "./Component/AdminComponents/AdminServices";
import AdminPortfolio from "./Component/AdminComponents/AdminPortfolio";
import AdminBlogById from "./Component/AdminComponents/AdminBlogById";
import AdminServicesById from "./Component/AdminComponents/AdminServicesById";
import AdminPortfolioById from "./Component/AdminComponents/AdminPortfolioById";
import Shipping from "./Component/EcommerceComponents/Shipping";
import Payment from "./Component/EcommerceComponents/Payment";
import PlaceOrder from "./Component/EcommerceComponents/PlaceOrder";
import OrderDetails from "./Component/EcommerceComponents/OrderDetails";




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
            <Route path="/" element={<Home />} />
            {/* drawer normal user link */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Admin user routes */}
            <Route path="/admin/aboutme" element={<AdminAboutScreen />} />
            <Route path="/admin/account" element={<AdminAccount />} />
            <Route path="/admin/blog" element={<AdminBLog />} />
            <Route path="/admin/blog/:id" element={<AdminBlogById />} />
            <Route path="/admin/dashboard" element={<AdminDashBoard />} />
            <Route path="/admin/myorder" element={<AdminMyOrder />} />
            <Route path="/admin/orders" element={<AdminAllOrders />} />
            <Route path="/admin/services" element={<AdminServices />} />
            <Route path="/admin/services/:id" element={<AdminServicesById />} />
            <Route path="/admin/portfolio" element={<AdminPortfolio />} />
            <Route path="/admin/portfolio/:id" element={<AdminPortfolioById />} />
            {/* E-commerce routes */}
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/placeOrder" element={<PlaceOrder />} />
            <Route path="/orderDetails" element={<OrderDetails />} />
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
