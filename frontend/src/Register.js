import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const [newName, setName] = useState("");
  const [newemail, setemail] = useState("");
  const [newpassword, setpassword] = useState("");
  const [newimg, setimg] = useState();
  const [newlevel, setGrouplevel] = useState("");
  const [newdiscipline, setdiscipline] = useState("");
  const navigate = useNavigate();
  const handleclick = () => {
    const data = new FormData();
    data.append("Name", newName);
    data.append("email", newemail);
    data.append("password", newpassword);
    data.append("file", newimg);
    data.append("discipline", newdiscipline);
    data.append("Grouplevel", newlevel);
    axios
      .post("http://localhost:5000/user/register", data)
      .then(function (response) {
        console.log(response);
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
      })
      .catch(function (err) {
        console.log(err);
      });
    navigate("/profil");
  };

  return (
    <div
      className="register"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
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
      <label>Name:</label>
      <input onChange={(e) => setName(e.target.value)} />
      <label>email</label>
      <input onChange={(e) => setemail(e.target.value)} />
      <label>password:</label>
      <input onChange={(e) => setpassword(e.target.value)} />

      <label>picture:</label>
      <input
        type="file"
        id="picture"
        name="picture"
        onChange={(e) => setimg(e.target.files[0])}
      />
      <br></br>
      <button onClick={handleclick}>save</button>
    </div>
  );
}

export default Register;
