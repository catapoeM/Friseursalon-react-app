export default function FriseurTabelle({tabelle}) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Friseur Dienstleistungen</h2>
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Dienstleistung</th>
            <th className="px-4 py-2 border">Preis</th>
          </tr>
        </thead>
        <tbody>
          {tabelle.map((service, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{service.name}</td>
              <td className="px-4 py-2 border">{service.price}</td>
              <td className="px-4 py-2 border text-center">
                <input type="checkbox" className="w-4 h-4" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}