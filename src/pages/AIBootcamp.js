import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const AIBootcamp = () => {
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
          service: 'AI Bootcamp'
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
        eyebrow="AI Bootcamp"
        title="Dive into AI fundamentals and machine learning."
        subtitle="Comprehensive training in AI fundamentals, machine learning algorithms, and practical applications with Python and TensorFlow."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>AI & Machine Learning Mastery</h3>
            <p>Master artificial intelligence and machine learning with hands-on projects and real-world applications.</p>

            <h4>Core AI Concepts:</h4>
            <ul>
              <li>Machine Learning fundamentals</li>
              <li>Deep Learning and Neural Networks</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Computer Vision applications</li>
              <li>Reinforcement Learning basics</li>
            </ul>

            <h4>Technical Skills:</h4>
            <ul>
              <li>Python programming for AI</li>
              <li>TensorFlow and PyTorch frameworks</li>
              <li>Data preprocessing and feature engineering</li>
              <li>Model training and evaluation</li>
              <li>AI ethics and responsible AI practices</li>
            </ul>

            <h4>Practical Projects:</h4>
            <ul>
              <li>Image classification systems</li>
              <li>Text analysis and sentiment detection</li>
              <li>Predictive modeling applications</li>
              <li>Recommendation systems</li>
              <li>AI-powered chatbots</li>
            </ul>

            <h4>Program Details:</h4>
            <p><strong>Duration:</strong> 14 weeks | <strong>Format:</strong> Live online classes | <strong>Prerequisites:</strong> Basic Python knowledge</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Application form"
        title="Apply for AI Bootcamp."
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

export default AIBootcamp;