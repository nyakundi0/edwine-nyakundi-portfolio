import React from 'react';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Edwine Nyakundi</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#experience" className="hover:underline">Experience</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center"><User className="mr-2" /> About Me</h2>
          <p className="text-lg">
            Full Stack Developer & Machine Learning Enthusiast with a strong foundation in Java, Python, PHP, and JavaScript.
            Currently pursuing a Bachelor of Science in Computer Science at Karatina University (2021 - 2025).
          </p>
        </section>

        <section id="experience" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center"><Briefcase className="mr-2" /> Work Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Founder and Developer</h3>
              <p className="text-gray-600">Marktday, Nyeri | January 2023 - Present</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Web Developer</h3>
              <p className="text-gray-600">Travelsjinn, India (Remote) | February 2022 - August 2023</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Developer</h3>
              <p className="text-gray-600">SKILLFIRM (Remote) | November 2020</p>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center"><Code className="mr-2" /> Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Customer Churn Prediction Model</h3>
              <p>Machine learning model using Python and Scikit-learn to predict customer churn for a telecom company.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">HealthTrack - Fitness Monitoring App</h3>
              <p>Android app using Java and Android SDK to track users' fitness activities and nutrition.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">TravelBlog - WordPress-based Travel Website</h3>
              <p>Custom WordPress theme and plugins for a travel blogging platform with advanced search functionality.</p>
            </div>
          </div>
          <p className="mt-4">
            More projects on:{' '}
            <a href="https://github.com/nyakundi0" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://github.com/edwine-nyakundi" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {' '}|{' '}
            <a href="https://www.linkedin.com/in/edwine-nyakundi-836755291/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center"><Mail className="mr-2" /> Contact</h2>
          <p className="text-lg">
            Email: edwinenyakundi@gmail.com<br />
            Phone: +254112714808<br />
            Location: 111 kisii<br />
            Website: <a href="http://www.marktday.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.marktday.com</a>
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Edwine Nyakundi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;