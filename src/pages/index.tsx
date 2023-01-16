import React from "react";
import { Route, Routes } from "react-router-dom";
import Carrer from "./Carrer";
import Home from "./Home";

const RouteSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/carrer/:id" element={<Carrer />}></Route>
      </Routes>
    </>
  );
};

export default RouteSwitch;
