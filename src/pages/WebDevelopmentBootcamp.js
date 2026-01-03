import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const WebDevelopmentBootcamp = () => {
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
          service: 'Web Development Bootcamp'
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
        eyebrow="Web Development Bootcamp"
        title="Full-stack web development training."
        subtitle="Learn modern web technologies including React, Node.js, and databases to build full-stack applications."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Comprehensive Web Development Training</h3>
            <p>Master full-stack web development with modern technologies and industry best practices.</p>

            <h4>Curriculum Overview:</h4>
            <ul>
              <li>Frontend: HTML5, CSS3, JavaScript, React, TypeScript</li>
              <li>Backend: Node.js, Express.js, REST APIs, GraphQL</li>
              <li>Database: MongoDB, PostgreSQL, database design</li>
              <li>DevOps: Git, Docker, CI/CD, deployment</li>
              <li>Tools: VS Code, Postman, browser dev tools</li>
            </ul>

            <h4>Learning Outcomes:</h4>
            <ul>
              <li>Build responsive web applications</li>
              <li>Develop RESTful APIs and microservices</li>
              <li>Implement user authentication and security</li>
              <li>Deploy applications to cloud platforms</li>
              <li>Create professional portfolios and projects</li>
            </ul>

            <h4>Program Details:</h4>
            <p><strong>Duration:</strong> 12 weeks | <strong>Format:</strong> Live online classes | <strong>Projects:</strong> 5+ real-world applications</p>
          </div>
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Web Development Bootcamp"
              className="service-hero-image"
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Application form"
        title="Apply for Web Development Bootcamp."
        subtitle="Fill in the details below to apply for upcoming bootcamp batches."
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

export default WebDevelopmentBootcamp;