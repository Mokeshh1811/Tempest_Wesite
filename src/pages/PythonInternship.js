import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const PythonInternship = () => {
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
          service: 'Python Internship'
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
        eyebrow="Python Internship"
        title="Practical Python programming and application development."
        subtitle="Build expertise in Python through hands-on projects in data science, web development, and automation."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Internship Program: Python Development</h3>
            <p>Master Python programming with real-world applications in various domains.</p>

            <h4>Skills Covered:</h4>
            <ul>
              <li>Python fundamentals and advanced concepts</li>
              <li>Data structures and algorithms</li>
              <li>Object-oriented programming</li>
              <li>Web development with Django/Flask</li>
              <li>Data analysis with Pandas and NumPy</li>
            </ul>

            <h4>Tools and Technologies:</h4>
            <ul>
              <li>Jupyter Notebook</li>
              <li>Git and version control</li>
              <li>APIs and web services</li>
              <li>Database integration</li>
              <li>Testing and debugging</li>
            </ul>

            <h4>Program Details:</h4>
            <p><strong>Duration:</strong> 3-6 months | <strong>Format:</strong> Remote/On-site | <strong>Eligibility:</strong> Students and graduates</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Application form"
        title="Apply for Python Internship."
        subtitle="Fill in the details below to apply for the Python internship program."
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

export default PythonInternship;