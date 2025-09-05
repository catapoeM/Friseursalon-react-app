// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function Home() {
  return <h2>Willkommen im ZavoiC Salon</h2>;
}

function Booking() {
  return <h2>Termin buchen</h2>;
}

function Services() {
  return <h2>Unsere Leistungen</h2>;
}

function About() {
  return <h2>Über uns</h2>;
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
