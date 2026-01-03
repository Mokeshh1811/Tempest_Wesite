import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const UIUXInternship = () => {
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
          service: 'UI & UX Internship'
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
        eyebrow="UI & UX Internship"
        title="User interface and experience design principles."
        subtitle="Learn design thinking, prototyping, and user-centered design through practical projects."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Internship Program: UI/UX Design</h3>
            <p>Comprehensive training in user interface and user experience design methodologies.</p>

            <h4>Skills Covered:</h4>
            <ul>
              <li>User research and analysis</li>
              <li>Wireframing and prototyping</li>
              <li>Visual design principles</li>
              <li>Usability testing</li>
              <li>Design systems and guidelines</li>
            </ul>

            <h4>Tools and Technologies:</h4>
            <ul>
              <li>Figma, Adobe XD, Sketch</li>
              <li>Prototyping tools</li>
              <li>User testing platforms</li>
              <li>Design collaboration tools</li>
              <li>Accessibility guidelines</li>
            </ul>

            <h4>Program Details:</h4>
            <p><strong>Duration:</strong> 3-6 months | <strong>Format:</strong> Remote/On-site | <strong>Eligibility:</strong> Students and graduates</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Application form"
        title="Apply for UI & UX Internship."
        subtitle="Fill in the details below to apply for the UI & UX internship program."
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

export default UIUXInternship;