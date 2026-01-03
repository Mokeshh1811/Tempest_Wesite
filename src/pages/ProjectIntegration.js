import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const ProjectIntegration = () => {
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
      const response = await fetch('https://tempest-email-backend-60062823191.development.catalystserverless.in/server/tempest_email_backend_function/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'Project Integration FDP'
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
        eyebrow="Project Integration"
        title="Learn to integrate projects across domains and technologies."
        subtitle="Master project integration techniques, cross-platform development, and system architecture design."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Faculty Development Program: Project Integration</h3>
            <p>Develop expertise in integrating complex projects across multiple domains, technologies, and platforms.</p>

            <h4>System Integration:</h4>
            <ul>
              <li>API integration patterns</li>
              <li>Microservices architecture</li>
              <li>Service-oriented architecture (SOA)</li>
              <li>Enterprise service bus (ESB)</li>
              <li>Event-driven architecture</li>
            </ul>

            <h4>Cross-Platform Development:</h4>
            <ul>
              <li>Web and mobile integration</li>
              <li>Cross-platform frameworks</li>
              <li>Progressive Web Apps (PWAs)</li>
              <li>Hybrid app development</li>
              <li>Platform-specific optimizations</li>
            </ul>

            <h4>Database Integration:</h4>
            <ul>
              <li>Multi-database systems</li>
              <li>Data synchronization</li>
              <li>ETL processes</li>
              <li>Data warehousing</li>
              <li>Real-time data processing</li>
            </ul>

            <h4>DevOps Integration:</h4>
            <ul>
              <li>Continuous integration/deployment</li>
              <li>Infrastructure automation</li>
              <li>Monitoring and logging</li>
              <li>Security integration</li>
              <li>Performance optimization</li>
            </ul>

            <h4>Project Management:</h4>
            <ul>
              <li>Agile project integration</li>
              <li>Scrum methodologies</li>
              <li>Project coordination</li>
              <li>Stakeholder management</li>
              <li>Risk assessment and mitigation</li>
            </ul>

            <h4>Program Details:</h4>
            <p><strong>Duration:</strong> 6 days | <strong>Format:</strong> Project-based workshop | <strong>Participants:</strong> Faculty members and project managers</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Application form"
        title="Apply for Project Integration FDP."
        subtitle="Fill in the details below to nominate yourself or your institution for upcoming FDP batches."
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
            <label htmlFor="organization">Organization/Institution *</label>
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
            {isSubmitting ? 'Sending...' : 'Send Application'}
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

export default ProjectIntegration;