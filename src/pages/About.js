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
        subtitle="Tempest is a technology and education studio focused on building real-world engineering capability through modern, hands-on programs and production-grade solutions."
      >
        <div className="about-content animate-fade-up">
          <div className="about-text">
            <p>
              Tempest operates at the intersection of <strong>product design</strong>, 
              <strong> full-stack engineering</strong>, and <strong>AI-driven systems</strong>.
              We focus on translating complex technologies into practical, usable solutions
              that can be confidently deployed in real environments.
            </p>

            <p>
              Our approach emphasizes <strong>learning by building</strong>. Every engagement—
              whether training, consulting, or solution delivery—is structured around
              real use cases, modern tooling, and industry workflows.
            </p>

            <p className="muted">
              We collaborate with students, educators, and organizations to move beyond
              theoretical knowledge and develop the skills required to design, build,
              and ship production-ready systems.
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

      {/* WHAT MAKES US DIFFERENT */}
      <Section
        eyebrow="Our approach"
        title="What makes Tempest different"
      >
        <div className="card-grid vision-grid">
<div className="card glass-card">
  <img
    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
    alt="Outcome driven delivery"
    className="card-image"
  />
  <h3 className="card-title">Outcome-Driven</h3>
  <p className="card-body">
    We focus on measurable outcomes—deployable projects, working systems,
    and tangible skill development rather than just course completion.
  </p>
</div>


<div className="card glass-card">
  <img
    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
    alt="Industry aligned teams"
    className="card-image"
  />
  <h3 className="card-title">Industry-Aligned</h3>
  <p className="card-body">
    Our programs are built using the same tools, practices, and standards
    followed by modern product teams and engineering organizations.
  </p>
</div>


<div className="card glass-card">
  <img
    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80"
    alt="AI first mindset"
    className="card-image"
  />
  <h3 className="card-title">AI-First Mindset</h3>
  <p className="card-body">
    We design systems and workflows with automation, intelligence,
    and scalability at the core—preparing teams for AI-enabled development.
  </p>
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
              To enable individuals and institutions to confidently build, deploy,
              and scale modern software products in an AI-driven world.
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
              To create practical learning experiences and engineering solutions that
              bridge the gap between education and real-world product development.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
