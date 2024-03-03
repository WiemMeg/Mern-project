import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [newemail, setemail] = useState("");
  const [newpassword, setpassword] = useState("");
  const navigate = useNavigate();
const handleclick=()=>{


  axios
    .post("http://localhost:5000/user/login", {
      email: newemail,
      password: newpassword,
      })
    .then(function (response) {
      console.log(response);
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
    })
    .catch(function (err) {
      console.log(err);
    });
  navigate('/profil')
}
  return (
    <div
      className="login"
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
      <label>email:</label>
      <input onChange={(e) => setemail(e.target.value)} />
      <label>password:</label>
      <input onChange={(e) => setpassword(e.target.value)} />

      <button  onClick={handleclick}  >save</button>
    </div>
  );
}

export default Login;
