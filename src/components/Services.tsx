import React from 'react';
import { Briefcase, TrendingUp, FileText, BadgeCheck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <TrendingUp size={40} color="var(--color-secondary)" />,
      title: 'RESICO y Actividad Empresarial',
      desc: 'Optimización fiscal para emprendedores y dueños de negocio bajo el Régimen Simplificado de Confianza.',
    },
    {
      icon: <Briefcase size={40} color="var(--color-secondary)" />,
      title: 'Sueldos y Salarios',
      desc: 'Asesoría para empleados que desean presentar su declaración anual y recuperar saldo a favor.',
    },
    {
      icon: <FileText size={40} color="var(--color-secondary)" />,
      title: 'Declaración Anual',
      desc: 'Preparación y presentación impecable de tu declaración anual. Evita multas y recargos.',
    },
    {
      icon: <BadgeCheck size={40} color="var(--color-secondary)" />,
      title: 'Regularización Fiscal',
      desc: '¿Atrás en tus declaraciones? Te ayudamos a ponerte al día con el SAT de forma segura.',
    },
  ];

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-primary)' }}>Nuestros Servicios</h2>
          <p style={{ color: 'var(--color-text)', maxWidth: '600px', margin: '0 auto' }}>
            Soluciones fiscales diseñadas específicamente para las necesidades de las Personas Físicas en México.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: 'var(--shadow-md)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                {service.title}
              </h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
