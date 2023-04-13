import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import IniciarSesionAdmi from "../IniciarSesion";
import RegistroAdmi from "../RegistroAdmi"
import Estudiantes from "../Estudiantes"

import "../../assets/styles/sidebar.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

export const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IniciarSesionAdmi />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/registro" element={<RegistroAdmi />}></Route>
          <Route path="/Estudiantes" element={<Estudiantes/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
