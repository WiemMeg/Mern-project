import React, { useState } from "react";
import axios from "axios";
function AddProduct() {
   const token = localStorage.getItem("token");
  const handleclick = () => {
    axios
      .post(
        "http://localhost:5000/product/add",
        {
          discipline: newdiscipline,
          price: newprice,
          Grouplevel: newlevel,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const [newprice, setprice] = useState("");
  const [newlevel, setGrouplevel] = useState("");
  const [newdiscipline, setdiscipline] = useState("");
  return (
    <div
      className="AddProduct"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#439696b9",
        height: "100vh",
        width: "100%",
      }}
    >
      <label>price:</label>
      <input onChange={(e) => setprice(e.target.value)} />
      <label>Grouplevel:</label>
      <select onChange={(e) => setGrouplevel(e.target.value)}>
        <option>White Belt</option>
        <option>Yellow Belt</option>
        <option>Green Blet</option>
        <option>Bleu Blet</option>
        <option>Orange Blet</option>
        <option>Red Belt</option>
        <option>Brown Belt</option>
        <option>black Belt</option>
      </select>

      <label>Discipline:</label>
      <select onChange={(e) => setdiscipline(e.target.value)}>
        <option>Yoseikan budo</option>
        <option>Taekwondo</option>
        <option>Jiu-jitsu</option>
        <option>Krav maga</option>
        <option>nunchaku</option>
        <option>Hapkido</option>
        <option>Karaté</option>
        <option>Aïkido</option>
        <option>Ninja</option>
        <option>Judo</option>
      </select>

      <button onClick={handleclick}>save</button>
    </div>
  );
}

export default AddProduct;
