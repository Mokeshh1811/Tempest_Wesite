import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const CustomRAGModels = () => {
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
      const response = await fetch('http://localhost:3002/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'Custom RAG Models'
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
        eyebrow="Custom RAG Models"
        title="Retrieval-augmented generation setups."
        subtitle="RAG systems that combine vector search, structured retrieval, and guardrails to answer questions on your documents and APIs."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Advanced RAG Implementation</h3>
            <p>State-of-the-art retrieval-augmented generation systems that provide accurate, contextual answers from your knowledge base.</p>

            <h4>RAG Components:</h4>
            <ul>
              <li>Document ingestion and preprocessing</li>
              <li>Vector embeddings and indexing</li>
              <li>Semantic search and retrieval</li>
              <li>Context-aware answer generation</li>
              <li>Source attribution and citations</li>
            </ul>

            <h4>Supported Data Sources:</h4>
            <ul>
              <li>PDF documents and reports</li>
              <li>Web pages and articles</li>
              <li>Structured databases and APIs</li>
              <li>Internal documentation and wikis</li>
              <li>Code repositories and documentation</li>
            </ul>

            <h4>Advanced Features:</h4>
            <ul>
              <li>Multi-modal RAG (text, images, tables)</li>
              <li>Conversational memory and context</li>
              <li>Fact-checking and hallucination prevention</li>
              <li>Domain-specific fine-tuning</li>
              <li>Real-time knowledge updates</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Service enquiry"
        title="Get in touch for Custom RAG Models services."
        subtitle="Tell us about your knowledge base and RAG requirements and we'll get back to you within 24 hours."
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

export default CustomRAGModels;