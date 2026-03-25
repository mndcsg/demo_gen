import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import ImageTextCard from '../components/ImageTextCard';
import FeatureGrid from '../components/FeatureGrid';

export const Home = () => {
  return (
    <>
      <Header currentPage="home" />
      
      {/* Hero Section */}
      <HeroBanner 
        title={
          <>
            Para su futuro
            <br />
            <span className="text-gold-400">Soluciones financieras</span>
            <br />
            profesionales
          </>
        }
        subtitle="J&J Beyond cuenta con más de 18 años de experiencia en el sector financiero, con un sistema riguroso de gestión de riesgos y un equipo de servicio profesional, brindando soporte de financiamiento integral y confiable para clientes personales y empresariales."
        ctaPrimary={{ text: 'Conozca nuestros servicios', link: '#/services' }}
        backgroundImage={'./back.jpg'}
      />

      {/* Trust Badges */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <FeatureGrid 
            features={[
              {
                icon: 'ri-shield-check-line',
                title: 'Operación Cumplida',
                desc: 'Cumplimos estrictamente con los requisitos regulatorios, establecemos un sistema interno de cumplimiento perfecto, cada operación se realiza de manera estable dentro del marco legal.'
              },
              {
                icon: 'ri-bar-chart-grouped-line',
                title: 'Profesional y Confiable',
                desc: '18 años de experiencia en la industria, contamos con un sistema de gestión de riesgos líder en la industria y un equipo de élite, brindando servicios financieros rigurosos y profesionales a cada cliente.'
              },
              {
                icon: 'ri-user-heart-line',
                title: 'Cliente Primero',
                desc: 'Centrados en los intereses del cliente, proceso de servicio transparente y justo, protegiendo sus derechos de manera integral, estableciendo relaciones de confianza a largo plazo.'
              }
            ]}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gold-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-600 text-xs font-medium tracking-widest uppercase">Servicios Principales</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h2 className="font-serif text-4xl text-navy-800 mb-4">Sistema Profesional de Servicios Financieros</h2>
            <p className="text-navy-600/70 text-lg max-w-xl mx-auto">
              Cubrimos las necesidades de financiamiento durante todo el ciclo de vida personal y empresarial, proporcionando soluciones financieras personalizadas
            </p>
          </div>
          
          <ImageTextCard 
            items={[
              {
                badge: 'Préstamos Personales',
                title: 'Préstamos Personales',
                desc: 'Soluciones de financiamiento personal flexibles y diversas, cubriendo diversos escenarios de necesidades como consumo, vivienda y educación, respuesta rápida, profesionalismo durante todo el proceso.',
                image: './11e3e03254eb0a4ba1b631e6522f84ef.jpg',
                clickTo: '#/personal-loan'
              },
              {
                badge: 'Préstamos Empresariales',
                title: 'Préstamos Empresariales',
                desc: 'Estrategias de financiamiento personalizadas para cada etapa de crecimiento empresarial, desde capital de trabajo hasta inversión de proyectos, apoyando completamente el desarrollo sostenible de la empresa.',
                image: './c8d1237988527934727a1b29be7a6235.jpg',
                clickTo: '#/business-loan'
              }
            ]}
          />
          
          <div className="text-center mt-10">
            <a 
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-navy-800 text-navy-800 rounded-lg font-semibold hover:bg-navy-800 hover:text-white transition-all duration-300"
              href="#/services"
            >
              Ver todos los servicios<i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            alt="" 
            className="w-full h-full object-cover object-top" 
            src="https://via.placeholder.com/1920x700/1B3A57/FFFFFF?text=Background"
          />
          <div className="absolute inset-0 bg-navy-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-gold-500"></div>
                <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Por Qué Elegirnos</span>
                <div className="w-8 h-px bg-gold-500"></div>
              </div>
              <h2 className="font-serif text-4xl text-white mb-6 leading-tight">
                18 años de dedicación,<br />
                solo para ofrecer servicios financieros
                <span className="text-gold-400">en los que puede confiar</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Entendemos que los servicios financieros afectan su vida y futuro. Por eso, nos exigimos con los más altos estándares, buscando ser profesionales, confiables y transparentes en cada detalle.
              </p>
              <a 
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 text-navy-900 rounded-lg font-semibold hover:bg-gold-400 transition-all duration-300"
                href="#/team"
              >
                Conozca a nuestro equipo<i className="ri-arrow-right-line"></i>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: 'ri-safe-2-line', title: 'Amplia Experiencia en la Industria', desc: '18 años enfocados en el sector financiero, la profunda experiencia en la industria construye una capacidad precisa de juicio de riesgos y perspicacia del mercado.' },
                { icon: 'ri-team-line', title: 'Equipo Profesional de Élite', desc: 'Reunimos los mejores talentos en finanzas, derecho y tecnología nacionales e internacionales, configurando un asesor de servicio exclusivo para cada cliente.' },
                { icon: 'ri-cpu-line', title: 'Impulsado por Tecnología Inteligente', desc: 'Motor de gestión de riesgos con IA desarrollado internamente, logrando evaluación de crédito precisa y eficiente y gestión de riesgos, mejorando la eficiencia del servicio.' },
                { icon: 'ri-file-shield-2-line', title: 'Sistema de Cumplimiento Estricto', desc: 'Implementación completa de requisitos regulatorios de cumplimiento, proceso de negocio transparente y justo, protegiendo los derechos legítimos de cada cliente.' },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold-500/20 mb-4">
                    <i className={`${item.icon} text-xl text-gold-400`}></i>
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Preview */}
      <section className="bg-gold-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                alt="Tecnología Innovadora" 
                className="w-full h-full object-cover object-top" 
                src="./1f03f2d1bc172a00f1f8559a2a79038d.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="text-gold-400 text-xs tracking-widest uppercase">Innovación</span>
                <h3 className="font-serif text-2xl text-white font-semibold mt-1">La Tecnología Impulsa el Futuro</h3>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-gold-500"></div>
                <span className="text-gold-600 text-xs font-medium tracking-widest uppercase">Tecnología Innovadora</span>
                <div className="w-8 h-px bg-gold-500"></div>
              </div>
              <h2 className="font-serif text-4xl text-navy-800 mb-5">
                Plataforma Fintech Inteligente
                <br />
                <span className="text-gold-600">Impulsada por IA</span>
              </h2>
              <p className="text-navy-600/70 text-base leading-relaxed mb-8">
                Motor inteligente de gestión de riesgos desarrollado internamente, fusionando big data, inteligencia artificial y tecnología blockchain, logrando evaluación de crédito precisa, monitoreo de riesgos en tiempo real y protección segura de datos, haciendo los servicios financieros más eficientes, transparentes y seguros.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { value: '99.8%', label: 'Seguridad de Datos' },
                  { value: '<3s', label: 'Tiempo de Aprobación' },
                  { value: '40%↑', label: 'Precisión de Riesgos' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 border-gold-500 pl-4">
                    <p className="font-serif text-2xl text-navy-800 font-bold">{stat.value}</p>
                    <p className="text-navy-500/70 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <a 
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy-800 text-white rounded-lg font-semibold hover:bg-navy-700 transition-all duration-300"
                href="#/technology"
              >
                Explore Nuestras Capacidades Tecnológicas<i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-800 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-1 bg-gold-500 mx-auto mb-8 rounded-full"></div>
          <h2 className="font-serif text-4xl text-white mb-5">¿Listo para comenzar su viaje financiero?</h2>
          <p className="text-white/60 text-base mb-10 max-w-xl mx-auto">
            Ya sea para financiamiento personal o crecimiento empresarial, nuestros asesores profesionales están siempre disponibles para proporcionarle soluciones exclusivas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            
            <a 
              className="px-9 py-4 border border-white/30 text-white rounded-lg font-medium hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
              href="#/knowledge"
            >
              Conozca Educación Financiera
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;