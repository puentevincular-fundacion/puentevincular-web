import { Heart, Users, Handshake } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quiénes Somos
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Somos una fundación comprometida con la dignidad y los derechos de las personas
            en situación de calle. A través de diferentes programas, creamos espacios de encuentro
            donde el vínculo humano es el centro de nuestra labor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#e9ebb1]/30 to-[#77b68d]/20 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 bg-[#77b68d] rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
            <p className="text-gray-700 leading-relaxed">
              Tender puentes de encuentro y acompañamiento con personas en situación de calle,
              trabajando por la restitución de sus derechos vulnerados.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#77b68d]/20 to-[#e9ebb1]/30 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 bg-[#0a4e40] rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
            <p className="text-gray-700 leading-relaxed">
              Una sociedad donde cada persona tenga acceso a sus derechos básicos y pueda
              desarrollarse en un ambiente de respeto y dignidad.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#e9ebb1]/30 to-[#77b68d]/20 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 bg-[#77b68d] rounded-full flex items-center justify-center mb-6">
              <Handshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestros Valores</h3>
            <p className="text-gray-700 leading-relaxed">
              Respeto, empatía, solidaridad y compromiso son los pilares que guían
              cada una de nuestras acciones y programas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
