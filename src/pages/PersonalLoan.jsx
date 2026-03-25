import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const PersonalLoan = () => {
  const loanProducts = [
    {
      icon: 'ri-home-line',
      title: 'Préstamo para Vivienda',
      desc: 'Apoyamos necesidades de consumo para mejora de vivienda, renovación y decoración, con aprobación eficiente y pago flexible, ayudándole a cumplir su sueño de un hogar propio.'
    },
    {
      icon: 'ri-car-line',
      title: 'Préstamo para Automóvil',
      desc: 'Cubrimos compra de vehículos nuevos y intercambio de usados, con evaluación profesional del valor del vehículo, proporcionando servicios de financiamiento automotriz considerados y convenientes.'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Préstamo para Educación',
      desc: 'Apoyamos inversión en aprendizaje para licenciatura, posgrado y capacitación profesional, impulsando el desarrollo personal, sin permitir que las tarifas escolares se conviertan en un obstáculo para el progreso.'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Préstamo para Salud',
      desc: 'Proporcionamos apoyo de financiamiento especializado para gastos de salud personales y familiares, garantizando que la protección de la salud no se vea limitada por fondos.'
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Préstamo para Negocios',
      desc: 'Proporcionamos apoyo flexible de capital de trabajo para operadores individuales y pequeñas empresas, con aprobación rápida, impulsando el inicio y desarrollo estable de negocios personales.'
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Préstamo de Consumo General',
      desc: 'Satisfacemos necesidades diversas de consumo de vida como turismo, bodas, electrónicos y electrodomésticos, planificando racionalmente el ritmo de consumo y mejorando la calidad de vida.'
    }
  ];

  const advantages = [
    { icon: 'ri-speed-line', title: 'Aprobación Eficiente', desc: 'Impulsado por sistema inteligente de gestión de riesgos, comprimimos significativamente el tiempo de espera de aprobación, respondiendo rápidamente a sus necesidades de financiamiento.' },
    { icon: 'ri-file-text-line', title: 'Documentación Simplificada', desc: 'Optimizamos el proceso de solicitud, enfocándonos en documentos centrales, reduciendo el umbral de solicitud, haciendo que el financiamiento ya no sea tedioso.' },
    { icon: 'ri-exchange-line', title: 'Pago Flexible', desc: 'Proporcionamos múltiples métodos de pago como cuotas iguales e interés primero con principal después, puede elegir flexiblemente según su flujo de efectivo.' },
    { icon: 'ri-customer-service-line', title: 'Servicio Personalizado', desc: 'Asesor exclusivo uno a uno lo acompaña durante todo el proceso, desde la preparación de documentos hasta la dispersión de fondos, con guía considerada.' }
  ];

  const processSteps = [
    { step: '01', icon: 'ri-customer-service-2-line', title: 'Consulta en Línea', desc: 'Contacte a su asesor exclusivo, explique sus necesidades de financiamiento y objetivos esperados' },
    { step: '02', icon: 'ri-file-list-3-line', title: 'Enviar Documentos', desc: 'Prepare y envíe los documentos relacionados requeridos para la solicitud bajo la guía del asesor' },
    { step: '03', icon: 'ri-cpu-line', title: 'Evaluación Inteligente', desc: 'El sistema y el equipo profesional completan conjuntamente la evaluación de crédito y la revisión de riesgos' },
    { step: '04', icon: 'ri-bank-card-line', title: 'Dispersión de Fondos', desc: 'Después de completar la firma, complete rápidamente la transferencia de fondos según lo acordado' }
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
            src="./home.jpg"          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/75 to-navy-900/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Préstamos Personales</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h1 className="font-serif text-5xl text-white mb-5 leading-tight">
              Préstamos Personales
              <br />
              <span className="text-gold-400">Financiamiento Profesional, Hacemos Realidad tus Sueños</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Orientados a las necesidades del cliente, proporcionamos planes de financiamiento personal que cubren múltiples escenarios como consumo, vivienda, educación y atención médica,
              con aprobación eficiente, proceso transparente y servicio profesional, para que cada cliente tenga un sólido respaldo financiero para sus sueños.
            </p>
            
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-gold-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-600 text-xs font-medium tracking-widest uppercase">Nuestros Productos</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h2 className="font-serif text-4xl text-navy-800 mb-4">Productos Diversificados de Préstamos Personales</h2>
            <p className="text-navy-600/70 max-w-xl mx-auto">
              Cubrimos necesidades de financiamiento de todos los escenarios de vida y desarrollo personal, con coincidencia precisa y servicio profesional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanProducts.map((product, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-8 border border-gold-100 hover:border-gold-300 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-navy-800 mb-5 group-hover:bg-gold-500 transition-colors duration-300">
                  <i className={`${product.icon} text-xl text-gold-400 group-hover:text-navy-900`}></i>
                </div>
                <h3 className="font-serif text-navy-800 font-semibold text-lg mb-3">{product.title}</h3>
                <p className="text-navy-600/60 text-sm leading-relaxed">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Ventajas del Servicio</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h2 className="font-serif text-4xl text-white mb-4">Por Qué Elegirnos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gold-500/20 mb-5">
                  <i className={`${item.icon} text-xl text-gold-400`}></i>
                </div>
                <h3 className="text-white font-semibold text-base mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl text-navy-800 mb-4">Proceso de Solicitud</h2>
            <p className="text-navy-600/60">Pasos de solicitud simples y claros, con guía profesional durante todo el proceso</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-right mb-3">
                  <span className="font-serif text-5xl text-gold-200 font-bold">{step.step}</span>
                </div>
                <div className="border-t-2 border-gold-400 pt-5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800 mb-4">
                    <i className={`${step.icon} text-lg text-gold-400`}></i>
                  </div>
                  <h4 className="font-serif text-navy-800 font-semibold text-lg mb-2">{step.title}</h4>
                  <p className="text-navy-600/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="bg-gold-50 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-start gap-3 bg-white border border-gold-200 rounded-xl px-6 py-5 text-left">
            <i className="ri-information-line text-gold-500 text-xl mt-0.5 shrink-0"></i>
            <p className="text-navy-600/70 text-sm leading-relaxed">
              <strong className="text-navy-700">Aviso de Riesgo:</strong> Los préstamos conllevan riesgos, solicite con precaución. Le recomendamos organizar racionalmente el monto y plazo del préstamo según su capacidad real de pago,
              evitando el sobreendeudamiento que pueda afectar la salud financiera personal y familiar. Si tiene alguna pregunta, consulte a nuestros asesores profesionales de J&J Beyond.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-white mb-4">Comience su Viaje de Financiamiento</h2>
          <p className="text-white/60 mb-8">Nuestros asesores profesionales le proporcionan planes personalizados, servicio sin preocupaciones durante todo el proceso</p>
          
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PersonalLoan;