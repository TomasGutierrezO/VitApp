import { useNavigate } from "react-router-dom"
import Logo from "../components/Logo"
import Button from "../components/Button"
import Arrow from "../components/Arrow"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="p-4 bg-white flex flex-col items-center h-screen">
      <Arrow onClick={() => navigate("/my-profile")} />
      <Logo />

      <div className="flex flex-col items-center justify-center flex">
        <h1 className="tracking-tight font-semibold p-2 text-6xl mb-4 text-center text-[#36AAFF] pt-10">404</h1>
        <p className="font-bold mx-5 text-3xl mb-8 text-center pb-10">Página no encontrada</p>

        <div className="w-full bg-[#F5F9FF] rounded-lg p-6 mb-8 border border-[#36AAFF]/20">
          <p className="text-xl text-gray-600 text-center">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
        </div>
      </div>
        <div className="pt-20">
            <Button onClick={() => navigate("/")} text="Volver al inicio"/>
        </div>
    </div>
  )
}

export default NotFound;