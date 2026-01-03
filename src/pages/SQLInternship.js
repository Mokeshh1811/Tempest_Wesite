import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const SQLInternship = () => {
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
          service: 'SQL Internship'
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
        eyebrow="SQL Internship"
        title="Hands-on database management and SQL querying skills."
        subtitle="Gain practical experience in SQL database design, querying, and data analysis through real-world projects."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Internship Program: SQL Database Management</h3>
            <p>Develop expertise in relational databases and SQL through structured internship training and projects.</p>

            <h4>Skills Covered:</h4>
            <ul>
              <li>Database design and normalization</li>
              <li>SQL querying and data manipulation</li>
              <li>Data analysis and reporting</li>
              <li>Database administration basics</li>
              <li>Performance optimization</li>
            </ul>

            <h4>Tools and Technologies:</h4>
            <ul>
              <li>MySQL, PostgreSQL, SQL Server</li>
              <li>Database management tools</li>
              <li>Data visualization tools</li>
              <li>ETL processes</li>
              <li>Database security basics</li>
            </ul>

            <h4>Program Details:</h4>
            <p><strong>Duration:</strong> 3-6 months | <strong>Format:</strong> Remote/On-site | <strong>Eligibility:</strong> Students and graduates</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Application form"
        title="Apply for SQL Internship."
        subtitle="Fill in the details below to apply for the SQL internship program."
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

export default SQLInternship;