import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const ConsultingMentoring = () => {
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
          service: 'Consulting & Mentoring'
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
        eyebrow="Consulting & Mentoring"
        title="Technology roadmapping, architecture reviews."
        subtitle="On-the-job mentoring for internal teams building their own products or academic initiatives."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Consulting Services</h3>
            <p>Strategic technology guidance to help your organization make informed decisions and achieve long-term success.</p>

            <h4>Technology Strategy:</h4>
            <ul>
              <li>Digital transformation roadmaps</li>
              <li>Technology stack evaluation and recommendations</li>
              <li>Architecture design and review</li>
              <li>Scalability and performance optimization</li>
            </ul>

            <h4>Team Development:</h4>
            <ul>
              <li>Technical leadership mentoring</li>
              <li>Code review and best practices</li>
              <li>Agile development coaching</li>
              <li>Knowledge transfer sessions</li>
            </ul>

            <h4>Project Guidance:</h4>
            <ul>
              <li>Project planning and estimation</li>
              <li>Risk assessment and mitigation</li>
              <li>Quality assurance processes</li>
              <li>DevOps implementation</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Service enquiry"
        title="Get in touch for Consulting & Mentoring services."
        subtitle="Tell us about your consulting needs and we'll get back to you within 24 hours."
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

export default ConsultingMentoring;