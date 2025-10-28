import { Heart, CreditCard } from 'lucide-react';

export default function Donations() {
  return (
    <section id="donations" className="py-20 bg-gradient-to-b from-white to-[#e9ebb1]/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-[#77b68d]" fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Donaciones
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tu donación es el sostén económico fundamental para la continuidad de nuestros proyectos.
            Cada aporte nos permite seguir tendiendo puentes y creando vínculos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-[#77b68d] to-[#0a4e40] rounded-full flex items-center justify-center">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Mercado Pago
            </h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              Suscripción mensual a través de Mercado Pago. Acompañá nuestros proyectos de forma continua.
            </p>
            <a
              href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c93808483727fba018381390a12077e"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-[#77b68d] to-[#0a4e40] text-white py-4 rounded-lg font-semibold text-lg hover:from-[#77b68d]/90 hover:to-[#0a4e40]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
            >
              Donar con Mercado Pago
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-[#0a4e40] to-[#77b68d] rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" fill="currentColor" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Paypertic
            </h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              Realizá tu donación a través de Paypertic. Cada aporte cuenta para seguir adelante.
            </p>
            <a
              href="https://puentevincular.paypertic.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-[#0a4e40] to-[#77b68d] text-white py-4 rounded-lg font-semibold text-lg hover:from-[#0a4e40]/90 hover:to-[#77b68d]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
            >
              Donar con Paypertic
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center bg-white rounded-2xl shadow-lg p-8 border border-[#77b68d]/20">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Por qué es importante tu donación?
          </h4>
          <ul className="text-left space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#77b68d] mr-3 mt-1 text-xl">•</span>
              <span>Permite financiar las viandas que compartimos cada domingo con personas en situación de calle</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#77b68d] mr-3 mt-1 text-xl">•</span>
              <span>Sostiene nuestros espacios de encuentro: radio comunitaria, ajedrez y recreación</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#77b68d] mr-3 mt-1 text-xl">•</span>
              <span>Contribuye a los gastos operativos de la fundación</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#77b68d] mr-3 mt-1 text-xl">•</span>
              <span>Nos permite expandir nuestros programas y alcanzar a más personas</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
