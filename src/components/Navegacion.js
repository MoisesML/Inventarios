import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'
import './css/Navegacion.css'

export default function Navegacion() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Sistema de Inventarios</Navbar.Brand>
      <Nav className="mr-auto">
        <Link className="link mr-3" to="/">Inicio</Link>
        <Link className="link mr-3" to="/principal">Dashboard</Link>
        <Link className="link mr-3" to="#pricing">Materiales</Link>
      </Nav>
    </Navbar>
  );
}
