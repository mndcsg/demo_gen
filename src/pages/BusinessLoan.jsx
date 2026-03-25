import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const BusinessLoan = () => {
  const stats = [
    { icon: 'ri-building-4-line', value: '8,500+', label: 'Empresas Atendidas' },
    { icon: 'ri-map-2-line', value: '32 Estados', label: 'Cobertura Nacional' },
    { icon: 'ri-thumb-up-line', value: '96%', label: 'Satisfacción del Cliente' },
    { icon: 'ri-medal-line', value: 'AAA', label: 'Calificación Crediticia' }
  ];

  const loanProducts = [
    {
      icon: 'ri-coins-line',
      title: 'Préstamo de Capital de Trabajo',
      desc: 'Reponga rápidamente el capital de trabajo necesario para las operaciones diarias de la empresa, alivie la presión financiera a corto plazo y asegure el funcionamiento continuo y estable del negocio.',
      tags: ['Financiamiento a Corto Plazo', 'Rotación Flexible', 'Dispersión Rápida']
    },
    {
      icon: 'ri-building-2-line',
      title: 'Préstamo para Activos Fijos',
      desc: 'Apoye la expansión de plantas, adquisición de equipos e inversión en infraestructura empresarial, ayudando a la empresa a mejorar la capacidad de producción y la competitividad central.',
      tags: ['Mediano y Largo Plazo', 'Financiamiento de Equipos', 'Mejora de Capacidad']
    },
    {
      icon: 'ri-links-line',
      title: 'Financiamiento de Cadena de Suministro',
      desc: 'Integre recursos de crédito aguas arriba y abajo en la cadena industrial, proporcionando planes eficientes de financiamiento de cadena de suministro para empresas centrales y sus proveedores y distribuidores.',
      tags: ['Cuentas por Cobrar', 'Financiamiento de Facturas', 'Financiamiento de Pedidos']
    },
    {
      icon: 'ri-rocket-line',
      title: 'Préstamo para Empresas de Tecnología',
      desc: 'Diseñado específicamente para empresas de innovación tecnológica, adopta métodos de garantía innovadores como garantía de propiedad intelectual, apoyando el desarrollo acelerado de empresas de alto crecimiento.',
      tags: ['Propiedad Intelectual', 'Empresas Tecnológicas', 'Financiamiento de Crecimiento']
    },
    {
      icon: 'ri-global-line',
      title: 'Financiamiento de Comercio Transfronterizo',
      desc: 'Apoye las necesidades especializadas de empresas de comercio de importación y exportación en liquidación internacional y financiamiento transfronterizo, ayudando a las empresas a expandirse globalmente.',
      tags: ['Importación y Exportación', 'Liquidación Internacional', 'Financiamiento Transfronterizo']
    },
    {
      icon: 'ri-recycle-line',
      title: 'Préstamo para Desarrollo Verde',
      desc: 'Proporcione apoyo de financiamiento especializado para proyectos ambientales como producción verde, transformación de ahorro de energía y energía renovable, construyendo juntos un futuro sostenible.',
      tags: ['Finanzas Verdes', 'Ahorro de Energía', 'Sostenibilidad']
    }
  ];

  const advantages = [
    {
      icon: 'ri-search-eye-line',
      title: 'Diagnóstico Profundo de Necesidades',
      desc: 'Consultores empresariales senior comprenden profundamente la situación operativa de la empresa, identifican con precisión las necesidades centrales de financiamiento y personalizan el plan óptimo.'
    },
    {
      icon: 'ri-shield-user-line',
      title: 'Equipo de Asesores Exclusivo',
      desc: 'Cada cliente empresarial tiene configurado un equipo de asesores exclusivo, proporcionando servicio profesional de ciclo completo desde el diseño del plan hasta la gestión posterior al préstamo.'
    },
    {
      icon: 'ri-exchange-dollar-line',
      title: 'Acuerdos de Pago Flexibles',
      desc: 'Según las características del ciclo de flujo de efectivo de la empresa, diseñe flexiblemente planes de pago, reduciendo efectivamente la presión de gestión de fondos.'
    },
    {
      icon: 'ri-timer-line',
      title: 'Mecanismo de Aprobación Eficiente',
      desc: 'La gestión inteligente de riesgos y la revisión profesional trabajan juntas, mejorando significativamente la eficiencia de aprobación y acelerando el proceso de dispersión de fondos.'
    }
  ];

  return (
    <>
      <Header currentPage="services" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            alt="" 
            className="w-full h-full object-cover object-top" 
            src="./home.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/75 to-navy-900/20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Préstamos Empresariales</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h1 className="font-serif text-5xl text-white mb-5 leading-tight">
              Préstamos Empresariales
              <br />
              <span className="text-gold-400">Impulsando el Crecimiento del Negocio</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Comprendemos profundamente las necesidades de financiamiento de las empresas en diferentes etapas de desarrollo, 
              proporcionando soluciones diversificadas de financiamiento empresarial que cubren capital de trabajo, activos fijos, 
              cadena de suministro y tecnología, ayudando a las empresas a crecer de manera continua y estable.
            </p>
            <div className="flex flex-wrap gap-4">
            
              <a 
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white rounded-lg font-medium hover:border-gold-400 hover:text-gold-400 transition-all duration-300 whitespace-nowrap"
                href="/services"
              >
                Conozca la Visión General<i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-800 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
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

      {/* Loan Products */}
      <section className="bg-gold-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-600 text-xs font-medium tracking-widest uppercase">Soluciones de Financiamiento</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h2 className="font-serif text-4xl text-navy-800 mb-4">Seis Soluciones de Financiamiento Empresarial</h2>
            <p className="text-navy-600/70 max-w-xl mx-auto">
              Para las necesidades de financiamiento en diferentes etapas del ciclo de vida empresarial, 
              proporcionamos apoyo financiero con coincidencia precisa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {loanProducts.map((product, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-8 border border-gold-100 hover:border-gold-400 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-navy-800 mb-5 group-hover:bg-gold-500 transition-colors duration-300">
                  <i className={`${product.icon} text-2xl text-gold-400 group-hover:text-navy-900`}></i>
                </div>
                <h3 className="font-serif text-navy-800 font-semibold text-xl mb-3">{product.title}</h3>
                <p className="text-navy-600/60 text-sm leading-relaxed mb-5">{product.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-1 bg-gold-50 text-gold-700 text-xs rounded-full border border-gold-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-gold-500"></div>
                <span className="text-gold-600 text-xs font-medium tracking-widest uppercase">Ventajas Diferenciales</span>
                <div className="w-8 h-px bg-gold-500"></div>
              </div>
              <h2 className="font-serif text-4xl text-navy-800 mb-6 leading-snug">
                Socio Financiero Profesional que
                <span className="text-gold-600"> Comprende Profundamente las Necesidades Empresariales</span>
              </h2>
              <div className="space-y-5">
                {advantages.map((adv, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold-500/15 shrink-0">
                      <i className={`${adv.icon} text-lg text-gold-600`}></i>
                    </div>
                    <div>
                      <h4 className="text-navy-800 font-semibold text-sm mb-1">{adv.title}</h4>
                      <p className="text-navy-600/60 text-sm leading-relaxed">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                alt="Servicio de Préstamos Empresariales" 
                className="w-full h-full object-cover object-top" 
                src="https://via.placeholder.com/700x600/1B3A57/FFFFFF?text=Business+Meeting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="bg-gold-50 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start gap-3 bg-white border border-gold-200 rounded-xl px-6 py-5">
            <i className="ri-information-line text-gold-500 text-xl mt-0.5 shrink-0"></i>
            <p className="text-navy-600/70 text-sm leading-relaxed">
              <strong className="text-navy-700">Aviso de Riesgo:</strong>
              El financiamiento empresarial conlleva riesgos de mercado. Las empresas prestatarias deben evaluar completamente 
              su capacidad de pago y situación operativa, planificar racionalmente la escala de financiamiento, 
              asegurar que el uso de fondos cumpla con los propósitos acordados y mantener un buen historial crediticio.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-white mb-4">Encuentre la Mejor Solución de Financiamiento para su Empresa</h2>
          <p className="text-white/60 mb-8">Nuestro equipo de expertos en finanzas empresariales está siempre disponible para proporcionarle servicio de consulta exclusivo</p>
          
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BusinessLoan;