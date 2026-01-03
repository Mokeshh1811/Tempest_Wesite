import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const WebsiteDevelopmentInternship = () => {
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
          service: 'Website Development Internship'
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
        eyebrow="Website Development Internship"
        title="Full-stack web development skills and modern technologies."
        subtitle="Learn front-end and back-end development through hands-on projects and industry best practices."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Internship Program: Website Development</h3>
            <p>Comprehensive training in modern web development technologies and frameworks.</p>

            <h4>Skills Covered:</h4>
            <ul>
              <li>HTML, CSS, JavaScript fundamentals</li>
              <li>Front-end frameworks (React, Vue)</li>
              <li>Back-end development (Node.js, Express)</li>
              <li>Database integration (MongoDB, SQL)</li>
              <li>Responsive design and accessibility</li>
            </ul>

            <h4>Tools and Technologies:</h4>
            <ul>
              <li>Version control with Git</li>
              <li>Build tools and package managers</li>
              <li>API development and testing</li>
              <li>Deployment and hosting</li>
              <li>Performance optimization</li>
            </ul>

            <h4>Program Details:</h4>
            <p><strong>Duration:</strong> 3-6 months | <strong>Format:</strong> Remote/On-site | <strong>Eligibility:</strong> Students and graduates</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Application form"
        title="Apply for Website Development Internship."
        subtitle="Fill in the details below to apply for the website development internship program."
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
            <label htmlFor="organization">Institution/College *</label>
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
            <label htmlFor="message">Why are you interested in this internship? *</label>
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
            {isSubmitting ? 'Sending...' : 'Apply Now'}
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

export default WebsiteDevelopmentInternship;