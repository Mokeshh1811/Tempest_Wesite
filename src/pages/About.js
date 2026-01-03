import React from 'react';
import Section from '../components/Section';
import '../components/CardGrid.css';
import './About.css';

const About = () => {
  return (
    <>
      {/* ABOUT HERO SECTION */}
      <Section
        eyebrow="Who we are"
        title="About Tempest"
        subtitle="Founded by Akshay, Tempest bridges academic learning with real-world product development through modern, outcome-driven technology programs."
      >
        <div className="about-content animate-fade-up">
          <div className="about-text">
            <p>
              Tempest operates at the intersection of <strong>product design</strong>, 
              <strong> full-stack engineering</strong>, and <strong>AI innovation</strong>.
              Every engagement is hands-on, industry-aligned, and focused on building
              confidence in shipping real products.
            </p>

            <p className="muted">
              We work closely with students, faculty, and organizations to transform
              learning into measurable capability.
            </p>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration"
              className="about-hero-image float-image"
            />
          </div>
        </div>
      </Section>

      {/* VISION & MISSION */}
      <Section
        eyebrow="Vision & Mission"
        title="Building creators, not just users"
      >
        <div className="card-grid vision-grid">
          <div className="card glass-card slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80"
              alt="Vision"
              className="card-image"
            />
            <h3 className="card-title">Vision</h3>
            <p className="card-body">
              Empower a generation of engineers and innovators confident in building
              and shipping modern, AI-powered products.
            </p>
          </div>

          <div className="card glass-card slide-in-right">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2070&q=80"
              alt="Mission"
              className="card-image"
            />
            <h3 className="card-title">Mission</h3>
            <p className="card-body">
              Design immersive programs and platforms that make advanced technologies
              practical, accessible, and industry-relevant.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
