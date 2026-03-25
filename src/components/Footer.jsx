import React from 'react';

export const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'Visión General de Servicios', url: '#/services' },
      { name: 'Préstamos Personales', url: '#/personal-loan' },
      { name: 'Préstamos Empresariales', url: '#/business-loan' },
    ],
    about: [
      { name: 'Presentación de Marca', url: '#/' },
      { name: 'Equipo Directivo', url: '#/team' },
      { name: 'Tecnología Innovadora', url: '#/technology' },
      { name: 'Responsabilidad Social', url: '#/responsibility' },
    ],
    news: [
      { name: 'Educación Financiera', url: '#/knowledge' },
   
    ],
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a className="inline-block mb-5" href="/">
              <img 
                alt="Logo de la Empresa" 
                className="h-12 w-auto object-contain brightness-90" 
                src="./logo.png" 
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
            Av. Gómez Morin 955 , interior 403, Fraccionamiento Punto Central, C.P. 66279, San Pedro Garza García, Nuevo León
            </p>
            <div className="flex gap-3">
              
            </div>
          </div>

          {/* Links Sections */}
          {[
            { title: 'Servicios', links: footerLinks.services },
            { title: 'Sobre Nosotros', links: footerLinks.about },
            { title: 'Centro de Información', links: footerLinks.news },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-5">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      className="text-white/60 text-sm hover:text-white transition-colors"
                      href={link.url}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">© 2026 J&J Beyond, S.A. de C.V., SOFOM, E.N.R. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">Política de Privacidad</a>
            <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">Términos de Servicio</a>
            <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">Aviso de Riesgos</a>
          </div>
          <p className="text-white/30 text-xs">Todo el contenido de este sitio es solo para referencia, no constituye ningún consejo de inversión o préstamo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;