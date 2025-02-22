import { useNavigate } from "react-router-dom";
import Logo from '../components/Logo';
import Button from '../components/Button';

const Start = () => {
  const navigate = useNavigate();
  
  return (
    <div className='p-4 bg-white flex flex-col items-center  h-screen space-evenly'>
      <Logo />
      <p className=' tracking-tight font-semibold p-2 text-3xl mb-9'>Conviertete en uno más</p>
      <p className='font-bold mx-5 text-[#36AAFF] text-4xl pb-10 text-center  '>De nuestros 1000 usuarios !</p>
      <img className='drop-shadow-xl m-10 pr-8 pl-8 pb-10'src="/imagenPrueba.jpg" alt="IMG TEST" />
      <Button onClick={() => navigate("/gender")} text="Comenzar"/>
    </div>
    
  );
}

export default Start;