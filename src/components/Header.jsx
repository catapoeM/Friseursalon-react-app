// src/components/Header.jsx
import { Link } from "react-router-dom";
import  logo from "../assets/zc.png";

function Header() {
  return (
    <header style={{position: "fixed", top: 0, left: 0, width: "100%", background: "#f8f8f8", padding: "1rem 2rem", zIndex: 1000, boxShadow: "0 2px 5px rgba(0,0,0,0.1)"}}>
      <nav style={{ display: "flex", alignItems: "center", flexWrap:"wrap", justifyContent: "center", width: "100%"}}>
        
        {/* Logo */}
        <div style={{ flex: "1 1 auto" }}>
          <img 
            src={logo} 
            alt="ZC Salon Logo" 
            style={{ height: "200px", objectFit: "contain" }}
          />
        </div>

        {/* Navigation */}
        <ul style={{ display: "flex", gap: "3rem", listStyle: "none", margin: "0 auto", padding: 0, flex: " 0.6 auto", justifyContent: "center", flexWrap: "wrap"}}>
          <li><Link to="/" style={{ padding: "1rem 3rem", backgroundColor: "#282728ff", color: "white", borderRadius: "30px", textDecoration: "none", fontWeight: "600", transition: "color 0.3s"}} >Home</Link></li>
          <li><Link to="/services" style={{ padding: "1rem 3rem", backgroundColor: "#282728ff", color: "white", borderRadius: "30px", textDecoration: "none", fontWeight: "600", transition: "color 0.3s"}} >Leistungen</Link></li>
          <li><Link to="/booking" style={{ padding: "1rem 3rem", backgroundColor: "#282728ff", color: "white", borderRadius: "30px", textDecoration: "none", fontWeight: "600", transition: "color 0.3s"}} >Termin buchen</Link></li>
          <li><Link to="/about" style={{ padding: "1rem 3rem", backgroundColor: "#282728ff", color: "white", borderRadius: "30px", textDecoration: "none", fontWeight: "600", transition: "color 0.3s"}} >Über Uns</Link></li>
          
        </ul>
      </nav>
    </header>
  );
}


export default Header;
