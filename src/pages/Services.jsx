import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Services = () => {
  const stats = [
    { icon: 'ri-user-3-line', value: '1.2M+', label: 'Clientes Personales Atendidos' },
    { icon: 'ri-building-4-line', value: '8,500+', label: 'Clientes Empresariales' },
    { icon: 'ri-map-pin-line', value: '28 Estados', label: 'Cobertura Nacional' },
    { icon: 'ri-shield-check-line', value: '18 años', label: 'Experiencia en Cumplimiento' }
  ];

  const processSteps = [
    { step: '01', title: 'Consulta de Necesidades', desc: 'Nuestros asesores profesionales comprenden profundamente sus necesidades de financiamiento y situación financiera, proporcionando recomendaciones preliminares.' },
    { step: '02', title: 'Preparación de Documentos', desc: 'El asesor le guía para preparar los documentos necesarios, asegurando que la información esté completa y precisa, mejorando la eficiencia de aprobación.' },
    { step: '03', title: 'Evaluación Inteligente', desc: 'El sistema de gestión de riesgos con IA combinado con evaluación integral del equipo profesional, completa rápidamente la evaluación de crédito y riesgos.' },
    { step: '04', title: 'Confirmación del Plan', desc: 'Proporcionamos el plan de préstamo final, publicando transparentemente todos los términos, garantizando plenamente el derecho a la información del cliente.' },
    { step: '05', title: 'Dispersión de Fondos', desc: 'Después de completar la firma, realizamos la transferencia de fondos rápidamente según lo acordado, satisfaciendo eficientemente las necesidades de financiamiento.' }
  ];

  return (
    <>
      <Header currentPage="services" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            alt="" 
            className="w-full h-full object-cover object-top opacity-25" 
            src="./home.jpg"          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gold-500"></div>
            <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Servicios Empresariales</span>
            <div className="w-8 h-px bg-gold-500"></div>
          </div>
          <h1 className="font-serif text-5xl text-white mb-5">Nuestros Servicios</h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Con 18 años de experiencia en el sector financiero, hemos construido un sistema integral de servicios de financiamiento que cubre clientes personales y empresariales,
            con profesionalismo, cumplimiento y eficiencia como núcleo, creando valor sustancial para cada cliente.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-navy-800 px-6 py-8 text-center hover:bg-navy-700 transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold-500/20 mx-auto mb-3">
                  <i className={`${stat.icon} text-xl text-gold-400`}></i>
                </div>
                <p className="font-serif text-3xl text-white font-bold mb-1">{stat.value}</p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Business */}
      <section className="bg-gold-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-600 text-xs font-medium tracking-widest uppercase">Servicios Principales</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h2 className="font-serif text-4xl text-navy-800 mb-4">Dos Sistemas de Negocio</h2>
            <p className="text-navy-600/70 max-w-xl mx-auto">
              Enfocados en las necesidades diferenciadas de financiamiento de clientes personales y empresariales, proporcionando soluciones financieras precisas y eficientes
            </p>
          </div>
          <div className="space-y-10">
            {/* Personal Loan */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gold-100 grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <img 
                  alt="Préstamos Personales" 
                  className="w-full h-full object-cover object-top" 
                  src='./11e3e03254eb0a4ba1b631e6522f84ef.jpg'
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/40 to-transparent"></div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <p className="text-gold-600 text-xs tracking-widest uppercase mb-2">Préstamos Personales</p>
                <h3 className="font-serif text-3xl text-navy-800 font-semibold mb-4">Préstamos Personales</h3>
                <p className="text-navy-600/70 text-base leading-relaxed mb-7">
                  Para las necesidades diversificadas de financiamiento de clientes personales, proporcionamos planes de préstamo personalizados que cubren consumo, vivienda, educación, atención médica y otros escenarios,
                  con respuesta rápida y acompañamiento profesional durante todo el proceso.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Evaluación de Crédito Científica y Precisa', 'Proceso de Aprobación Eficiente y Conveniente', 'Métodos de Pago Flexibles y Variados', 'Servicio Personalizado Uno a Uno'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-navy-700">
                      <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gold-500/20 shrink-0">
                        <i className="ri-check-line text-gold-600 text-xs"></i>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a 
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy-800 text-white rounded-lg font-semibold hover:bg-navy-700 transition-all duration-300 whitespace-nowrap self-start"
                  href="/personal-loan"
                >
                  Más información<i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>

            {/* Business Loan */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gold-100 grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-dense">
              <div className="relative h-80 lg:h-auto lg:col-start-2">
                <img 
                  alt="Préstamos Empresariales" 
                  className="w-full h-full object-cover object-top" 
                  src="./c8d1237988527934727a1b29be7a6235.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/40 to-transparent"></div>
              </div>
              <div className="p-12 flex flex-col justify-center lg:col-start-1 lg:row-start-1">
                <p className="text-gold-600 text-xs tracking-widest uppercase mb-2">Préstamos Empresariales</p>
                <h3 className="font-serif text-3xl text-navy-800 font-semibold mb-4">Préstamos Empresariales</h3>
                <p className="text-navy-600/70 text-base leading-relaxed mb-7">
                  Estrategias de financiamiento personalizadas para empresas de todos los tamaños, cubriendo capital de trabajo, inversión de proyectos, financiamiento de cadena de suministro y otras necesidades,
                  impulsando el crecimiento continuo y estable de la empresa.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Análisis Profundo de Diagnóstico de Necesidades', 'Plan de Financiamiento Personalizado', 'Equipo de Asesores Empresariales Exclusivo', 'Seguimiento Completo de Gestión Posterior'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-navy-700">
                      <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gold-500/20 shrink-0">
                        <i className="ri-check-line text-gold-600 text-xs"></i>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a 
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy-800 text-white rounded-lg font-semibold hover:bg-navy-700 transition-all duration-300 whitespace-nowrap self-start"
                  href="/business-loan"
                >
                  Más información<i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-600 text-xs font-medium tracking-widest uppercase">Proceso de Servicio</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h2 className="font-serif text-4xl text-navy-800 mb-4">Proceso de Servicio Transparente y Eficiente</h2>
            <p className="text-navy-600/70 max-w-xl mx-auto">
              Desde la consulta inicial hasta la dispersión de fondos, cada paso es claro y transparente, con acompañamiento profesional durante todo el proceso
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-300 to-transparent"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="w-12 h-12 rounded-full bg-navy-800 border-4 border-gold-100 flex items-center justify-center mx-auto mb-5 relative z-10">
                    <span className="text-gold-400 text-sm font-bold">{step.step}</span>
                  </div>
                  <h4 className="font-serif text-navy-800 font-semibold text-base mb-2">{step.title}</h4>
                  <p className="text-navy-600/60 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-white mb-4">Encuentre la Solución de Financiamiento Adecuada</h2>
          <p className="text-white/60 mb-8">
            Nuestros asesores profesionales diseñarán la mejor estrategia de financiamiento según sus necesidades específicas.
          </p>
          
            
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;