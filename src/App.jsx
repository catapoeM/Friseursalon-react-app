// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";

function Home() {
  return <h2>Willkommen im ZC Hair Salon</h2>;
}

function Services() {
  return <h2>Unsere Leistungen</h2>;
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
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
