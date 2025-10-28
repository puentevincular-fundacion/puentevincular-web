import { useState, useEffect } from 'react';

// Importar las imágenes locales
import image1 from '../assets/carrusel/1.jpg';
import image2 from '../assets/carrusel/2.jpg';
import image3 from '../assets/carrusel/3.jpg';
import image4 from '../assets/carrusel/4.jpg';

const carouselImages = [
  image1,
  image2,
  image3,
  image4
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-[#77b68d] via-[#0a4e40] to-[#0a4e40] text-white overflow-hidden">
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a4e40]/80 via-[#0a4e40]/70 to-[#77b68d]/60"></div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Fundación Puente Vincular
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-[#e9ebb1] italic font-light">
            Tendiendo puentes, creando vínculos
          </p>
          <p className="text-lg md:text-xl mb-12 text-white/90 max-w-2xl leading-relaxed">
            Trabajamos junto a personas en situación de calle, construyendo espacios de encuentro,
            dignidad y restitución de derechos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#help"
              className="bg-white text-[#0a4e40] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e9ebb1] transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Quiero Ayudar
            </a>
            <a
              href="#programs"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition"
            >
              Conocer Más
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 pb-12">
        <svg className="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L0,80 Q600,120 1200,80 L1200,0 Z" fill="white"></path>
        </svg>
      </div>
    </div>
  );
}
