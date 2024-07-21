import { Header } from "./Components/Header";

import { useState, useEffect } from "react";
import { Button } from "./Components/Button";
import { formatearCash, calcularCuota } from "./helpers";

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [cuotas, setCuotas] = useState(3);
  const [total, setTotal] = useState(calcularCuota(0));
  const [pago, setPago] = useState(0);

  useEffect(() => {
    let res = calcularCuota(cantidad, cuotas);
    setTotal(res);
  }, [cantidad, cuotas]);

  useEffect(() => {
    setPago(total / cuotas);
  }, [total]);

  const MIN = 1000;
  const MAX = 20000;
  const STEP = 100;

  const handleChange = (e) => {
    // console.log(Number(e.target.value))
    setCantidad(Number(e.target.value));
  };

  function handleRestar() {
    const valor = cantidad - STEP;
    if (valor < MIN) {
      alert("La cantidad no es valida");
      return;
    }
    setCantidad(valor);
  }

  function handleSuma() {
    const valor = cantidad + STEP;
    if (valor > MAX) {
      alert("La cantidad no es valida");
      return;
    }
    setCantidad(valor);
  }

  return (
    <div className="my-20 py-8 px-8 max-w-lg mx-auto bg-white rounded-xl shadow-lg">
      <Header />

      <input
        className="w-full py-4"
        type="range"
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
        onChange={handleChange}
      />

      <div className="flex justify-between ">
        <Button signo="-" calculo={handleRestar} />
        <Button signo="+" calculo={handleSuma} />
      </div>
      <p className="text-center text-2xl text-sky-500 font-bold">
        {" "}
        {formatearCash(cantidad)}
      </p>

      <h2 className="mt-3 text-2xl text-center text-zinc-500 ">
        {" "}
        Indica en cuantas{" "}
        <span className="text-orange-500 font-bold"> Cuotas </span> quieres
        pagar{" "}
      </h2>

      <select
        className="mt-5 p-2 w-full mx-auto rounded-lg bg-white border border-x-gray-100 text-center  text-orange-500 font-bold"
        value={cuotas}
        onChange={(e) => setCuotas(Number(e.target.value))} // operador + setea la cuota como numero
      >
        <option value="3"> 3 Cuotas </option>
        <option value="6"> 6 Cuotas </option>
        <option value="12"> 12 Cuotas</option>
      </select>

      <div className="my-5 w-lg p-8 bg-slate-100 rounded-md ">
        <h2 className="text-center text-xl font-bold text-blue-600">
          {" "}
          Resumen del Credito{" "}
        </h2>
        <p className="text-center text-lg font-bold text-orange-500">
          {" "}
          En {cuotas} cuotas
        </p>
        <p className="text-center text-lg font-bold text-orange-500">
          {" "}
          Total a Pagar: {formatearCash(total)}
        </p>
        <p className="text-center text-lg font-bold text-orange-500">
          {" "}
          Abonas Mensualmente: {formatearCash(pago)}
        </p>
      </div>
    </div>
  );
}

export default App;
