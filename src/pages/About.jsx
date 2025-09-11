import überUnsImg from "../assets/uber.png";

function About() {
  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "row", // side by side on desktop
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Left side: text */}
      <div
        style={{
          flex: 1, // takes half of the width
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start", // aligns text to left
          padding: "2rem",
          backgroundColor: "#f0f0f0", // optional: background for contrast
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Über uns</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Willkommen bei ZC Hair Salon– Ihrem Friseursalon im Herzen von Wien. Bei uns dreht sich alles um Schönheit, Stil und Wohlbefinden. Unser erfahrenes Team nimmt sich Zeit, Ihre individuellen Wünsche zu verstehen und Ihre Persönlichkeit durch kreative Haarschnitte, Farben und Styling zum Ausdruck zu bringen.

Wir legen großen Wert auf Qualität und Nachhaltigkeit: Hochwertige Produkte, modernes Equipment und fachliches Know-how sorgen dafür, dass Sie sich bei jedem Besuch rundum wohlfühlen. Egal ob klassischer Schnitt, trendige Farbe oder ein professionelles Styling für besondere Anlässe – wir begleiten Sie mit Leidenschaft und Präzision.

Bei ZC Hair Salon treffen Tradition und moderne Trends aufeinander. Unser Ziel ist es, dass Sie nicht nur gut aussehen, sondern sich auch gut fühlen. Besuchen Sie uns und erleben Sie, wie Friseurhandwerk in Wien auf höchstem Niveau gelebt wird.
        </p>
      </div>

      {/* Right side: image */}
      <div
        style={{
          flex: 1, // other half
          backgroundImage: `url(${überUnsImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

export default About;