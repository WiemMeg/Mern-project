import React from "react";
import ReactPlayer from "react-player/youtube";
import { Routes, Route, Link } from "react-router-dom";

function Expo() {
  return (
    <div
      className="bloc"
      style={{
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "5%",
      }}
    >
      <ReactPlayer url={"https://youtu.be/aV7tG8Uj7xQ?t=2"} />
      <h2>Exposition</h2>
      <ReactPlayer url={"https://youtu.be/wSMKdeUjw1s?t=78"} />
      <h2>Exposition</h2>
      <ReactPlayer url={"https://youtu.be/9xLnlskm0s0?t=124"} />
      <h2>Exposition</h2>
      <ReactPlayer url={"https://youtu.be/R-QoTQ_ATVs"} />
      <h2>Exposition</h2>
      <ReactPlayer url={"https://youtu.be/fTWciJZw6rI?t=264"} />
      <h2>Exposition</h2>
      <ReactPlayer url={"https://youtu.be/lJ906ri9MgI?t=37"} />
      <h2>Exposition</h2>
      <ReactPlayer url={"https://youtu.be/dZW_kIsEZo0?t=65"} />
      <h2>Exposition</h2>
      <ReactPlayer url={"https://youtu.be/TKEbws4QhEk"} />
      <h2>Exposition</h2>
      <ReactPlayer url={"https://youtu.be/aRMbAQq2yxs"} />
    </div>
  );
}
export default Expo;
