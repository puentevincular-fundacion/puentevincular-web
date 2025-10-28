import { Users, ChefHat, Heart } from 'lucide-react';

const helpOptions = [
  {
    id: 1,
    icon: Users,
    title: '¡Podés Sumarte Como Voluntarix!',
    description: 'Participá en nuestras actividades semanales: domingos compartiendo la cena, miércoles en el programa de radio, o sumándote a nuestras comisiones internas para la administración de la fundación.',
    highlights: [
      'Actividad dominical en plazas y espacios públicos',
      'Radio comunitaria los miércoles',
      'Espacio de ajedrez y recreación'
    ],
    cta: 'Ser Voluntarix',
    color: 'from-[#77b68d] to-[#0a4e40]',
    link: '#contact'
  },
  {
    id: 2,
    icon: ChefHat,
    title: 'Cocinerxs',
    description: 'Lxs cocinerxs tienen un rol importantísimo en la tarea de la fundación. Son quienes facilitan las viandas para que cada domingo podamos salir a compartir la cena con las personas en situación de calle.',
    highlights: [
      'Cocinás según tus posibilidades',
      'Podés hacerlo solx, con amigos o en familia',
      'Rol fundamental para la actividad dominical'
    ],
    cta: 'Quiero Cocinar',
    color: 'from-[#0a4e40] to-[#77b68d]',
    link: '#contact'
  },
  {
    id: 3,
    icon: Heart,
    title: 'Socixs',
    description: 'Sabemos que muchas veces las circunstancias personales no permiten sumarse como voluntarix, pero eso no significa que no puedas acompañarnos en la tarea y ser parte de la fundación.',
    highlights: [
      'Aporte económico mensual',
      'A través de Mercado Pago o Paypertic',
      'Acompañamiento continuo a nuestros proyectos'
    ],
    cta: 'Ver Opciones de Donación',
    color: 'from-[#77b68d] to-[#0a4e40]',
    link: '#donations'
  }
];

export default function HowToHelp() {
  return (
    <section id="help" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Cómo Ayudar
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Hay muchas formas de ser parte de nuestra fundación. Elegí la que mejor se adapte
            a tus posibilidades y sumáte a construir una sociedad más justa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {helpOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={option.id}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group transform hover:-translate-y-2 animate-fade-in-up flex flex-col h-full"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`bg-gradient-to-br ${option.color} p-6 sm:p-8 text-white relative overflow-hidden flex-shrink-0`}>
                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full transform translate-x-10 -translate-y-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full transform -translate-x-8 translate-y-8"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="p-2 sm:p-3 bg-white/20 rounded-xl backdrop-blur-sm inline-block mb-4 group-hover:animate-bounce-gentle">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={1.5} />
                    </div>
                    <div className="min-h-[60px] sm:min-h-[80px] flex items-center">
                      <h3 className="text-xl sm:text-2xl font-bold leading-tight">{option.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="flex-1 mb-6">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {option.description}
                    </p>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <ul className="space-y-3">
                      {option.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-[#77b68d] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    {option.link ? (
                      <a
                        href={option.link}
                        className="block w-full bg-gradient-to-r from-[#77b68d] to-[#0a4e40] text-white py-3 sm:py-4 rounded-xl font-semibold hover:from-[#77b68d]/90 hover:to-[#0a4e40]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center text-sm sm:text-base focus:ring-4 focus:ring-[#77b68d]/30 active:scale-98 group"
                      >
                        <span className="flex items-center justify-center">
                          {option.cta}
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </a>
                    ) : (
                      <button className="w-full bg-gradient-to-r from-[#77b68d] to-[#0a4e40] text-white py-3 sm:py-4 rounded-xl font-semibold hover:from-[#77b68d]/90 hover:to-[#0a4e40]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-sm sm:text-base focus:ring-4 focus:ring-[#77b68d]/30 active:scale-98 group">
                        <span className="flex items-center justify-center">
                          {option.cta}
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#e9ebb1]/30 via-[#e9ebb1]/20 to-[#77b68d]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#77b68d]/30 backdrop-blur-sm hover:shadow-lg transition-all duration-500 animate-fade-in-up"
             style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#77b68d] to-[#0a4e40] rounded-full flex items-center justify-center mr-3">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-[#0a4e40]">¿Querés ser parte?</span>
          </div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Contactanos o compartí esta información con alguien a quien le pueda interesar. 
            <span className="font-semibold text-[#0a4e40]"> Cada gesto cuenta, cada vínculo suma.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
