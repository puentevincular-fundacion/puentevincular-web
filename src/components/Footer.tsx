import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="w-8 h-8" fill="currentColor" />
              <span className="text-2xl font-bold">Puente Vincular</span>
            </div>
            <p className="text-gray-400 leading-relaxed italic mb-4">
              "Tendiendo puentes, creando vínculos"
            </p>
            <p className="text-gray-400 leading-relaxed">
              Fundación comprometida con la dignidad y los derechos de las personas
              en situación de calle.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#77b68d] transition">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-[#77b68d] transition">
                  Programas
                </a>
              </li>
              <li>
                <a href="#help" className="text-gray-400 hover:text-[#77b68d] transition">
                  Cómo Ayudar
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#77b68d] transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#77b68d] mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Rondeau 337<br />Mendoza, Argentina
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#77b68d] mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <a href="tel:+5492616413390" className="hover:text-[#77b68d] transition block">
                    +54 9 261 641-3390
                  </a>
                  <a href="tel:02616413390" className="hover:text-[#77b68d] transition block">
                    0261 15-641-3390
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#77b68d] mt-1 flex-shrink-0" />
                <a
                  href="mailto:puentevincular@gmail.com"
                  className="text-gray-400 hover:text-[#77b68d] transition break-all"
                >
                  puentevincular@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Fundación Puente Vincular. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Construyendo una sociedad más justa, un vínculo a la vez.
          </p>
          <div className="mt-4 space-y-1">
            <p className="text-gray-600 text-xs">
              Sugerencias o consultas: <a href="mailto:virtual.hache@gmail.com" className="hover:text-gray-400 transition">virtual.hache@gmail.com</a>
            </p>
            {/* <p className="text-gray-600 text-xs">
              Desarrollado por <a href="mailto:virtual.hache@gmail.com" className="hover:text-gray-400 transition">virtual.hache@gmail.com</a>
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
