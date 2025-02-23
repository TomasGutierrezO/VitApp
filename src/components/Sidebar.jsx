import { useNavigate } from "react-router-dom";
import CloseButton from "./CloseButton";

const Sidebar = ({ onClose }) => {
  const navigate = useNavigate(); 

  return (
    <div className="fixed inset-0 bg-opacity-50 flex">
      
      <div className="w-[60%] h-full border-r border-r-gray-900 bg-[#36AAFF] ease-in-out duration-500 relative">
        <div className="flex justify-end p-4">
          <CloseButton onClick={onClose} /> 
        </div>
        <ul className="uppercase p-4 text-white">
          <li className="p-4 border-b border-gray-600" onClick={() => { navigate("/my-profile"); onClose(); }}>
            Mi Perfil
          </li>
          <li className="p-4 border-b border-gray-600" onClick={() => { navigate("/faq"); onClose(); }}>
            ¿Qué es el IMC?
          </li>
          <li className="p-4 border-b border-gray-600" onClick={() => { navigate("/nut-plans"); onClose(); }}>
            Plan de Nutrición
          </li>
          <li className="p-4 border-b border-gray-600" onClick={() => { navigate("/diseases"); onClose(); }}>
            Posibles Enfermedades
          </li>
        </ul>
      </div>

     
      <div className="flex-1" onClick={onClose}></div>
    </div>
  );
};

export default Sidebar;

