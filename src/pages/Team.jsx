import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';

export const Team = () => {
  const coreTeam = [
    {
      name: 'Jorge Luis Leal Cárcamo',
      role: 'Administrador Único',
      bio: 'Con más de 20 años de experiencia en la industria financiera, ha liderado múltiples proyectos de financiamiento empresarial y ha profundizado en la construcción de sistemas financieros cumplidos.',
      image: '',
      tags: ['Planificación Estratégica', 'Financiamiento Empresarial', 'Gobernanza Cumplida']
    },
    {
      name: 'Jorge Luis Leal Cárcamo',
      role: 'Representante Legal',
      bio: 'Experto en gestión de activos, control de riesgos y operaciones empresariales, con rica experiencia en instituciones financieras internacionales de primer nivel.',
      image: '',
      tags: ['Gestión de Riesgos', 'Operación de Activos', 'Cooperación Institucional']
    }
  ];

  const advisors = [
    {
      name: 'Prof. Zhang Guoqiang',
      role: 'Asesor Independiente | Decano de la Facultad de Finanzas',
      image: ''
    },
    {
      name: 'Dr. Sun Minghua',
      role: 'Asesor Independiente | Ex Vice Director de la Comisión Reguladora Bancaria',
      image: ''
    },
    {
      name: 'Sra. Li Huiwen',
      role: 'Asesor Independiente | Miembro Senior de la Asociación Financiera Internacional',
      image: ''
    }
  ];

  return (
    <>
      <Header currentPage="team" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            alt="" 
            className="w-full h-full object-cover object-top opacity-30" 
            src="./2e2365f89c29fea2b126dc07e5688017.jpg"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gold-500"></div>
            <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Equipo Directivo</span>
            <div className="w-8 h-px bg-gold-500"></div>
          </div>
          <h1 className="font-serif text-5xl text-white mb-5">Nuestro Equipo</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Reunimos los mejores talentos en los campos de finanzas, tecnología y derecho, con capacidad profesional excepcional y profunda visión de la industria, liderando el desarrollo continuo y estable de J&J Beyond.
          </p>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-24 bg-gold-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl text-navy-800 mb-3">Equipo Directivo Principal</h2>
            <div className="w-12 h-0.5 bg-gold-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <i className="ri-double-quotes-l text-6xl text-gold-500/30 block mb-6"></i>
          <blockquote className="font-serif text-2xl lg:text-3xl text-white leading-relaxed mb-8">
            Creemos que una institución financiera excepcional debe construirse sobre la confianza: confianza en los clientes, respeto a la regulación, y responsabilidad hacia la sociedad. Este es el punto de partida y destino de nuestro trabajo diario.
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-12 h-0.5 bg-gold-500 mb-4"></div>
            <p className="text-gold-400 font-medium">Jorge Luis Leal Cárcamo</p>
            <p className="text-white/50 text-sm">Administrador Único & Fundador y Representante Legal</p>
          </div>
        </div>
      </section>

 
      {/* Values */}
      <section className="bg-gold-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold-500"></div>
              <span className="text-gold-600 text-xs font-medium tracking-widest uppercase">Cultura del Equipo</span>
              <div className="w-8 h-px bg-gold-500"></div>
            </div>
            <h2 className="font-serif text-3xl text-navy-800">Nuestros Valores</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'ri-integrity-line', title: 'Integridad', desc: 'Cumplir promesas, transparencia y honestidad' },
              { icon: 'ri-award-line', title: 'Excelencia', desc: 'Búsqueda de la perfección, estándares extremos' },
              { icon: 'ri-team-line', title: 'Colaboración', desc: 'Trabajo en equipo, creación de valor conjunto' },
              { icon: 'ri-leaf-line', title: 'Responsabilidad', desc: 'Asumir responsabilidades, retribuir a la sociedad' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 text-center border border-gold-100">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-navy-800 mx-auto mb-5">
                  <i className={`${value.icon} text-2xl text-gold-400`}></i>
                </div>
                <h4 className="font-serif text-navy-800 text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-navy-600/60 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Team;