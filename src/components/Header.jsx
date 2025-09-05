// src/components/Header.jsx
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{position: "fixed", top: 0, left: 0, width: "100%", background: "#f8f8f8", padding: "1rem 2rem", zIndex: 1000, boxShadow: "0 2px 5px rgba(0,0,0,0.1)"}}>
      <nav style={{ display: "flex", alignItems: "center", flexWrap:"wrap", justifyContent: "center", width: "100%"}}>
        
        {/* Logo */}
        <div style={{ fontSize: "3rem", fontWeight: "bold", color: "#ff4081", flex:"1 1 auto"}}>
          Zavoi✂️C
        </div>

        {/* Navigation */}
        <ul style={{ display: "flex", gap: "3rem", listStyle: "none", margin: "0 auto", padding: 0, flex: "2 1 auto", justifyContent: "center", flexWrap: "wrap"}}>
          <li><Link to="/" style={{ fontSize: "3rem", textDecoration: "none", color: "black"}} >Home</Link></li>
          <li><Link to="/services" style={{ fontSize: "3rem", textDecoration: "none", color: "black"}} >Leistungen</Link></li>
          <li><Link to="/booking" style={{ fontSize: "3rem", textDecoration: "none", color: "black" }} >Termin buchen</Link></li>
          <li><Link to="/about" style={{ fontSize: "3rem", textDecoration: "none", color: "black" }} >Über uns</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
