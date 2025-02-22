import { useNavigate } from "react-router-dom";
import Logo from '../components/Logo';
import Button from '../components/Button';

const Gender = () => {
  const navigate = useNavigate();
  
  return (
    <div className='p-4 bg-white flex flex-col items-center  h-screen space-evenly'>
      <Logo />
      <div>
        <p className=' tracking-tight font-semibold p-2 text-3xl mb-9 pb-10 text-center'>Aumenta tu{"\n"} metabolismo con {"\n"} nuestra atención {"\n"}personalizada </p>
      </div>
      <p className='font-bold mx-5 text-[#36AAFF] text-3xl pb-10 text-center  '>Selecciona tu genero:</p>
      
      <div className="flex justify-center gap-4 mt-10">
        {/* Femenino */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
          <img src="https://via.placeholder.com/150" alt="Imagen 1" className="w-full h-full object-cover" />
        </div>

        {/* Masculino*/}
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
          <img src="https://via.placeholder.com/150" alt="Imagen 2" className="w-full h-full object-cover" />
        </div>
      </div>
      <Button onClick={() => navigate("/gender")} text="Comenzar"/>
    </div>
    
  );
}

export default Gender;