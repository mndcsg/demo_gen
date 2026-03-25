import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Responsibility = () => {
  const stats = [
    { icon: 'ri-heart-line', value: '$80M+', label: 'Inversión en Impacto Social' },
    { icon: 'ri-user-heart-line', value: '1M+', label: 'Beneficiarios Alcanzados' },
    { icon: 'ri-earth-line', value: '15,000 ton', label: 'Reducción de Carbono' },
    { icon: 'ri-community-line', value: '2,000+', label: 'Proyectos Comunitarios' }
  ];

  const programs = [
    {
      title: '"Educación para el Futuro"',
      subtitle: 'Educación y Becas',
      desc: 'Programa de becas integrales para estudiantes talentosos de comunidades vulnerables en México, cubriendo desde preparatoria hasta nivel universitario. Proporcionamos apoyo económico, mentoría académica y oportunidades de prácticas profesionales, rompiendo el ciclo de pobreza a través de la educación de calidad.',
      stats: [
        { value: '2,000+', label: 'Becarios Anuales' },
        { value: '32 Estados', label: 'Cobertura Nacional' }
      ],
      image: './ff89136e3ea609ed007953d90c60afe1.jpg'
    },
    {
      title: '"Financiamiento Inclusivo"',
      subtitle: 'Inclusión Financiera',
      desc: 'Llevamos servicios financieros formales a comunidades rurales y periurbanas de México, ofreciendo educación financiera gratuita, microcréditos accesibles y herramientas digitales de ahorro. Empoderamos a emprendedores locales y familias para construir estabilidad económica sostenible.',
      stats: [
        { value: '500,000+', label: 'Personas Capacitadas' },
        { value: '1,200+', label: 'Talleres Realizados' }
      ],
      image: './c8d1237988527934727a1b29be7a6235.jpg',
      reverse: true
    },
    {
      title: '"México Verde y Sostenible"',
      subtitle: 'Sostenibilidad Ambiental',
      desc: 'Impulsamos proyectos de financiamiento verde para energías renovables, agricultura sostenible y conservación ambiental en México. Comprometidos con la reducción de huella de carbono y el apoyo a iniciativas que protegen nuestros ecosistemas naturales para las futuras generaciones.',
      stats: [
        { value: '3,000+', label: 'Proyectos Verdes' },
        { value: '15,000 ton', label: 'CO₂ Reducido Anualmente' }
      ],
      image: './66dec96e87082afb6fffa51688ce60b7.jpg'
    }
  ];

  const esgCommitments = [
    {
      letter: 'E',
      title: 'Ambiental Environmental',
      color: 'from-emerald-900/50',
      items: ['Financiamiento Verde Prioritario', 'Compromiso de Neutralidad de Carbono', 'Oficinas Sostenibles', 'Educación Ambiental']
    },
    {
      letter: 'S',
      title: 'Social Social',
      color: 'from-gold-900/50',
      items: ['Equidad Educativa', 'Inclusión Financiera', 'Derechos Laborales', 'Desarrollo Comunitario']
    },
    {
      letter: 'G',
      title: 'Gobernanza Governance',
      color: 'from-blue-900/50',
      items: ['Cumplimiento Normativo', 'Transparencia Informativa', 'Supervisión Independiente', 'Cultura de Integridad']
    }
  ];



  return (
    <>
      <Header currentPage="responsibility" />
      
      {/* Hero Section */}
      <section className="relative min-h-80 pt-32 pb-24 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            alt="" 
            className="w-full h-full object-cover object-top" 
            src="./071f5242e223794ab126c976563d8a44.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Responsabilidad Social</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h1 className="font-serif text-5xl text-white mb-5 leading-tight">
              Responsabilidad Social
              <br />
              <span className="text-gold-400">Compromiso con México</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Creemos que una institución financiera excepcional no solo debe crear valor comercial, 
              sino también retribuir activamente a la sociedad. J&J Beyond cumple con su responsabilidad 
              social empresarial mediante acciones concretas, construyendo juntos un México mejor.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Programs */}
      <section className="bg-gold-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-600 text-xs font-medium tracking-widest uppercase">Programas Sociales</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h2 className="font-serif text-4xl text-navy-800 mb-4">Tres Pilares de Impacto</h2>
            <p className="text-navy-600/70 max-w-xl mx-auto">
              Enfocados en equidad educativa, inclusión financiera y desarrollo sostenible, 
              impulsamos el progreso social de México de manera sistemática
            </p>
          </div>
          <div className="space-y-10">
            {programs.map((program, idx) => (
              <div 
                key={idx}
                className={`bg-white rounded-2xl overflow-hidden border border-gold-100 grid grid-cols-1 lg:grid-cols-2 ${
                  program.reverse ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`relative h-72 lg:h-auto ${program.reverse ? 'lg:col-start-2' : ''}`}>
                  <img 
                    alt={program.title} 
                    className="w-full h-full object-cover object-top" 
                    src={program.image}
                  />
                </div>
                <div className={`p-12 flex flex-col justify-center ${program.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <p className="text-gold-600 text-xs tracking-widest uppercase mb-2">{program.subtitle}</p>
                  <h3 className="font-serif text-3xl text-navy-800 font-semibold mb-4">{program.title}</h3>
                  <p className="text-navy-600/70 text-base leading-relaxed mb-8">{program.desc}</p>
                  <div className="flex gap-8">
                    {program.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="border-l-2 border-gold-500 pl-4">
                        <p className="font-serif text-2xl text-navy-800 font-bold">{stat.value}</p>
                        <p className="text-navy-500/70 text-xs mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Compromisos ESG</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h2 className="font-serif text-4xl text-white mb-4">Compromisos Ambientales, Sociales y de Gobernanza</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {esgCommitments.map((esg, idx) => (
              <div 
                key={idx}
                className={`bg-gradient-to-b ${esg.color} to-navy-800 border border-white/10 rounded-2xl p-8`}
              >
                <div className="font-serif text-6xl text-gold-400/40 font-bold mb-4">{esg.letter}</div>
                <h3 className="text-white font-semibold text-base mb-5 leading-snug">{esg.title}</h3>
                <ul className="space-y-3">
                  {esg.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-3 text-white/60 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
};

export default Responsibility;