import React from 'react';
import { User, Briefcase, Code, Mail, GitHub, Linkedin, Globe } from 'lucide-react';
import './styles/Portfolio.css';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="portfolio-header text-white p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Edwine Nyakundi</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#experience" className="hover:underline">Experience</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <section id="about" className="portfolio-section">
          <h2 className="section-title flex items-center"><User className="mr-2" /> About Me</h2>
          <p className="text-lg">
            Full Stack Developer & Machine Learning Enthusiast with a strong foundation in Java, Python, PHP, and JavaScript.
            Currently pursuing a Bachelor of Science in Computer Science at Karatina University (2021 - 2025).
          </p>
          <div className="mt-4">
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">PHP</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Machine Learning</span>
          </div>
        </section>

        <section id="experience" className="portfolio-section">
          <h2 className="section-title flex items-center"><Briefcase className="mr-2" /> Work Experience</h2>
          <div className="space-y-6">
            <div className="experience-item">
              <h3 className="experience-title">Founder and Developer</h3>
              <p className="experience-company">Marktday, Nyeri | January 2023 - Present</p>
            </div>
            <div className="experience-item">
              <h3 className="experience-title">Web Developer</h3>
              <p className="experience-company">Travelsjinn, India (Remote) | February 2022 - August 2023</p>
            </div>
            <div className="experience-item">
              <h3 className="experience-title">Developer</h3>
              <p className="experience-company">SKILLFIRM (Remote) | November 2020</p>
            </div>
          </div>
        </section>

        <section id="projects" className="portfolio-section">
          <h2 className="section-title flex items-center"><Code className="mr-2" /> Projects</h2>
          <div className="space-y-6">
            <div className="project-item">
              <h3 className="project-title">Customer Churn Prediction Model</h3>
              <p className="project-description">Machine learning model using Python and Scikit-learn to predict customer churn for a telecom company.</p>
            </div>
            <div className="project-item">
              <h3 className="project-title">HealthTrack - Fitness Monitoring App</h3>
              <p className="project-description">Android app using Java and Android SDK to track users' fitness activities and nutrition.</p>
            </div>
            <div className="project-item">
              <h3 className="project-title">TravelBlog - WordPress-based Travel Website</h3>
              <p className="project-description">Custom WordPress theme and plugins for a travel blogging platform with advanced search functionality.</p>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/nyakundi0" className="social-link" target="_blank" rel="noopener noreferrer">
              <GitHub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/edwine-nyakundi-836755291/" className="social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin /> LinkedIn
            </a>
          </div>
        </section>

        <section id="contact" className="portfolio-section">
          <h2 className="section-title flex items-center"><Mail className="mr-2" /> Contact</h2>
          <div className="space-y-2">
            <p className="contact-info"><Mail className="contact-icon" /> edwinenyakundi@gmail.com</p>
            <p className="contact-info"><Briefcase className="contact-icon" /> +254112714808</p>
            <p className="contact-info"><User className="contact-icon" /> 111 kisii</p>
            <p className="contact-info">
              <Globe className="contact-icon" />
              <a href="http://www.marktday.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.marktday.com</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Edwine Nyakundi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;