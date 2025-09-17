'use client';

import { FaGithub, FaLinkedin, FaMailBulk, FaMailchimp, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative bg-black text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-6 backdrop-blur bg-black/60">
        <div className="flex items-center">
          <Image src="/Users/u1520797/Library/CloudStorage/Box-Box/Desktop/Portfolio/my-portfolio/public/logo-ananya.png" alt="Ananya Ananth Logo" width={150} height={150} />
        </div>

        <div className="flex gap-6 text-sm px-6 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur">
          <a href="#hero" className="hover:text-purple-400 transition">Home</a>
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#about" className="hover:text-purple-400 transition">About Me</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
        </div>
        <a href="#contact" className="bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full px-6 py-2 text-sm font-medium">
          Contact
        </a>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center pt-32 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Hi, I'm <span className="text-white">Ananya Ananth!</span>
        </h1>
        <h6 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mt-4">
          I am a Computer Science graduate student at the University of Utah with a strong foundation in cloud technologies, AI & machine learning, and software engineering.
        </h6>
        <p className="text-lg text-gray-300 mt-4">I craft <span className="text-purple-300">Scalable system design</span></p>
        <p className="text-sm text-gray-500 mt-2 max-w-xl">
          Building reliable, intuitive, and future-ready software with a passion for innovation.
        </p>

        <div className="flex gap-6 mt-8">
          <a href="https://github.com/ananyaananth29" className="hover:text-purple-400"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/ananyaananth/" className="hover:text-purple-400"><FaLinkedin size={24} /></a>
          {/* <a href="mailto:ananya.ananth.jain@gmail.com" className="hover:text-purple-400"><FaMailBulk size={24} /></a> */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=ananya.ananth.jain@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaMailBulk size={24} />
          </a>

        </div>

        <div className="flex gap-4 mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white">My Work</button>
          <a
            href="/ananya-ananth-resume.pdf"
            download
            className="border border-white/10 px-6 py-2 rounded-full text-white hover:bg-white/10 transition"
          >
            Resume
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#skills">
            <div className="rounded-full border p-2 border-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </a>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="skills" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32 pb-20 bg-black">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4">
          Technologies I Work With
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mb-10">
          Leveraging modern tech stacks to build intelligent, scalable, reliable and efficient applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {/* Languages */}
          <div className="text-left">
            <h3 className="text-pink-400 font-semibold mb-2">Languages</h3>
            <ul className="space-y-2">
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>SQL / MySQL</li>
              <li>R</li>
              <li>YAML</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="text-left">
            <h3 className="text-pink-400 font-semibold mb-2">Frontend</h3>
            <ul className="space-y-2">
              <li>ReactJS</li>
              <li>Next.js</li>
              <li>D3.js</li>
              <li>Tailwind CSS</li>
              <li>HTML5 & CSS3</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="text-left">
            <h3 className="text-pink-400 font-semibold mb-2">Backend & APIs</h3>
            <ul className="space-y-2">
              <li>FastAPI</li>
              <li>Flask</li>
              <li>GraphQL</li>
              <li>REST APIs</li>
              <li>Microservices Architecture</li>
            </ul>
          </div>

          {/* Databases */}
          <div className="text-left">
            <h3 className="text-pink-400 font-semibold mb-2">Databases</h3>
            <ul className="space-y-2">
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Milvus DB</li>
              <li>IBM DB2</li>
            </ul>
          </div>

          {/* Cloud & DevOps */}
          <div className="text-left">
            <h3 className="text-pink-400 font-semibold mb-2">Cloud & DevOps</h3>
            <ul className="space-y-2">
              <li>IBM Cloud</li>
              <li>Google Cloud (GCP)</li>
              <li>AWS (Basic)</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Ansible</li>
              <li>CI/CD (Jenkins)</li>
              <li>Shell Scripting (Bash/PowerShell)</li>
            </ul>
          </div>
        </div>
      </section>


      {/* About Me Section */}
<section
  id="about"
  className="min-h-screen px-4 pt‑32 pb‑20 flex flex-col items-center text-center bg-black"
>
  <h2 className="text-4xl font-bold text-purple-400 mb-12">About Me</h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
    {/* Bio & Certifications */}
    <div className="bg-white/5 p-6 rounded-xl text-left">
      <h3 className="text-xl font-semibold text-blue-400 mb-4">Who I Am</h3>
      <p className="mb-4">
I’ve worked as a Software Engineer at IBM, where I built resilient cloud-native systems and automated large-scale deployments. My current research at the University of Utah Health’s Moran Eye Center focuses on applying deep learning for medical imaging, particularly for early detection of diabetic retinopathy.
</p>
<p className="mb-4">
My core passion lies at the intersection of AI, reliability engineering, and impactful problem-solving. I aim to design intelligent systems that are not only robust and scalable but also meaningful in real-world applications — from healthcare innovations to cloud automation.
    </p>
<p className="mb-4">
In the long run, I aspire to combine my expertise in machine learning, DevOps, and data-driven solutions to drive projects that improve both technology performance and human outcomes.     
    </p>
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2">Certifications</h4>
        <ul className="space-y-3">
          <li className="bg-white/10 p-3 rounded-lg flex items-center gap-4">
            <div className="bg-white p-2 rounded">
              <Image src="/Users/u1520797/Library/CloudStorage/Box-Box/Desktop/Portfolio/my-portfolio/public/Google.png" alt="Google Certificate" width={32} height={32} />
            </div>
            <div>
              <p className="font-semibold">Google Data Analytics Professional Certificate</p>
              <p className="text-sm text-gray-400">Focus: Data Analytics</p>
            </div>
          </li>
          <li className="bg-white/10 p-3 rounded-lg flex items-center gap-4">
            <div className="bg-white p-2 rounded">
              <Image src="/Users/u1520797/Library/CloudStorage/Box-Box/Desktop/Portfolio/my-portfolio/public/IBM.png" alt="IBM Certificate" width={32} height={32} />
            </div>
            <div>
              <p className="font-semibold">IBM Data Science Professional Certificate</p>
              <p className="text-sm text-gray-400">Focus: AI & Data Science</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    {/* Professional Experience */}
    <div className="space-y-6">
      <div className="bg-white/5 p-6 rounded-xl text-left">
        <p className="text-sm text-gray-400 mb-1">Jul 2023 – Jul 2024</p>
        <h4 className="font-semibold text-purple-300 mb-2">
          Site Reliability Engineer | IBM Cloud
        </h4>
        <p>
          Owned availability & security of Datacap & FileNet SaaS products, drove remediation efforts to reduce cloud vulnerabilities by 40%, and developed automation paradigms using IBM Watsonx, Python, DB2, and Jenkins.
        </p>
      </div>

      <div className="bg-white/5 p-6 rounded-xl text-left">
        <p className="text-sm text-gray-400 mb-1">Feb 2023 – Jul 2023</p>
        <h4 className="font-semibold text-purple-300 mb-2">
          Software Engineer Intern | IBM
        </h4>
        <p>
          Automated critical maintenance using Ansible and Python, cutting manual efforts by 30%, and created detailed documentation to streamline onboarding for new SaaS team members.
        </p>
      </div>

      <div className="bg-white/5 p-6 rounded-xl text-left">
        <p className="text-sm text-gray-400 mb-1">May 2025 – Present</p>
        <h4 className="font-semibold text-purple-300 mb-2">
          Research Assistant | University of Utah Health, Moran Eye Center
        </h4>
        <p>
          Conducting research using CNNs and UNet for segmentation of retinal blood vessels in AOSLO images, aimed at early-stage diabetic retinopathy detection. Responsibilities include data curation, model training, and result validation for clinical decisions.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Core Capabilities Section */}
      <section id="projects" className="min-h-screen px-4 pt-32 pb-20 bg-black text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-12">Core Capabilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              title: 'Full Stack Development',
              desc: 'Expert in building complete web applications from frontend to backend with modern technologies like React, Node.js, and TypeScript.',
              icon: '💻'
            },
            {
              title: 'AI & Machine Learning',
              desc: 'Specialized in AI-powered applications, automation workflows, and intelligent systems using OpenAI, Python, and advanced ML techniques.',
              icon: '🤖'
            },
            {
              title: 'Cloud Architecture',
              desc: 'Experienced in designing scalable cloud solutions with AWS, Docker, and microservices architecture for high-performance applications.',
              icon: '☁️'
            },
            {
              title: 'Database Design',
              desc: 'Proficient in both SQL and NoSQL databases, data modeling, and building robust data-driven applications with optimal performance.',
              icon: '🗄️'
            },
            {
              title: 'Responsive Design',
              desc: 'Creating beautiful, accessible user interfaces that work seamlessly across all devices with modern CSS and design principles.',
              icon: '📱'
            },
            {
              title: 'Performance Optimization',
              desc: 'Expert in optimizing applications for speed, efficiency, and user experience through advanced techniques and best practices.',
              icon: '⚡'
            },
            {
              title: 'Security & Best Practices',
              desc: 'Implementing secure authentication, data protection, and following industry best practices for production-ready applications.',
              icon: '🔐'
            },
            {
              title: 'Innovation & Problem Solving',
              desc: 'Passionate about solving complex challenges with creative solutions and staying ahead of emerging technologies and trends.',
              icon: '🚀'
            }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl text-left">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Projects Section */}
      <section id="work" className="min-h-screen px-4 pt-32 pb-20 bg-black text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-4">Projects</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-16">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering.
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Project 1 */}
          <div className="bg-white/5 p-4 rounded-xl text-left hover:shadow-lg transition-shadow duration-300">
            <Image src="/Users/u1520797/Library/CloudStorage/Box-Box/Desktop/Portfolio/my-portfolio/public/project.png" alt="Admin Dashboard" width={600} height={300} className="rounded-md mb-4" />
            <h3 className="font-bold text-white text-lg mb-2">Portfolio with Admin Dashboard</h3>
            <div className="flex flex-wrap gap-2 text-xs text-white/80 mb-3">
              {["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "Mongo", "Next-Auth"].map((tag, idx) => (
                <span key={idx} className="bg-white/10 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <p className="text-sm text-gray-300 mb-4">
              A modern, full-stack portfolio website with integrated admin dashboard for content management, project listings, blog posts, and secure authentication.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm text-white">Live Demo</a>
              <a href="https://github.com/ananyaananth29" className="bg-gray-800 px-4 py-2 rounded-full text-sm text-white">GitHub</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white/5 p-4 rounded-xl text-left hover:shadow-lg transition-shadow duration-300">
            <Image src="/Users/u1520797/Library/CloudStorage/Box-Box/Desktop/Portfolio/my-portfolio/public/project.png" alt="Employee Management" width={600} height={300} className="rounded-md mb-4" />
            <h3 className="font-bold text-white text-lg mb-2">Employee Management System</h3>
            <div className="flex flex-wrap gap-2 text-xs text-white/80 mb-3">
              {["Angular", "Node.js", "GraphQL", "Authentication", "Apollo", "Express.js"].map((tag, idx) => (
                <span key={idx} className="bg-white/10 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <p className="text-sm text-gray-300 mb-4">
              An advanced system built with Angular and GraphQL for managing employees, including CRUD operations, file uploads, and secure login.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm text-white">Live Demo</a>
              <a href="https://github.com/ananyaananth29?tab=repositories" className="bg-gray-800 px-4 py-2 rounded-full text-sm text-white">GitHub</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white/5 p-4 rounded-xl text-left hover:shadow-lg transition-shadow duration-300">
            <Image src="/Users/u1520797/Library/CloudStorage/Box-Box/Desktop/Portfolio/my-portfolio/public/project.png" alt="SpaceX Tracker" width={600} height={300} className="rounded-md mb-4" />
            <h3 className="font-bold text-white text-lg mb-2">SpaceX Launch Tracker</h3>
            <div className="flex flex-wrap gap-2 text-xs text-white/80 mb-3">
              {["Angular", "SpaceX API", "TypeScript", "Tailwind"].map((tag, idx) => (
                <span key={idx} className="bg-white/10 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <p className="text-sm text-gray-300 mb-4">
              A sleek UI that fetches and displays past and upcoming SpaceX launches with filtering, sorting, and mission detail view.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm text-white">Live Demo</a>
              <a href="https://github.com/ananyaananth29?tab=repositories" className="bg-gray-800 px-4 py-2 rounded-full text-sm text-white">GitHub</a>
            </div>
          </div>
        </div>
      </section>
      {/* Micro Projects Section */}
      <section id="micro-projects" className="min-h-screen px-4 pt-32 pb-20 bg-black text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-12">Micro Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { title: 'AI Task Manager', desc: 'AI-powered platform for smart task organization and productivity.', img: '/Users/u1520797/Library/CloudStorage/Box-Box/Desktop/Portfolio/my-portfolio/public/project.png' },
            { title: 'EventRaze', desc: 'Event management platform with admin dashboard.', img: '/Users/u1520797/Library/CloudStorage/Box-Box/Desktop/Portfolio/my-portfolio/public/project.png' },
            { title: 'Weather Forecast', desc: 'Weather app with real-time data and forecasts.', img: '/Users/u1520797/Library/CloudStorage/Box-Box/Desktop/Portfolio/my-portfolio/public/project.png' },
            { title: 'YouTube Short VS Long Analyzer', desc: 'A YouTube analytics platform for comparing short and long video performance.', img: '/Users/u1520797/Library/CloudStorage/Box-Box/Desktop/Portfolio/my-portfolio/public/project.png' },
            { title: 'Pomodoro Timer', desc: 'Customizable Pomodoro timer with stats.', img: '/Users/u1520797/Library/CloudStorage/Box-Box/Desktop/Portfolio/my-portfolio/public/project.png' },
            { title: 'AI Job Advisor', desc: 'Upload your resume and receive AI job recommendations.', img: '/Users/u1520797/Library/CloudStorage/Box-Box/Desktop/Portfolio/my-portfolio/public/project.png' },
          ].map((proj, i) => (
            <div key={i} className="bg-white/5 p-4 rounded-xl text-left hover:shadow-lg transition-shadow duration-300">
              <Image src={proj.img} alt={proj.title} width={600} height={300} className="rounded-md mb-4" />
              <h3 className="font-bold text-white text-lg mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{proj.desc}</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="text-white/60">🔗</span>
                  <span className="text-white/60">💻</span>
                </div>
                <div className="text-white/60">⚙️</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="min-h-screen px-4 pt-32 pb-20 bg-black text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-12">Let's connect</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="bg-white/5 p-6 rounded-xl text-left">
            <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
            <p className="mb-6">I'm a Full Stack Engineer with a specialization in AI and autonomous agents, creating intuitive and intelligent applications that solve complex problems.</p>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-center gap-3">
                <span>📧</span>
                <span>ananya.ananth.jain@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span>🐙</span>
                <span>https://github.com/ananyaananth29</span>
              </li>
              <li className="flex items-center gap-3">
                <span>🔗</span>
                <span>https://www.linkedin.com/in/ananyaananth/</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="bg-white/5 p-6 rounded-xl text-left space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="px-4 py-2 bg-black/30 border border-white/20 rounded" />
              <input type="text" placeholder="Last name" className="px-4 py-2 bg-black/30 border border-white/20 rounded" />
            </div>
            <input type="email" placeholder="Your email" className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded" />
            <div className="flex gap-2">
              {['Freelance', 'Collaboration', 'General Inquiry'].map((tag, i) => (
                <button key={i} type="button" className="px-4 py-1 bg-black/20 border border-white/20 rounded-full text-white/80 hover:text-purple-400">
                  {tag}
                </button>
              ))}
            </div>
            <textarea placeholder="Your message" className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded min-h-[120px]" />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full">
              Send Message ✈️
            </button>
          </form>
        </div>

        <footer className="mt-20 text-sm text-white/40 border-t border-white/10 pt-6">
          <p>© 2025 Ananya Ananth. All rights reserved.</p>
          <p className="text-xs">Built with ❤️ and ⌨️</p>
        </footer>
      </section>
    </div>
  );
}
