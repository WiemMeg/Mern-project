import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
function Profil() {
  const [res, setres] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/user/current", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        setres(response.data.user);
        console.log(response.data.user);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="profil">
        <h1>{res && res.email}</h1>
        <h2>Enjoy the Difference with LODO</h2>

        <Card
          style={{
            border: "1px solid black",
            display: "flex",
            width: "200px",
            height: "290px",
            borderRadius: "20%",
            flexDirection: "",
            padding: "4%",
            justifyContent: "space-around",
            alignItems: "center",
            alignmentBaseline: "baseline",
            marginTop: "5%",
            marginLeft: "25%",
            backgroundColor: "bisque",
          }}
        >
          <Card.Body>
            <img
              src={res && res.picture}
              style={{ width: "150px", height: "150px" }}
            />
            <Card.Title
              style={{
                fontSize: "30px",
              }}
            ></Card.Title>
          </Card.Body>
        </Card>

        <h1>Name:{res && res.Name}</h1>
        <h1>Grouplevel:{res && res.Grouplevel}</h1>
        <h1>Discipline:{res && res.discipline}</h1>
      </div>
    </>
  );
}

export default Profil;
