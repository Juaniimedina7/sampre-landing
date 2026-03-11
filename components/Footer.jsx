import { Facebook, Instagram, Youtube, Mail } from 'lucide-react'
import { logos, getImageUrl } from '@/lib/images'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#proximos-eventos', label: 'Próximos Eventos' },
    { href: '#autoridades', label: 'Autoridades' },
    { href: '#contacto', label: 'Contacto' },
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/sampre.ar', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/SAMPREoficial', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@samprearg8206', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={getImageUrl(logos.main)}
                alt={logos.main.alt}
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Sociedad Argentina de Medicina Prehospitalaria
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="w-5 h-5" />
              <a href="mailto:sampreweb@gmail.com" className="hover:text-primary-400 transition-colors">
                sampreweb@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} SAMPRE - Sociedad Argentina de Medicina Prehospitalaria. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
