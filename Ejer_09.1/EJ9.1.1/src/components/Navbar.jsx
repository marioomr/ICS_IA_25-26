import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = { fontWeight: "bold", color: "blue" };

  return (
    <nav style={{ marginBottom: "1rem" }}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Inicio
      </NavLink>{" | "}
      <NavLink to="/posts" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Artículos
      </NavLink>
    </nav>
  );
}
