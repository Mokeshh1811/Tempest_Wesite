import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa6';

const DataScienceInternship = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:3003/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: 'Data Science Internship'
        }),
      });

      if (!response.ok) throw new Error();

      setSubmitMessage("Thank you! We've sent you a confirmation email.");
      setFormData({ name: '', email: '', organization: '', message: '' });
    } catch {
      setSubmitMessage('Sorry, there was an error sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Section
        eyebrow="Data Science Internship"
        title="Data-driven insights and machine learning fundamentals."
        subtitle="Learn how to analyze data, build models, and solve real-world problems using data science."
      >
        <div className="service-layout">
          <div className="service-text">
            <h3 className="service-heading">
              Internship Program: Data Science
            </h3>

            <p>
              Build strong foundations in data analysis, statistics, and machine
              learning using real datasets and industry use cases.
            </p>

            <div className="service-block">
              <h4>Skills Covered</h4>
              <ul>
                <li>Python for data science</li>
                <li>Data cleaning & preprocessing</li>
                <li>Exploratory data analysis (EDA)</li>
                <li>Machine learning basics</li>
                <li>Model evaluation & insights</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Tools & Technologies</h4>
              <ul>
                <li>Python, NumPy, Pandas</li>
                <li>Matplotlib, Seaborn</li>
                <li>Scikit-learn</li>
                <li>Jupyter Notebook</li>
                <li>Real-world datasets</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Program Details</h4>
              <p>
                <strong>Duration:</strong> 3–6 months <br />
                <strong>Format:</strong> Remote / On-site <br />
                <strong>Eligibility:</strong> Students & Graduates
              </p>
            </div>
          </div>

          <div className="service-visual">
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=2070&q=80"
              alt="Data science internship"
              className="service-image"
            />
          </div>
        </div>
      </Section>

      {/* SAME APPLICATION FORM + RIGHT INFO AS TEMPLATE */}
      {/* (Identical to QA page, only service name changes) */}
    </>
  );
};

export default DataScienceInternship;
