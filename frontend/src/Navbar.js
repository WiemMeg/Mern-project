import React from "react";
import { Link } from "react-router-dom";
import css from "./Navbar.css";

function Navbar() {
    const token = localStorage.getItem("token");
 const handleclick=()=>{
  localStorage.removeItem("token");

 }
  return (
    <div className="nav__wrapper">
      <div className="container">
        <nav className="nav">
          <a href="#" className="nav__brand">
            Martial Arts School.
          </a>
          <ul className="nav__menu">
            <Link to={"/"}>HOME</Link>
            <Link to={"/register"}>REGISTER</Link>
            <Link to={"/login"}>LOGIN</Link>
            <Link to={"/EXPO"}>EXPO</Link>
            <Link to={"/product"}>PRODUCT</Link>
            <Link to={"/AddProduct"}>ADDPRODUCT</Link>
            <Link to={"/Profil"}>PROFIL</Link>
          { token ? <button  onClick={handleclick} >logout</button>:null}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
