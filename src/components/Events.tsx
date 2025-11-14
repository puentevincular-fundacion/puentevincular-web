import { Calendar, MapPin, Clock } from 'lucide-react';
import eventImage1 from '../assets/events/1.jpg';

export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Cena de Navidad Solidaria',
      description: 'Únete a nuestra tradicional cena navideña donde compartimos una cena especial con nuestros amigos en situación de calle. Una noche llena de alegría, música y espíritu navideño.',
      date: '24 de Diciembre, 2024',
      time: '21:00',
      location: 'Peatonal Sarmiento (Parroquia Santiago Apóstol y San Nicolás)',
      image: eventImage1,
      
      featured: true
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Próximos Eventos
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Descubre nuestras próximas actividades y únete a nuestra comunidad. 
            Cada evento es una oportunidad para tender puentes y crear vínculos significativos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                event.featured ? 'ring-2 ring-[#77b68d] ring-opacity-50' : ''
              }`}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div 
                    className="h-64 md:h-full bg-gradient-to-br from-[#77b68d] to-[#0a4e40]"
                    style={{
                      backgroundImage: `url(${event.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a4e40]/70 to-[#77b68d]/50"></div>
                  </div>
                  {event.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#e9ebb1] text-[#0a4e40] px-3 py-1 rounded-full text-sm font-semibold">
                        Evento Especial
                      </span>
                    </div>
                  )}
                  {/* <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div> */}
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 text-[#77b68d] mr-3" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 text-[#77b68d] mr-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 text-[#77b68d] mr-3" />
                      <span>{event.location}</span>
                    </div>
                    
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="#contact"
                      className="bg-gradient-to-r from-[#77b68d] to-[#0a4e40] text-white px-6 py-3 rounded-lg font-medium hover:from-[#0a4e40] hover:to-[#77b68d] transition-all duration-300 flex-1 sm:flex-none text-center"
                    >
                      Participar
                    </a>
                    {/* <a
                      href="#contact"
                      className="border-2 border-[#77b68d] text-[#77b68d] px-6 py-3 rounded-lg font-medium hover:bg-[#77b68d] hover:text-white transition-all duration-300 flex-1 sm:flex-none text-center"
                    >
                      Más Info
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Tienes alguna pregunta sobre nuestros eventos?
          </p>
          <a
            href="#contact"
            className="bg-white border-2 border-[#77b68d] text-[#77b68d] px-8 py-3 rounded-lg font-medium hover:bg-[#77b68d] hover:text-white transition-all duration-300 inline-block"
          >
            Contactar Organizadores
          </a>
        </div>
      </div>
    </section>
  );
}
