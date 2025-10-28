import { Heart, Radio, Crown, Film } from 'lucide-react';

const programs = [
  {
    id: 1,
    icon: Heart,
    title: 'Recorrida de los domingos',
    day: 'Domingos',
    time: '',
    description: 'Los domingos nos juntamos con personas en situación de calle. Compartimos la cena en plazas y espacios públicos de Mendoza, creando vínculos para profundizar en las necesidades de cada uno y avanzar en la restitución de derechos vulnerados.',
    color: 'from-[#77b68d] to-[#0a4e40]'
  },
  {
    id: 2,
    icon: Radio,
    title: 'Radio Comunitaria',
    subtitle: '"El Fantasma de la Máquina"',
    day: 'Miércoles',
    time: '19:00 h',
    description: 'Abrimos los micrófonos para que hablen quienes muchas veces no son escuchados. Espacio de expresión, reflexión y encuentro gestionado en conjunto por voluntarios y personas en situación de calle. Se puede escuchar por Spotify, Ivoox y radios comunitarias.',
    color: 'from-[#0a4e40] to-[#77b68d]'
  },
  {
    id: 3,
    icon: Crown,
    title: 'Espacio de Ajedrez',
    subtitle: '"Que viva el rey"',
    day: 'Viernes',
    time: '18:30 h',
    description: 'Nos reunimos a jugar, conversar, pensar y compartir. Una partida de ajedrez puede ser una forma de estar presentes. Un espacio donde el pensamiento estratégico se encuentra con el vínculo humano.',
    color: 'from-[#77b68d] to-[#0a4e40]'
  },
  {
    id: 4,
    icon: Film,
    title: 'Recreación',
    day: 'Sábados',
    time: '',
    description: 'Películas, juegos en grupo, momentos para relajarse y cortar con la rutina. A veces lo más simple - reírse, jugar, compartir - es lo que más abriga. Espacios de distensión y encuentro.',
    color: 'from-[#0a4e40] to-[#77b68d]'
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-[#e9ebb1]/10 to-[#e9ebb1]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Nuestros Programas
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Espacios semanales de encuentro, expresión y acompañamiento
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className={`bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 animate-fade-in-up flex flex-col h-full`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`bg-gradient-to-br ${program.color} p-6 sm:p-8 text-white relative overflow-hidden flex-shrink-0`}>
                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white rounded-full transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white rounded-full transform -translate-x-8 sm:-translate-x-12 translate-y-8 sm:translate-y-12"></div>
                    <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:animate-bounce-gentle">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" strokeWidth={1.5} />
                      </div>
                      {program.day && (
                        <div className="text-right">
                          <div className="font-bold text-sm sm:text-base lg:text-lg bg-white/20 px-2 sm:px-3 py-1 rounded-lg backdrop-blur-sm">
                            {program.day}
                          </div>
                          {program.time && (
                            <div className="text-xs sm:text-sm text-white/90 mt-1 font-medium">
                              {program.time}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="min-h-[80px] sm:min-h-[100px] flex flex-col justify-center">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 leading-tight">
                        {program.title}
                      </h3>
                      {program.subtitle && (
                        <p className="text-sm sm:text-base lg:text-lg text-white/90 italic font-medium">
                          {program.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base">
                      {program.description}
                    </p>
                  </div>
                  
                  {/* Action indicator */}
                  {/* <div className="mt-4 sm:mt-6 flex items-center text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    <span className="text-xs sm:text-sm font-medium">Más información</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-2xl mx-auto shadow-lg border border-white/20 hover:shadow-xl transition-all duration-500 group">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              ¿Te interesa participar?
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base leading-relaxed max-w-lg mx-auto">
              Todos nuestros espacios están abiertos a nuevos voluntarios y participantes.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-gradient-to-r from-[#77b68d] to-[#0a4e40] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-xs sm:text-sm lg:text-base group-hover:animate-pulse-glow focus:ring-4 focus:ring-[#77b68d]/30 active:scale-95"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
