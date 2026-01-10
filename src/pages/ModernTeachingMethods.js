import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const ModernTeachingMethods = () => {
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
      const response = await fetch('https://mokesh.pythonanywhere.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'Modern Teaching Methods FDP'
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
        eyebrow="Modern Teaching Methods"
        title="Innovative teaching techniques and project-based learning."
        subtitle="Learn modern teaching methods, project-based learning approaches, and integrating technology in classrooms."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Faculty Development Program: Modern Teaching Methods</h3>
            <p>Transform your teaching approach with innovative methodologies and technology integration strategies.</p>

            <h4>Teaching Methodologies:</h4>
            <ul>
              <li>Project-Based Learning (PBL)</li>
              <li>Flipped Classroom techniques</li>
              <li>Active Learning strategies</li>
              <li>Collaborative learning approaches</li>
              <li>Problem-Based Learning (PrBL)</li>
            </ul>

            <h4>Technology Integration:</h4>
            <ul>
              <li>Learning Management Systems (LMS)</li>
              <li>Interactive whiteboards and tablets</li>
              <li>Educational apps and software</li>
              <li>Online collaboration tools</li>
              <li>Virtual reality in education</li>
            </ul>

            <h4>Assessment Strategies:</h4>
            <ul>
              <li>Formative assessment techniques</li>
              <li>Peer assessment and feedback</li>
              <li>Portfolio-based evaluation</li>
              <li>Rubric development</li>
              <li>Student self-assessment</li>
            </ul>

            <h4>Program Details:</h4>
            <p><strong>Duration:</strong> 5 days | <strong>Format:</strong> Intensive workshop | <strong>Participants:</strong> Faculty members and educators</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Application form"
        title="Apply for Modern Teaching Methods FDP."
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

export default ModernTeachingMethods;