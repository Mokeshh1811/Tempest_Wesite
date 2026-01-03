import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const ContentWriting = () => {
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
          service: 'Content Writing'
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
        eyebrow="Content Writing"
        title="Engaging content that connects with your audience."
        subtitle="Professional content writing services for websites, blogs, marketing materials, and more."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Content Writing Services</h3>
            <p>Craft compelling content that informs, engages, and converts your audience into loyal customers.</p>

            <h4>Services Offered:</h4>
            <ul>
              <li>Website content and copywriting</li>
              <li>Blog posts and articles</li>
              <li>SEO-optimized content</li>
              <li>Social media content</li>
              <li>Marketing materials and newsletters</li>
            </ul>

            <h4>Content Types:</h4>
            <ul>
              <li>Product descriptions and landing pages</li>
              <li>Educational and informative articles</li>
              <li>Brand storytelling and narratives</li>
              <li>Technical writing and documentation</li>
              <li>Creative and promotional copy</li>
            </ul>

            <h4>Our Approach:</h4>
            <p>Research → Strategy → Writing → Editing → Optimization → Delivery</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Service enquiry"
        title="Discuss your content needs."
        subtitle="Tell us about your content requirements and we'll create a customized content strategy."
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
            <label htmlFor="organization">Company/Organization *</label>
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
            <label htmlFor="message">Content Requirements *</label>
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
            {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
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

export default ContentWriting;