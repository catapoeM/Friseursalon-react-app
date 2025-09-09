// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import uberUnsImg from "./assets/uber.png";

function Home() {
  return <h2>Willkommen im ZC Hair Salon</h2>;
}

function Booking() {
  return <h2>Termin buchen</h2>;
}

function Services() {
  return <h2>Unsere Leistungen</h2>;
}

function About() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "50vw",
        height: "100vh",
        backgroundImage: `url(${uberUnsImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 10
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)", // darker overlay for contrast
        }}
      />

    </div>
  );
}



function App() {
  return (
    <Router>
      {/* Header immer sichtbar */}
      <Header />

      {/* Seiten-Inhalt */}
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
