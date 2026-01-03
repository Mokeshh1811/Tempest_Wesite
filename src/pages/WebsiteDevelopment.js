import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const WebsiteDevelopment = () => {
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
          service: 'Website Development'
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
        eyebrow="Website Development"
        title="Custom websites built for performance and user experience."
        subtitle="End-to-end website development using modern technologies and best practices."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Website Development Services</h3>
            <p>Create stunning, functional websites that drive results and provide exceptional user experiences.</p>

            <h4>Services Offered:</h4>
            <ul>
              <li>Custom website design and development</li>
              <li>Responsive web design for all devices</li>
              <li>E-commerce website development</li>
              <li>Content Management System (CMS) integration</li>
              <li>Website maintenance and support</li>
            </ul>

            <h4>Technologies Used:</h4>
            <ul>
              <li>Front-end: HTML5, CSS3, JavaScript, React, Vue.js</li>
              <li>Back-end: Node.js, Python, PHP</li>
              <li>Databases: MySQL, PostgreSQL, MongoDB</li>
              <li>CMS: WordPress, Drupal, Custom solutions</li>
              <li>Hosting and deployment services</li>
            </ul>

            <h4>Development Process:</h4>
            <p>Discovery → Planning → Design → Development → Testing → Launch → Maintenance</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Service enquiry"
        title="Start your website project."
        subtitle="Describe your website requirements and we'll provide a detailed proposal and timeline."
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
            <label htmlFor="organization">Company/Organization *</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Project Description *</label>
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
            {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
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

export default WebsiteDevelopment;