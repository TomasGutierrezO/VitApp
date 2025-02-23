import Arrow from "../components/Arrow";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const DataForm = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState(localStorage.getItem("nombre") || "");
  const [peso, setPeso] = useState(localStorage.getItem("peso") || "");
  const [altura, setAltura] = useState(localStorage.getItem("altura") || "");
  const [imc, setIMC] = useState(localStorage.getItem("imc") || "");

  useEffect(() => {
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("peso", peso);
    localStorage.setItem("altura", altura);

    if (peso && altura) {
      const alturaMetros = altura / 100;
      const calculoIMC = (peso / (alturaMetros * alturaMetros)).toFixed(2);
      setIMC(calculoIMC);
      localStorage.setItem("imc", calculoIMC);
    }
  }, [nombre, peso, altura]);

  const manejarCalculo = () => {
    if (!nombre.trim() || !peso.trim() || !altura.trim()) {
      Swal.fire({
        title: "Campos incompletos",
        text: "Debes completar todos los campos antes de calcular tu IMC.",
        icon: "info",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#36AAFF",
      });
      return;
    }

    navigate("/my-imc");
  };

  return (
    <div className="flex flex-col items-center h-screen p-4 gap-10">
      <div className="flex justify-between items-center">
        <Arrow onClick={() => navigate("/gender")} />
        <Logo />
      </div>
      <p className="text-3xl font-bold text-[#36aaff] mb-12">Calculemos tu IMC</p>
      <div className="flex gap-4 mt-4 border border-gray-300 p-4 rounded-md mb-19">
        <div className="flex flex-col gap-4">
          <label htmlFor="nombre" className="text-lg font-semibold m-2">Nombre</label>
          <label htmlFor="peso" className="text-lg font-semibold m-2">Peso</label>
          <label htmlFor="altura" className="text-lg font-semibold m-2">Altura</label>
        </div>
        <div className="w-40">
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            maxLength={20}
            className="border-2 border-gray-300 rounded-md m-4 w-32"
          />
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder=" kg"
            maxLength={3}
            className="placeholder:text-end border-2 border-gray-300 rounded-md m-4 w-32 pr-1"
          />
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder=" cm"
            maxLength={3}
            className="placeholder:text-end border-2 border-gray-300 rounded-md m-4 w-32 pr-1"
          />
        </div>
      </div>
      <Button onClick={manejarCalculo} text="Calcular" />
    </div>
  );
};

export default DataForm;
