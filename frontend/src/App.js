import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Expo from "./Expo";
import Login from "./login";
import Navbar from "./Navbar";
import AddProduct from "./AddProduct";
import Product from "./ProductLists";
import Profil from "./Profil";
import axios from "axios";
import { useEffect } from "react";
function App() {
  
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="HOME">
              <h1>YOUR LODO</h1>
              <h2>Clic to discover & subscribe</h2>
              <br></br>
              <h3>Yoseikan budo</h3>
              <h3>Taekwondo</h3>
              <h3>Jiu-jitsu</h3>
              <h3>Krav maga</h3>
              <h3>nunchaku</h3>
              <h3>Hapkido</h3>
              <h3>Karaté</h3>
              <h3>Aïkido</h3>
              <h3>Ninja</h3>
              <h3>Judo</h3>
            </div>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/expo" element={<Expo />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </>
  );
}
export default App;
