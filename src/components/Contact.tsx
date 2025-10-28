import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import whatsappIcon from '../assets/icons/whatsapp.svg';

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#e9ebb1]/20 via-[#e9ebb1]/30 to-[#77b68d]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Contacto
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Estamos para escucharte. Comunicate con nosotros por cualquiera de estos medios.
          </p>
        </div>

        {/* Canales de contacto interactivos */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
            Canales de Contacto Directo
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <a
              href="https://www.instagram.com/fundacionpuentevincular"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up border-2 border-transparent hover:border-[#77b68d]/20"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#77b68d] to-[#0a4e40] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300 relative shadow-lg">
                <div className="absolute inset-0 bg-white/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600 text-sm sm:text-base font-medium mb-3">
                @fundacionpuentevincular
              </p>
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold inline-block">
                ¡Escríbenos!
              </div>
            </a>

            <a
              href="https://wa.link/zhhihn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up border-2 border-transparent hover:border-[#0a4e40]/20"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#0a4e40] to-[#77b68d] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300 relative shadow-lg">
                <div className="absolute inset-0 bg-white/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={whatsappIcon} 
                  alt="WhatsApp" 
                  className="w-10 h-10 sm:w-12 sm:h-12 relative z-10 brightness-0 invert"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm sm:text-base font-medium mb-3">
                Chateá con nosotros
              </p>
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold inline-block">
                ¡Escríbenos!
              </div>
            </a>

            <a
              href="mailto:puentevincular@gmail.com"
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up border-2 border-transparent hover:border-[#77b68d]/20 sm:col-span-2 lg:col-span-1"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#77b68d] to-[#0a4e40] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300 relative shadow-lg">
                <div className="absolute inset-0 bg-white/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm sm:text-base font-medium mb-3 break-all">
                puentevincular@gmail.com
              </p>
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold inline-block">
                ¡Escríbenos!
              </div>
            </a>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
            Información de Contacto
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center animate-fade-in-up"
                 style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#77b68d] to-[#0a4e40] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Dirección</h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Rondeau 337<br />
                Mendoza, Argentina
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center animate-fade-in-up"
                 style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0a4e40] to-[#77b68d] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Teléfonos</h4>
              <div className="text-gray-700 text-sm sm:text-base space-y-1">
                <a href="tel:+5492616413390" className="hover:text-[#77b68d] transition-colors duration-300 block">
                  +54 9 261 641-3390
                </a>
                <a href="tel:02616413390" className="hover:text-[#77b68d] transition-colors duration-300 block">
                  0261 15-641-3390
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 lg:p-12 border border-white/20 animate-fade-in-up"
               style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Envianos un Mensaje
            </h3>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77b68d] focus:border-transparent transition-all duration-300 text-sm sm:text-base hover:border-[#77b68d]/50"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77b68d] focus:border-transparent transition-all duration-300 text-sm sm:text-base hover:border-[#77b68d]/50"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77b68d] focus:border-transparent transition-all duration-300 text-sm sm:text-base hover:border-[#77b68d]/50"
                  placeholder="Motivo de tu consulta"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77b68d] focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base hover:border-[#77b68d]/50"
                  placeholder="Contanos cómo querés ayudar o qué necesitás saber..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#77b68d] to-[#0a4e40] text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:from-[#77b68d]/90 hover:to-[#0a4e40]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:ring-4 focus:ring-[#77b68d]/30 active:scale-98 group"
              >
                <span className="flex items-center justify-center">
                  Enviar Mensaje
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div> */}

        {/* Additional contact information */}
        {/* <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-[#77b68d]/10 to-[#0a4e40]/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto backdrop-blur-sm border border-white/20">
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              ¿Preferís visitarnos?
            </h4>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Nuestra sede está abierta para recibir visitantes, voluntarios y personas que quieran conocer más sobre nuestro trabajo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base">
              <div className="flex items-center text-gray-700">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#77b68d]" />
                <span>Rondeau 337, Mendoza</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center text-gray-700">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#77b68d]" />
                <span>0261 15-641-3390</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
