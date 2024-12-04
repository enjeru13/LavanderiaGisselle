import fondo from "../images/fondo1.jpg";
import { MdLocalLaundryService } from "react-icons/md";
import { TbIroning3Filled } from "react-icons/tb";
import { FaRocket } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { RxShadowInner } from "react-icons/rx";
import Nosotros from "./Nosotros";

function Inicio() {
  return (
    <div>
      {/* Sección de fondo */}
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1)), url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          width: "100%",
        }}
      >
        <div className="flex justify-center items-center h-full text-pink-400">
          <h1 className="text-3xl md:text-5xl font-bold text-center font-OpenSans mt-20">
            ¡El verdadero lavado automático!
          </h1>
        </div>
      </div>

      {/* Sección de tarjetas */}
      <div className="relative py-8 -top-20">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg border border-pink-400 flex flex-col justify-center items-center h-48 w-full p-4 text-center">
              <MdLocalLaundryService className="text-5xl text-pink-400 mb-2" />
              <h3 className="text-xl font-semibold text-gray-800">Lavado y Secado por Kg</h3>
              <p className="text-sm text-gray-600 mt-2">
                Lavado y secado de prendas por kilogramo para tu comodidad y eficiencia.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg border border-pink-400 flex flex-col justify-center items-center h-48 w-full p-4 text-center">
              <TbIroning3Filled className="text-5xl text-pink-400 mb-2" />
              <h3 className="text-xl font-semibold text-gray-800">Lavado y Planchado por Piezas</h3>
              <p className="text-sm text-gray-600 mt-2">
                Lavado y planchado individual para cada pieza de ropa, ideal para prendas delicadas.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg border border-pink-400 flex flex-col justify-center items-center h-48 w-full p-4 text-center">
              <FaRocket className="text-5xl text-pink-400 mb-2" />
              <h3 className="text-xl font-semibold text-gray-800">Servicio Express</h3>
              <p className="text-sm text-gray-600 mt-2">
                Disfruta de un lavado rápido y eficiente sin sacrificar la calidad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg border border-pink-400 flex flex-col justify-center items-center h-48 w-full p-4 text-center">
              <GiClothes className="text-5xl text-pink-400 mb-2" />
              <h3 className="text-xl font-semibold text-gray-800">Servicio de Desmanche</h3>
              <p className="text-sm text-gray-600 mt-2">
                Eliminación de manchas difíciles para que tus prendas luzcan como nuevas.
              </p>
            </div>
            {/* Card 5 */}
            <div className="bg-white shadow-lg rounded-lg border border-pink-400 flex flex-col justify-center items-center h-48 w-full p-4 text-center">
              <RxShadowInner className="text-5xl text-pink-400 mb-2" />
              <h3 className="text-xl font-semibold text-gray-800">Teñido de Prendas</h3>
              <p className="text-sm text-gray-600 mt-2">
                Cambia el color de tus prendas o mejora su tono con nuestro servicio de teñido.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Componente de Nosotros */}
      <Nosotros />
    </div>
  );
}

export default Inicio;
