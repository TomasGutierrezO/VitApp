import Arrow from "../components/Arrow";
import Logo from '../components/Logo';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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

  return (
    <div className="flex flex-col justify-betwee items-center h-screen p-4">
      <div className="flex justify-between items-center">
        <Arrow onClick={() => navigate("/gender")} />
        <Logo />
      </div>
      <p className="text-3xl font-bold text-[#36aaff] mt-9 mb-16">Calculemos tu IMC</p>
      <div className="flex gap-4 mt-4 border border-gray-300 p-4 rounded-md m-20 mb-37 ">
        <div className="flex flex-col gap-4">
          <label htmlFor="Nombre" className="text-lg font-semibold m-2">Nombre</label>
          <label htmlFor="peso" className="text-lg font-semibold m-2">Peso</label>
          <label htmlFor="altura" className="text-lg font-semibold m-2">Altura</label>
        </div>
        <div className="w-40">
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="border-2 border-gray-300 rounded-md m-4 w-32" />
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder=" kg" className="placeholder:text-end border-2 border-gray-300 rounded-md m-4 w-32 pr-1" />
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder=" cm" className="placeholder:text-end border-2 border-gray-300 rounded-md m-4 w-32 pr-1" />
        </div>
      </div>
      <Button onClick={() => navigate("/my-imc")} text="Calcular" />
    </div>
  );
}

export default DataForm;