import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from '../components/Logo';
import Button from '../components/Button';

const Gender = () => {
  const navigate = useNavigate();
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    // Cargar la selección guardada en localStorage al cargar la página
    const generoGuardado = localStorage.getItem("generoSeleccionado");
    if (generoGuardado) {
      setSeleccionado(generoGuardado);
    }
  }, []);

  const manejarSeleccion = (genero) => {
    setSeleccionado(genero);
    localStorage.setItem("generoSeleccionado", genero);
  };
  
  return (
    <div className='p-4 bg-white flex flex-col items-center h-screen space-evenly'>
      <div className="flex gap-4 p-2">
        <img 
          src="/flecha-atras.png" 
          alt="Atrás" 
          className="w-8 h-8 cursor-pointer absolute left-10 top-10"
          style={{}}
          onClick={() => navigate("/")}
        />
        <Logo />
      </div>

      <div>
        <p className=' tracking-tight font-semibold p-2 text-3xl mb-9 pb-10 text-center'>Aumenta tu{"\n"} metabolismo con {"\n"} nuestra atención {"\n"}personalizada </p>
      </div>
      <p className='font-bold mx-5 text-[#36AAFF] text-3xl pb-10 text-center  '>Selecciona tu genero:</p>
      
      {/* Seleccionar Genero */}
      <div className="flex justify-center gap-4 mt-10">
        {/* Femenino */}
        <div className="flex flex-col items-center" onClick={() => manejarSeleccion("Femenino")}>
          <div className={`w-32 h-32 rounded-full overflow-hidden border-2 ${
            seleccionado === "Femenino" ? "border-blue-500 shadow-lg" : "border-gray-300"}`}>

            <img src="/Femenino.jpg" alt="Femenino" className="w-full h-full object-cover" />
          </div>
          <p className="tracking-tight font-semibold text-xl mt-2 text-center">Femenino</p>
        </div>

        {/* Masculino*/}
        <div className="flex flex-col items-center" onClick={() => manejarSeleccion("Masculino")}>
          <div className={`w-32 h-32 rounded-full overflow-hidden border-2 ${
            seleccionado === "Masculino" ? "border-blue-500 shadow-lg" : "border-gray-300"
          }`}>
            <img src="/Masculino.jpg" alt="Imagen 2" className="w-full h-full object-cover" />
          </div>
          <p className="tracking-tight font-semibold text-xl mt-2 text-center">Masculino</p>
        </div>
      </div>

      <Button onClick={() => navigate("/data-form")} text="Continuar"/>
    </div>
    
  );
}

export default Gender;