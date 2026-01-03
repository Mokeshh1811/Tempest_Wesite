import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const ModernDevelopmentTools = () => {
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
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'Modern Development Tools FDP'
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
        eyebrow="Modern Development Tools"
        title="Master cutting-edge development tools and frameworks."
        subtitle="Learn modern development tools, version control, CI/CD pipelines, and best practices for software development."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Faculty Development Program: Modern Development Tools</h3>
            <p>Stay ahead in the rapidly evolving tech landscape with hands-on training in modern development tools and methodologies.</p>

            <h4>Version Control & Collaboration:</h4>
            <ul>
              <li>Git advanced workflows</li>
              <li>GitHub/GitLab features</li>
              <li>Branching strategies</li>
              <li>Code review processes</li>
              <li>Collaborative development</li>
            </ul>

            <h4>Development Environments:</h4>
            <ul>
              <li>VS Code extensions and customization</li>
              <li>Containerization with Docker</li>
              <li>Virtual environments</li>
              <li>Cloud development environments</li>
              <li>Integrated Development Environments (IDEs)</li>
            </ul>

            <h4>CI/CD & DevOps:</h4>
            <ul>
              <li>Continuous Integration pipelines</li>
              <li>Continuous Deployment strategies</li>
              <li>Automated testing frameworks</li>
              <li>Container orchestration</li>
              <li>Infrastructure as Code (IaC)</li>
            </ul>

            <h4>Modern Frameworks & Tools:</h4>
            <ul>
              <li>React and modern JavaScript frameworks</li>
              <li>Node.js and backend development</li>
              <li>Database technologies (SQL/NoSQL)</li>
              <li>API development and testing</li>
              <li>Cloud platforms (AWS, Azure, GCP)</li>
            </ul>

            <h4>Program Details:</h4>
            <p><strong>Duration:</strong> 7 days | <strong>Format:</strong> Hands-on workshop | <strong>Participants:</strong> Faculty members and developers</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Application form"
        title="Apply for Modern Development Tools FDP."
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

export default ModernDevelopmentTools;