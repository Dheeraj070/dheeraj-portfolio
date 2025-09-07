import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Instagram, Twitter, MapPin, Calendar, Award, Code, Zap, Brain, Cloud, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    programming: ['Java', 'Python', 'C++', 'SQL', 'JavaScript', 'TypeScript'],
    web: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'RESTful APIs'],
    aiml: ['Machine Learning', 'Deep Learning', 'Reinforcement Learning', 'LSTM', 'XGBoost'],
    cloud: ['Google Cloud Platform', 'Firebase', 'CI/CD', 'GitHub Actions'],
    embedded: ['STM32', 'ESP32', 'UART', 'Embedded C', 'Arduino IDE', 'IoT'],
    tools: ['MATLAB', 'Simulink', 'VLSI Design', 'PCB Design', 'Git']
  };

  const projects = [
    {
      title: "Full Stack Real-time Polling App",
      period: "May 2025 - Jul 2025",
      tech: ["MERN", "TypeScript", "Firebase", "Socket.IO", "Ollama AI", "GCP"],
      description: "Developed a full-stack web application supporting 100+ concurrent users with real-time polling, AI-powered quiz generation from YouTube content, and complete cloud deployment.",
      highlights: ["Real-time WebSocket communication", "AI module with Ollama Gemma3", "15+ RESTful APIs", "110+ GitHub commits"]
    },
    {
      title: "Battery SOH & RUL Prediction",
      period: "Mar 2025",
      tech: ["Python", "LSTM", "XGBoost", "DDPG", "TensorFlow"],
      description: "Implemented predictive modeling pipelines using 50,000+ NASA battery dataset records with advanced ML models achieving <5% prediction error.",
      highlights: ["LSTM & XGBoost models", "Reinforcement Learning integration", "Energy-efficient battery management"]
    },
    {
      title: "Full-Stack RAG Chatbot",
      period: "Feb 2025 - Mar 2025",
      tech: ["FAISS", "Google Gemini", "JWT", "LaTeX", "Vector Search"],
      description: "Built an intelligent chatbot with vector search capabilities over 1,000+ academic PDFs, achieving 90% semantic search relevance.",
      highlights: ["FAISS vector search", "JWT authentication", "LaTeX rendering", "90% search accuracy"]
    },
    {
      title: "Real-time GPS Tracking System",
      period: "Sep 2024 - Dec 2024",
      tech: ["STM32", "Embedded C", "UART", "Bluetooth", "GPS"],
      description: "Developed firmware for STM32 microcontroller with GPS integration, processing 1,500+ NMEA strings with 99% uptime accuracy.",
      highlights: ["UART communication", "Bluetooth integration", "Real-time tracking", "99% uptime accuracy"]
    }
  ];

  const certifications = [
    { name: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize", provider: "Udemy", year: "2025", link: "https://www.udemy.com/certificate/UC-57c3d4ed-178e-4d4f-ad98-8afa6d2862b8/" },
    { name: "Cloud Computing", provider: "NPTEL - IIT Kharagpur", year: "2024", link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S106210035703872584" },
    { name: "MATLAB Onramp", provider: "MATLAB", year: "2024", link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=829b8fda-0869-4852-ad20-7e37f2482c08&" }
  ];

  const workshops = [
    { name: "NVIDIA DLI Workshop", focus: "Deep Learning & NLP", year: "2025" },
    { name: "MATLAB Simulink Workshop", focus: "System Analysis & Control", year: "2024" },
    { name: "PCB Design Workshop", focus: "Circuit Design", year: "2024" }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Dheeraj Reddy K
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-2 space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20"></div>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
              Dheeraj Reddy K
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Electrical & Electronics Engineering Student
            </p>
            <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
              Full-Stack Developer | AI/ML Enthusiast | IoT & Embedded Systems Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="mailto:dheerajreddy070@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="#projects" onClick={() => scrollToSection('projects')} className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <Code size={20} />
                View Projects
              </a>
            </div>
          </div>

          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a final-year Electrical & Electronics Engineering undergraduate at NIT Andhra Pradesh with a passion for technology that spans across multiple domains. My journey combines the precision of electrical systems with the innovation of modern software development.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience in full-stack development, AI/ML, and embedded systems, I've worked on projects ranging from real-time web applications supporting 100+ concurrent users to IoT-based monitoring systems and predictive modeling pipelines.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-blue-400 mb-2">8.19/10</div>
                <div className="text-gray-300">CGPA</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-purple-400 mb-2">110+</div>
                <div className="text-gray-300">GitHub Commits</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-teal-400 mb-2">15+</div>
                <div className="text-gray-300">APIs Built</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-green-400 mb-2">50K+</div>
                <div className="text-gray-300">Data Records</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Code className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, i) => (
                  <span key={i} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <ExternalLink className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.web.map((skill, i) => (
                  <span key={i} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Brain className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">AI/ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.aiml.map((skill, i) => (
                  <span key={i} className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Cloud className="text-teal-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill, i) => (
                  <span key={i} className="bg-teal-600/20 text-teal-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Zap className="text-yellow-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Embedded Systems</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.embedded.map((skill, i) => (
                  <span key={i} className="bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Award className="text-red-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Tools & Others</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <span key={i} className="bg-red-600/20 text-red-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                    <span className="text-sm text-gray-400">{project.period}</span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Highlights:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.highlights.map((highlight, j) => (
                        <li key={j} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Work Experience</h3>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold">Full Stack Intern</h4>
                    <p className="text-blue-400">NPTEL - IIT Ropar</p>
                  </div>
                  <span className="text-sm text-gray-400">May 2025 - Jul 2025</span>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Developed real-time polling app supporting 100+ concurrent users</li>
                  <li>• Built AI module using Ollama Gemma3 for quiz generation</li>
                  <li>• Integrated 15+ RESTful APIs with React.js frontend</li>
                  <li>• Deployed on GCP and Firebase with complete CI/CD pipeline</li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-purple-300 group-hover:text-purple-200 transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-gray-400">{cert.provider} • {cert.year}</p>
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 text-purple-400 hover:text-purple-300 transition-colors"
                        title="View Certificate"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Workshops Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-orange-400">Workshops Attended</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {workshops.map((workshop, i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <h4 className="font-semibold text-orange-400 mb-2">{workshop.name}</h4>
                    <p className="text-sm text-gray-400 mb-2">{workshop.focus}</p>
                    <span className="text-xs text-gray-500">{workshop.year}</span>
                  </div>
                  <div className="mt-4 text-xs text-gray-400 leading-relaxed">
                    {i === 0 && "Enhanced understanding of DL fundamentals with real-time feedback from NVIDIA DLI Institute Ambassador."}
                    {i === 1 && "Modeled and simulated 5+ real-world systems using MATLAB and Simulink in industrial context."}
                    {i === 2 && "Participated in practical session on designing PCB layouts for complex electric circuits."}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Positions */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-green-400">Leadership & Responsibilities</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 text-center">
                <h4 className="font-semibold text-green-400 mb-2">Senior Executive Member</h4>
                <p className="text-sm text-gray-400 mb-2">EE Student Association, NIT AP</p>
                <p className="text-xs text-gray-500">Leading departmental initiatives and technical events</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 text-center">
                <h4 className="font-semibold text-green-400 mb-2">Team Lead</h4>
                <p className="text-sm text-gray-400 mb-2">Smart India Hackathon</p>
                <p className="text-xs text-gray-500">Guided multidisciplinary team for innovation</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 text-center">
                <h4 className="font-semibold text-green-400 mb-2">Team Lead</h4>
                <p className="text-sm text-gray-400 mb-2">EPICS Project</p>
                <p className="text-xs text-gray-500">Led team for real-world engineering solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 mb-8">
              I'm always open to discussing new opportunities, innovative projects, and collaborations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a href="mailto:dheerajreddy070@gmail.com" className="flex flex-col items-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group">
              <Mail className="text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300" size={32} />
              <span className="text-sm text-gray-400">dheerajreddy070@gmail.com</span>
            </a>

            <a href="tel:+917396189606" className="flex flex-col items-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 group">
              <Phone className="text-green-400 mb-3 group-hover:scale-110 transition-transform duration-300" size={32} />
              <span className="text-sm text-gray-400">+91 7396189606</span>
            </a>

            <a href="https://www.linkedin.com/in/dheeraj-reddy-k-505022204" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-600 transition-all duration-300 transform hover:scale-105 group">
              <Linkedin className="text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" size={32} />
              <span className="text-sm text-gray-400">LinkedIn</span>
            </a>

            <a href="https://github.com/Dheeraj070" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 group">
              <Github className="text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300" size={32} />
              <span className="text-sm text-gray-400">GitHub</span>
            </a>

            {/* Optional: Instagram */}
            <a href="https://www.instagram.com/dheeraj_7x" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-300 transform hover:scale-105 group">
              <Instagram className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm text-gray-400">Instagram</span>
            </a>

            {/* Optional: X/Twitter */}
            <a href="https://x.com/Dheeraj_7x" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 group">
              <Twitter className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm text-gray-400">X</span>
            </a>
          </div>

          <div className="flex items-center justify-center text-gray-400 mb-8">
            <MapPin size={20} className="mr-2" />
            <span>Karimnagar, Telangana, 505481</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Dheeraj Reddy K. Crafted with passion and precision.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;