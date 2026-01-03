import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';

const CloudEngineeringBootcamp = () => {
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
          service: 'Cloud Engineering Bootcamp'
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
        eyebrow="Cloud Engineering Bootcamp"
        title="Master cloud platforms and DevOps practices."
        subtitle="Hands-on training with AWS, Azure, and GCP including deployment and DevOps practices."
      >
        <div className="service-content">
          <div className="service-overview">
            <h3>Cloud Engineering Mastery Program</h3>
            <p>Become a cloud engineering expert with comprehensive training on major cloud platforms and DevOps practices.</p>

            <h4>Cloud Platforms Covered:</h4>
            <ul>
              <li>Amazon Web Services (AWS)</li>
              <li>Microsoft Azure</li>
              <li>Google Cloud Platform (GCP)</li>
              <li>Multi-cloud architectures</li>
            </ul>

            <h4>Technical Skills:</h4>
            <ul>
              <li>Infrastructure as Code (Terraform, CloudFormation)</li>
              <li>Container orchestration (Kubernetes, Docker)</li>
              <li>CI/CD pipelines (GitHub Actions, Jenkins)</li>
              <li>Monitoring and logging (CloudWatch, ELK stack)</li>
              <li>Security best practices and compliance</li>
            </ul>

            <h4>Hands-on Projects:</h4>
            <ul>
              <li>Auto-scaling web applications</li>
              <li>Serverless architectures</li>
              <li>Microservices deployment</li>
              <li>Disaster recovery setups</li>
              <li>Cost optimization strategies</li>
            </ul>

            <h4>Program Details:</h4>
            <p><strong>Duration:</strong> 10 weeks | <strong>Format:</strong> Live online classes | <strong>Certifications:</strong> AWS/Azure/GCP associate level</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Application form"
        title="Apply for Cloud Engineering Bootcamp."
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

export default CloudEngineeringBootcamp;