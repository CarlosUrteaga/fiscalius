import React from 'react';
import { Shield, BookOpen, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem', 
          alignItems: 'center' 
        }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
              ¿Por qué confiar en Fiscalius?
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text)', marginBottom: '2rem' }}>
              Entendemos que los impuestos en México pueden ser complicados y estresantes. Nuestro objetivo es brindarte la tranquilidad de saber que tu situación fiscal está en orden.
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Shield color="var(--color-secondary)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontWeight: '600', color: 'var(--color-primary)' }}>Seguridad y Confidencialidad</h4>
                  <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Tus datos están protegidos con los más altos estándares.</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <BookOpen color="var(--color-secondary)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontWeight: '600', color: 'var(--color-primary)' }}>Expertos Actualizados</h4>
                  <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Dominamos las últimas reformas del SAT para 2026.</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Clock color="var(--color-secondary)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontWeight: '600', color: 'var(--color-primary)' }}>Respuesta Rápida</h4>
                  <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Atención personalizada y ágil vía WhatsApp.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: 'var(--color-bg)', 
            padding: '2rem', 
            borderRadius: '1rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '300px'
          }}>
             {/* Placeholder for an image or graphic */}
             <div style={{ color: 'var(--color-text-light)', fontStyle: 'italic' }}>
               <h3 style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--color-secondary)' }}>100%</h3>
               <p style={{ fontSize: '1.25rem' }}>Cumplimiento Fiscal</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
