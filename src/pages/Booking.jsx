import WrapButton from "../components/CategoryButton";

export default function Booking() {
  return (
    <div className="flex gap-6 p-6">
      <WrapButton label="Damen" options={["Damenhaarschnitt (inkl. Waschen & Fönen", "Waschen & Fönen", "Wimperfärben"]} />
      <WrapButton label="Herren" options={["Herrenhaarschnitt"]} />
      <WrapButton label="Kinder" options={["Kinderhaarschnitt"]} />
    </div>
  );
}
