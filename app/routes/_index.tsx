import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  const [B, setB] = useState<number | null>(null);
  const [L, setL] = useState<number | null>(null);
  const [z, setZ] = useState<number | null>(null);
  const [resultado, setResultado] = useState<string>("");

  const calcularI3 = () => {
    if (B === null || L === null || z === null) {
      setResultado("Por favor ingrese todos los valores.");
      return;
    }

    // Calcular m' y n'
    const m = B / (2 * z);
    const n = L / (2 * z);

    // Calcular la primera parte de la fórmula
    const parte1 = (2 * m * n * Math.sqrt(m ** 2 + n ** 2 + 1)) / ((m ** 2 + n ** 2 + 1) * (m ** 2 + n ** 2 + 2));

    // Calcular la segunda parte con arcotangente
    const parte2 = Math.atan((2 * m * n * Math.sqrt(m ** 2 + n ** 2 + 1)) / (n ** 2 - m ** 2 + 1));

    // Calcular I3
    const I3 = (1 / (4 * Math.PI)) * (parte1 + parte2);

    // Mostrar el resultado
    setResultado(`El valor de I3 es: ${I3.toFixed(4)}`);
  };

  return (
    <div className="font-sans p-10 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800">Pucesi</h1>
        <h2 className="text-2xl font-semibold text-center text-gray-600 mt-2">Mecánica de Suelos II</h2>
        <p className="text-center text-gray-500 mt-2 mb-6">
          <strong>Autor:</strong> P.B.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Cálculo de Esfuerzos en el Suelo</h2>
        <p className="mb-6 text-gray-600">Método de Boussinesq</p>

        <div className="space-y-4">
          <div>
            <label htmlFor="B" className="block text-sm font-medium text-gray-700">
              Ancho de la zapata (B):
            </label>
            <input
              type="number"
              value={B ?? ""}
              onChange={(e) => setB(parseFloat(e.target.value))}
              placeholder="Ingrese el valor de B"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="L" className="block text-sm font-medium text-gray-700">
              Largo de la zapata (L):
            </label>
            <input
              type="number"
              value={L ?? ""}
              onChange={(e) => setL(parseFloat(e.target.value))}
              placeholder="Ingrese el valor de L"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="z" className="block text-sm font-medium text-gray-700">
              Profundidad (z):
            </label>
            <input
              type="number"
              value={z ?? ""}
              onChange={(e) => setZ(parseFloat(e.target.value))}
              placeholder="Ingrese la profundidad"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mt-6">
          <button onClick={calcularI3} className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md shadow hover:bg-indigo-700">
            Calcular I₃
          </button>
        </div>

        <p className="mt-4 text-lg text-center text-gray-700">{resultado}</p>
      </div>
    </div>
  );
}
