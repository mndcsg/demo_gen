import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Knowledge = () => {
  

  const articles = [
    {
      title: '¿Qué es la Puntuación de Crédito Personal? Análisis de los Factores Clave que Influyen',
      desc: 'La puntuación de crédito es una herramienta fundamental que utilizan las instituciones financieras para evaluar la capacidad de pago de los prestatarios. Comprender los factores clave que influyen en su puntuación de crédito le ayudará a mantener una salud crediticia óptima, mejorar sus posibilidades de aprobación de préstamos y obtener mejores tasas de interés. En este artículo, exploramos en detalle cada componente del sistema de evaluación crediticia.',
      date: '2025-11-20',
      readTime: '5 min de lectura',
      category: 'Fundamentos de Crédito',
      hot: true,
      image: './917b559efa4bd440edbf5a5b9521e542.jpg'
    },
    {
      title: 'Guía Completa del Proceso de Solicitud de Préstamos: Desde la Presentación hasta la Aprobación',
      desc: 'Conocer cada etapa del proceso estándar de solicitud de préstamos es esencial para una experiencia financiera sin contratiempos. Esta guía detallada le ayudará a comprender los requisitos de documentación, los criterios de evaluación del prestamista, los plazos de aprobación y los momentos clave de desembolso. Le proporcionamos consejos prácticos para preparar su solicitud de manera eficiente y aumentar significativamente sus probabilidades de éxito en la obtención de financiamiento.',
      date: '2025-11-15',
      readTime: '7 min de lectura',
      category: 'Conocimiento de Préstamos',
      hot: true,
      image: './c6606d730e9c030bda0a5696714bbeda.jpg'
    },
    {
      title: 'Canales de Financiamiento para PYMES: Elija la Opción Más Adecuada para su Empresa',
      desc: 'Las pequeñas y medianas empresas tienen múltiples opciones de financiamiento disponibles. Desde préstamos bancarios tradicionales y financiamiento de cadena de suministro hasta financiamiento de capital, este artículo proporciona un análisis sistemático de los canales de financiamiento principales disponibles para PYMES. Examinamos los escenarios de aplicación, ventajas, desventajas, requisitos de elegibilidad y consideraciones importantes de cada opción para ayudarle a tomar la decisión más informada para el crecimiento sostenible de su negocio.',
      date: '2025-11-08',
      readTime: '10 min de lectura',
      category: 'Finanzas Empresariales',
      hot: false,
      image: './9f53c1014c05f60eb7e14363dc5f1783.jpg'
    },
    {
      title: '12 Señales Clave para Identificar Fraudes Financieros y Proteger sus Activos',
      desc: 'Con las tácticas de fraude financiero evolucionando constantemente, es más importante que nunca saber cómo identificarlas y protegerse. Este artículo compila 12 señales de advertencia comunes de estafas financieras, incluyendo llamadas sospechosas, ofertas demasiado buenas para ser verdad, presión para actuar rápidamente y solicitudes de información personal sensible. Le proporcionamos estrategias prácticas de prevención y los pasos a seguir si sospecha que ha sido víctima de fraude, ayudándole a salvaguardar su seguridad financiera.',
      date: '2025-10-30',
      readTime: '6 min de lectura',
      category: 'Prevención de Riesgos',
      hot: true,
      image: './8295d78336ca62735f7c377ba1866325.jpg'
    },
    {
      title: 'Gestión Científica de Deudas: Cómo Crear un Plan de Pago Razonable para Mantener su Salud Financiera',
      desc: 'Una gestión adecuada de la deuda es la base de la estabilidad financiera a largo plazo. Este artículo presenta estrategias de pago principales como el método de la bola de nieve y el método de la avalancha, explicando cuándo usar cada uno según su situación personal. Le guiaremos a través del proceso de priorización de pagos, negociación con acreedores, consolidación de deudas y creación de un presupuesto sostenible que le permita reducir su carga financiera mientras mantiene su calidad de vida.',
      date: '2025-10-22',
      readTime: '8 min de lectura',
      category: 'Planificación Financiera',
      hot: false,
      image: './3c74342e2976cf948748f6b27e27266f.jpg'
    },
    {
      title: 'Diferencias Esenciales entre Préstamos Hipotecarios y Préstamos Personales: Guía de Selección',
      desc: 'Los préstamos hipotecarios y los préstamos personales tienen propósitos, estructuras y requisitos diferentes. Comprender las distinciones clave en términos de montos disponibles, plazos de pago, tasas de interés, costos asociados y niveles de riesgo le permitirá tomar decisiones de financiamiento más inteligentes. Este artículo compara exhaustivamente ambas opciones, proporcionando escenarios de uso recomendados y criterios de selección para ayudarle a elegir el producto financiero que mejor se adapte a sus necesidades específicas.',
      date: '2025-10-15',
      readTime: '5 min de lectura',
      category: 'Fundamentos de Crédito',
      hot: false,
      image: './7ac2273daebda54bbcdbd2576957d187.jpg'
    },
    {
      title: 'Reglas de Oro para la Gestión del Capital de Trabajo Empresarial: Prevenga la Ruptura de la Cadena de Flujo de Efectivo',
      desc: 'La gestión efectiva del capital de trabajo es fundamental para la operación estable y el crecimiento de cualquier empresa. Este artículo comparte estrategias esenciales incluyendo técnicas de pronóstico de flujo de efectivo, mejores prácticas para la gestión de cuentas por cobrar, optimización de cuentas por pagar, y establecimiento de reservas de emergencia. Aprenda cómo construir un sistema financiero empresarial robusto que pueda resistir fluctuaciones del mercado y aprovechar oportunidades de crecimiento sin comprometer la liquidez operativa.',
      date: '2025-10-05',
      readTime: '9 min de lectura',
      category: 'Finanzas Empresariales',
      hot: false,
      image: './2b65127e5d0b3d56195fd73a8c3762b1.jpg'
    },
    {
      title: 'Introducción a la Asignación de Activos Familiares: Equilibrio entre Préstamos y Ahorro',
      desc: 'Mantener una estructura de activos familiares saludable mientras se satisfacen las necesidades de financiamiento requiere planificación estratégica. Este artículo proporciona recomendaciones prácticas desde tres dimensiones clave: relación deuda-activo, fondo de emergencia y planificación a largo plazo. Exploramos cómo determinar el nivel adecuado de endeudamiento, cuánto ahorrar para imprevistos, y cómo equilibrar las obligaciones financieras actuales con los objetivos de riqueza futura para lograr estabilidad y crecimiento financiero sostenible para su familia.',
      date: '2025-09-28',
      readTime: '7 min de lectura',
      category: 'Planificación Financiera',
      hot: false,
      image: './81912b659a5ad51bbb4ad58a0ed620dd.jpg'
    }
  ];



  const hotTopics = ['Puntuación de Crédito', 'Finanzas Personales', 'Prevención de Fraudes', 'Financiamiento Empresarial', 'Gestión de Deudas', 'Conciencia de Riesgos', 'Reporte de Crédito', 'Conocimiento de Tasas de Interés'];

  return (
    <>
      <Header currentPage="knowledge" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img 
            alt="" 
            className="w-full h-full object-cover object-top" 
            src="./3c74342e2976cf948748f6b27e27266f.jpg"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gold-500"></div>
            <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Educación Financiera</span>
            <div className="w-8 h-px bg-gold-500"></div>
          </div>
          <h1 className="font-serif text-5xl text-white mb-5">Centro de Conocimiento Financiero</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Mejore su alfabetización financiera y tome decisiones financieras más inteligentes.
            Proporcionamos contenido educativo financiero confiable, profesional y fácil de entender de J&J Beyond.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gold-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {/* Articles */}
            <div className="flex-1 min-w-0">
             

              {/* Article Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {articles.map((article, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-xl overflow-hidden border border-gold-100 hover:-translate-y-1 transition-transform duration-300 group cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        alt={article.title} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                        src={article.image}
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2.5 py-1 bg-navy-800/80 text-white text-xs rounded-full">
                          {article.category}
                        </span>
                        {article.hot && (
                          <span className="px-2.5 py-1 bg-gold-500 text-navy-900 text-xs rounded-full font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-navy-400 mb-3">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="font-serif text-navy-800 font-semibold text-base leading-snug mb-3 group-hover:text-gold-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-navy-600/60 text-sm leading-relaxed line-clamp-2">{article.desc}</p>
                      <div className="mt-4 pt-4 border-t border-gold-50 flex items-center justify-between">
                        <span className="text-xs text-navy-400">Instituto de Investigación J&J Beyond</span>
                       
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:flex flex-col gap-6 w-72 shrink-0">
        

              {/* Hot Topics */}
              <div className="bg-navy-800 rounded-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-white/10">
                  <h3 className="text-white font-semibold text-sm">Temas Populares</h3>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {hotTopics.map((topic, idx) => (
                      <span 
                        key={idx}
                        className={`px-2.5 py-1 rounded-full text-xs cursor-pointer transition-colors ${
                          idx % 3 === 0
                            ? 'bg-gold-500/30 text-gold-300 hover:bg-gold-500/50'
                            : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-white border border-gold-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <i className="ri-information-line text-gold-500 text-lg"></i>
                  <span className="text-navy-800 text-sm font-semibold">Aviso de Contenido</span>
                </div>
                <p className="text-navy-600/60 text-xs leading-relaxed">
                  El contenido de esta sección es solo para referencia educativa en conocimientos financieros, no constituye ningún consejo de inversión o préstamo.
                  Para decisiones financieras específicas, consulte con un asesor profesional de J&J Beyond, S.A. de C.V., SOFOM, E.N.R.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Knowledge;