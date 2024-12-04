import { useState, useEffect } from "react";
import lavanderia1 from "../images/lavanderia1.jpg";
import lavanderia2 from "../images/lavanderia2.jpg";
import lavanderia3 from "../images/lavanderia3.jpg";

function Nosotros() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [lavanderia1, lavanderia2, lavanderia3];

    // Efecto para el contador automático del carrusel
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3000); // Cambia la imagen cada 3 segundos

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []); // El efecto solo se ejecuta una vez al montar el componente

    return (
        <div className="bg-white py-8">
            {/* Sección sobre la lavandería */}
            <div className="text-center max-w-3xl mx-auto mb-8 px-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sobre Nosotros</h2>
                <p className="text-lg text-gray-600">
                    En nuestra lavandería ofrecemos servicios rápidos y de calidad para mantener tu ropa siempre limpia y en excelente estado. Con atención personalizada, nos encargamos de cada detalle para garantizar tu satisfacción.
                </p>
            </div>

            {/* Carrusel de imágenes */}
            <div className="relative max-w-3xl mx-auto mb-8 px-4">
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={images[currentImage]} // Usa la imagen actual importada
                        alt="Lavandería"
                        className="w-full h-64 object-cover"
                    />
                </div>
                {/* Controles del carrusel */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 px-4">
                    <button
                        className="text-white bg-pink-400 p-2 rounded-full"
                        onClick={() =>
                            setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                        }
                    >
                        &lt;
                    </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 px-4">
                    <button
                        className="text-white bg-pink-400 p-2 rounded-full"
                        onClick={() =>
                            setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                        }
                    >
                        &gt;
                    </button>
                </div>
            </div>

            {/* Espacio para el mapa */}
            <div className="text-center max-w-3xl mx-auto mb-8 px-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestra Ubicación</h3>
                <div className="h-64 bg-gray-300 rounded-lg">
                    {/* Aquí va el componente de mapa, por ejemplo con react-google-maps */}
                    <p className="text-gray-600">El mapa de ubicación aparecerá aquí.</p>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;
