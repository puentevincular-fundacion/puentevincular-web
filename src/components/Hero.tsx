import { useState, useEffect } from 'react';

// Importar las imágenes locales
import image1 from '../assets/carrusel/1.jpg';
import image2 from '../assets/carrusel/2.jpg';
import image3 from '../assets/carrusel/3.jpg';
import image4 from '../assets/carrusel/4.jpg';
import christmasBall from '../assets/icons/christmas_ball.png';

const carouselImages = [
  image1,
  image2,
  image3,
  image4
];

const ChristmasBall = ({ onClick }: { onClick: () => void }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    onClick();
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <button
      onClick={handleClick}
      className="relative group focus:outline-none focus:ring-2 focus:ring-[#e9ebb1] rounded-lg"
      aria-label="Ir al evento de Navidad"
    >
      <div className={`relative w-24 h-24 md:w-32 md:h-32 group-hover:scale-110 transition-transform duration-300 ${isAnimating ? 'animate-bounce' : ''}`}>
        <img
          src={christmasBall}
          alt="Bola de Navidad"
          className="w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300 filter group-hover:brightness-110"
        />
        
        {/* Efecto de brillo navideño */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400/30 to-yellow-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      </div>

      {/* Tooltip superior */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#ef4444] text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        🎄 Cena de Navidad
      </div>

      {/* Texto de acción */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        ¡Haz clic!
      </div>

      {/* Efectos de partículas al hacer clic */}
      {isAnimating && (
        <>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute pointer-events-none animate-ping"
              style={{
                left: `${50 + Math.cos((i / 8) * Math.PI * 2) * 40}%`,
                top: `${50 + Math.sin((i / 8) * Math.PI * 2) * 40}%`,
                width: '6px',
                height: '6px',
                backgroundColor: ['#ef4444', '#fbbf24', '#3b82f6', '#ec4899', '#f97316', '#06b6d4', '#10b981', '#8b5cf6'][i],
                borderRadius: '50%',
                animation: `ping ${0.8 + i * 0.1}s cubic-bezier(0, 0, 0.2, 1)`,
              }}
            />
          ))}
        </>
      )}
    </button>
  );
};

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };


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

      <div className="absolute top-20 right-10 md:top-32 md:right-20 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
        <ChristmasBall onClick={scrollToEvents} />
      </div>

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
