import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Arrow from "../components/Arrow";
import Swal from "sweetalert2";

const MyIMC = () => {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);
  const [imc, setIMC] = useState("");
  const [name, setNombre] = useState("");
  const [imcStatus, setIMCStatus] = useState("");

  useEffect(() => {
    const acceptedTerms = localStorage.getItem("acceptedTerms");
    if (acceptedTerms) {
      setAccepted(JSON.parse(acceptedTerms));
    }

    const storedName = localStorage.getItem("nombre");
    const storedImc = localStorage.getItem("imc");
    const storedIMCStatus = localStorage.getItem("imcStatus");

    if (storedName) {
      setNombre(storedName);
    }

    if (storedImc) {
      setIMC(storedImc);
      setIMCStatus(getIMCStatus(parseFloat(storedImc)));
    }

    if (storedIMCStatus) {
      setIMCStatus(storedIMCStatus);
    }
  }, []);

  useEffect(() => {
    if (imc) {
      const status = getIMCStatus(parseFloat(imc));
      setIMCStatus(status);
      localStorage.setItem("imcStatus", status);
    }
  }, [imc]);

  const handleAcceptance = (isAccepted) => {
    setAccepted(isAccepted);
    localStorage.setItem("acceptedTerms", JSON.stringify(isAccepted));
  };

  const getIMCStatus = (imc) => {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Saludable";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
  };

  const handleStart = () => {
    if (!accepted) {
      Swal.fire({
        title: "Acepta los términos",
        text: "Debes aceptar el tratamiento de datos para continuar.",
        icon: "info",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#36AAFF",
      });
      return;
    }

    navigate("/my-profile");
  };

  return (
    <div className="p-4 bg-white flex flex-col items-center h-screen">
      <Arrow onClick={() => navigate("/data-form")} />
      <Logo />

      <div className="flex flex-col items-center justify-center pt-8 p-5">
        <h1 className="tracking-tight font-semibold p-2 text-3xl mb-4 text-center">
          {name}, tu índice de masa corporal es:
        </h1>
        <p className="font-bold mx-5 text-[#36AAFF] text-3xl mb-8 text-center">
          {imcStatus}
        </p>

        <div className="w-full bg-[#F5F9FF] rounded-lg p-10 mb-10 border border-[#36AAFF]/20">
          <p className="text-4xl font-bold text-[#36AAFF] text-center">{imc}</p>
        </div>

        <div className="flex items-start gap-2 w-full pt-17">
          <input
            type="checkbox"
            id="terms"
            checked={accepted}
            onChange={(e) => handleAcceptance(e.target.checked)}
            className="mt-1"
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            Acepto el tratamiento de mis datos personales de acuerdo con la política de privacidad
          </label>
        </div>
      </div>

      <Button onClick={handleStart} text="Empecemos" />
    </div>
  );
};

export default MyIMC;