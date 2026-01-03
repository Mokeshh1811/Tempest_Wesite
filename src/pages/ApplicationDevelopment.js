import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const ApplicationDevelopment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'Application Development'
        }),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! We\'ve sent you a confirmation email.');
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Section
        eyebrow="Application Development"
        title="End-to-end development of performant web applications."
        subtitle="Full-stack applications, dashboards, and integrations using modern stacks, cloud-native architectures, and CI/CD practices."
        backgroundImage="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Technology Stack</h3>
            <p>We build robust, scalable applications using industry-leading technologies and best practices.</p>

            <h4>Frontend Technologies:</h4>
            <ul>
              <li>React, Vue.js, Angular</li>
              <li>TypeScript, JavaScript</li>
              <li>HTML5, CSS3, Sass/SCSS</li>
              <li>Responsive design frameworks</li>
            </ul>

            <h4>Backend Technologies:</h4>
            <ul>
              <li>Node.js, Python (Django/Flask), Ruby on Rails</li>
              <li>REST APIs, GraphQL</li>
              <li>Database design (PostgreSQL, MongoDB, Redis)</li>
              <li>Microservices architecture</li>
            </ul>

            <h4>DevOps & Deployment:</h4>
            <ul>
              <li>Docker containerization</li>
              <li>CI/CD pipelines (GitHub Actions, Jenkins)</li>
              <li>Cloud deployment (AWS, Azure, GCP)</li>
              <li>Monitoring and logging</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Service enquiry"
        title="Get in touch for Application Development services."
        subtitle="Tell us about your project requirements and we'll get back to you within 24 hours."
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <PrimaryButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Enquiry'}
          </PrimaryButton>
          {submitMessage && (
            <p className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </Section>
    </>
  );
};

export default ApplicationDevelopment;