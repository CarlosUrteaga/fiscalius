import React, { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por contactarnos! En breve te responderemos.');
    // Here you would typically send the data to a backend or service like EmailJS
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: 'white' }}>Contáctanos</h2>
          <p style={{ color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}>
            ¿Tienes dudas sobre tu situación fiscal? Estamos aquí para ayudarte.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem' 
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Información de Contacto</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                  <MessageSquare size={24} color="var(--color-secondary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600' }}>WhatsApp</h4>
                  <a href="https://wa.me/5211234567890" target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8' }}>+52 1 12 3456 7890</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                  <Mail size={24} color="var(--color-secondary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Email</h4>
                  <a href="mailto:contacto@fiscalius.com" style={{ color: '#94A3B8' }}>contacto@fiscalius.com</a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ 
            backgroundColor: 'white', 
            padding: '2rem', 
            borderRadius: '1rem', 
            color: 'var(--color-text)' 
          }}>
            <div className="mb-4">
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Nombre</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                style={{ 
                  width: '100%', 
                  padding: '0.75rem', 
                  borderRadius: '0.5rem', 
                  border: '1px solid #CBD5E1',
                  fontFamily: 'inherit'
                }} 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Correo Electrónico</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                style={{ 
                  width: '100%', 
                  padding: '0.75rem', 
                  borderRadius: '0.5rem', 
                  border: '1px solid #CBD5E1',
                  fontFamily: 'inherit'
                }} 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Mensaje</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                style={{ 
                  width: '100%', 
                  padding: '0.75rem', 
                  borderRadius: '0.5rem', 
                  border: '1px solid #CBD5E1',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }} 
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
