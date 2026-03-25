import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TechFeature from '../components/TechFeature';

export const Technology = () => {
  const techFeatures = [
    {
      title: 'Motor de Gestión de Riesgos con IA',
      subtitle: 'Control de Riesgos con IA',
      icon: 'ri-brain-line',
      description: 'Modelo de red neuronal de grafos desarrollado internamente, fusionando análisis de datos multidimensionales, logrando evaluación de crédito precisa y alertas de riesgo. El sistema puede procesar factores de riesgo complejos en tiempo real, con una precisión de identificación de riesgos significativamente superior a los métodos tradicionales.',
      tags: ['Red Neuronal de Grafos', 'Datos Multimodales', 'Alertas en Tiempo Real'],
      image: './1f03f2d1bc172a00f1f8559a2a79038d.jpg'
    },
    {
      title: 'Sistema de Seguridad de Datos',
      subtitle: 'Seguridad de Datos',
      icon: 'ri-shield-keyhole-line',
      description: 'Adoptamos tecnología de cifrado extremo a extremo de nivel financiero, combinando las características inalterables de blockchain, construyendo un sistema de protección de seguridad de datos multinivel, asegurando la seguridad absoluta de la información del cliente y los datos de transacciones.',
      tags: ['Cifrado Extremo a Extremo', 'Registro en Blockchain', 'Computación Privada'],
      image: './8b85e1a4634aaad425a651361e5b867b.jpg',
      reverse: true
    },
    {
      title: 'Sistema de Aprobación Rápida',
      subtitle: 'Aprobación Rápida',
      icon: 'ri-speed-up-line',
      description: 'Plataforma de aprobación inteligente basada en arquitectura nativa en la nube, mediante la integración profunda de automatización de procesos y motor de decisiones, comprimiendo significativamente el ciclo de aprobación tradicional, logrando decisiones de crédito rápidas y precisas.',
      tags: ['Arquitectura Nativa en la Nube', 'Automatización de Procesos', 'Decisión en Tiempo Real'],
      image: './3c74342e2976cf948748f6b27e27266f.jpg'
    }
  ];

  const securityLevels = [
    { level: 'L1', icon: 'ri-lock-2-line', title: 'Cifrado de Transmisión', desc: 'El protocolo TLS 1.3 asegura la seguridad e integridad de todo el proceso de transmisión de datos' },
    { level: 'L2', icon: 'ri-database-lock-line', title: 'Protección de Almacenamiento', desc: 'Almacenamiento cifrado AES-256 de nivel financiero, aislamiento de datos y control fino de permisos de acceso' },
    { level: 'L3', icon: 'ri-fingerprint-2-line', title: 'Autenticación de Identidad', desc: 'Mecanismo de autenticación multifactor, verificación dual con reconocimiento biométrico y token dinámico' },
    { level: 'L4', icon: 'ri-file-search-line', title: 'Auditoría y Rastreo', desc: 'Registro de logs de operaciones de cadena completa, registro en blockchain asegura trazabilidad inalterable' }
  ];

  return (
    <>
      <Header currentPage="technology" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            alt="" 
            className="w-full h-full object-cover object-top opacity-40" 
            src="./1f03f2d1bc172a00f1f8559a2a79038d.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Tecnología Innovadora</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h1 className="font-serif text-5xl text-white mb-5 leading-tight">
              Tecnología Innovadora
              <br />
              <span className="text-gold-400">Impulsando el Futuro Financiero</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Con inteligencia artificial, big data y tecnología blockchain como núcleo, construimos infraestructura fintech inteligente, haciendo los servicios financieros más eficientes, transparentes y seguros, liderando la transformación digital de la industria.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gold-500 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'ri-server-line', value: '99.8%', label: 'Disponibilidad del Sistema' },
              { icon: 'ri-time-line', value: '<3s', label: 'Respuesta de Evaluación Inteligente' },
              { icon: 'ri-database-2-line', value: '2TB+', label: 'Procesamiento de Datos Diario' },
              { icon: 'ri-shield-check-line', value: '40%', label: 'Mejora en Precisión de Riesgos' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-900/20 mx-auto mb-3">
                  <i className={`${stat.icon} text-xl text-navy-900`}></i>
                </div>
                <p className="font-serif text-3xl text-navy-900 font-bold mb-1">{stat.value}</p>
                <p className="text-navy-700/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-600 text-xs font-medium tracking-widest uppercase">Tecnologías Principales</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h2 className="font-serif text-4xl text-navy-800 mb-4">Tres Capacidades Tecnológicas Principales</h2>
            <p className="text-navy-600/70 max-w-xl mx-auto">
              Capacidades fintech desarrolladas internamente y en iteración continua, proporcionando fuerte soporte técnico para el desarrollo del negocio
            </p>
          </div>
          
          <div className="space-y-16">
            {techFeatures.map((feature, idx) => (
              <TechFeature key={idx} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Security System */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Seguridad y Protección</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h2 className="font-serif text-4xl text-white mb-4">Sistema Integral de Protección de Seguridad</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityLevels.map((level, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-7 hover:border-gold-500/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-serif text-sm text-gold-400 font-bold bg-gold-500/20 px-2.5 py-1 rounded">
                    {level.level}
                  </span>
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gold-500/20">
                    <i className={`${level.icon} text-base text-gold-400`}></i>
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-3">{level.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{level.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Investment */}
      <section className="bg-gold-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-gold-500"></div>
                <span className="text-gold-600 text-xs font-medium tracking-widest uppercase">Inversión en I+D</span>
                <div className="w-8 h-px bg-gold-500"></div>
              </div>
              <h2 className="font-serif text-4xl text-navy-800 mb-6">Inversión Continua en I+D Tecnológico</h2>
              <p className="text-navy-600/70 text-base leading-relaxed mb-8">
                Invertimos continuamente una proporción importante de nuestros ingresos en innovación e I+D, hemos formado un equipo técnico compuesto por científicos e ingenieros de primer nivel, dedicados a crear capacidades fintech líderes en la industria, sentando una base técnica sólida para el desarrollo a largo plazo de la empresa.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Investigación en Inteligencia Artificial', value: 85 },
                  { label: 'Tecnología de Seguridad de Datos', value: 92 },
                  { label: 'Infraestructura de Computación en la Nube', value: 78 },
                  { label: 'Aplicaciones de Blockchain', value: 68 },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-navy-700 font-medium">{item.label}</span>
                      <span className="text-gold-600 font-semibold">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-gold-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-navy-800 to-gold-500 rounded-full"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Technology;