import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="section" style={{ 
      backgroundColor: 'var(--color-primary)', 
      color: 'white', 
      paddingTop: '8rem', 
      paddingBottom: '8rem',
      textAlign: 'center'
    }}>
      <div className="container fade-in">
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontWeight: '800', 
          marginBottom: '1.5rem', 
          lineHeight: '1.2' 
        }}>
          Simplifica tus Impuestos, <br />
          <span style={{ color: 'var(--color-secondary)' }}>Maximiza tu Tranquilidad</span>
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#94A3B8', 
          maxWidth: '700px', 
          margin: '0 auto 2.5rem' 
        }}>
          Expertos en estrategias fiscales para Personas Físicas. Cumple con el SAT sin estrés y optimiza tus deducciones con Fiscalius.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Agenda una Asesoría <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
          </a>
          <a href="#services" className="btn btn-outline" style={{ 
            borderColor: 'white', 
            color: 'white',
            padding: '1rem 2rem', 
            fontSize: '1.125rem' 
          }}>
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
