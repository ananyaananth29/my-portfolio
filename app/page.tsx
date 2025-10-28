'use client';
import { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ContactInfo from "../components/ContactInfo";
import { FiArrowDown } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi"; // FiX = close icon



export default function Home() {
  const [copied, setCopied] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const allLinks = document.querySelectorAll('a[href]');
    allLinks.forEach(link => {
      if (!link.getAttribute('href')?.startsWith('#')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }, []);

const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(""), 1500);
  };




  return (
    <div className="relative bg-black text-white font-sans scroll-smooth overflow-x-hidden">
      {/* Navbar */}
<nav className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-4 sm:px-6 py-3 bg-black/10 backdrop-blur-md">
        {/* Profile Image */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/ananya.jpeg"
            alt="Ananya Ananth Logo"
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
        </div>

        <div className="sm:hidden text-white font-semibold text-lg">
          Ananya Ananth
        </div>


        {/* Navigation Links (visible on desktop) */}
        <div className="hidden sm:flex gap-4 md:gap-6 text-sm px-4 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur">
          <a href="#hero" className="hover:text-purple-400 transition">Hello World!</a>
          {/* <a href="#skills" className="hover:text-purple-400 transition">Skills</a> */}
          <a href="#about" className="hover:text-purple-400 transition">About Me</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden sm:inline-block bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap"
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 rounded-full hover:bg-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-black/90 text-center flex flex-col items-center py-6 gap-4 border-t border-white/10 sm:hidden z-50">
            <a
              href="#hero"
              className="hover:text-purple-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Hello World!
            </a>
            {/* <a
              href="#skills"
              className="hover:text-purple-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a> */}
            <a
              href="#about"
              className="hover:text-purple-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </a>
            <a
              href="#projects"
              className="hover:text-purple-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full px-5 py-2 text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>



      {/* Hero Section */}
      <section id="hero" className="min-h-screen w-full flex flex-col justify-center items-center text-center pt-32 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-white">Ananya Ananth!</span>
        </h1>
        <h6 className="text-1xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mt-4">
          A Master’s in Computer Science student at the University of Utah (May 2026) seeking Software Engineer roles, I thrive on automating the boring stuff, crafting AI tools that empower teams, and making every system smarter and faster.        </h6>
        <p className="text-base text-gray-300 mt-4">Currently on an F-1 visa | <span className="text-purple-300">eligible for CPT, OPT & STEM OPT</span></p>
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
          <a href="#skills" className="text-blue-500 hover:text-blue-400 transition">
            <FiArrowDown size={32} />
          </a>
        </div>

      </section>

      {/* Technologies Section */}
      {/* <section id="skills" className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-10 pt-32 pb-20 bg-black">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4">
          Technologies I Work With
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mb-10">
          Leveraging modern tech stacks to build intelligent, scalable, reliable and efficient applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
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

          <div className="text-left">
            <h3 className="text-pink-400 font-semibold mb-2">Machine Learning & AI</h3>
            <ul className="space-y-2">
              <li>LLMs / Generative AI</li>
              <li>Transformers</li>
              <li>Deep Learning (PyTorch)</li>
              <li>RAG Architecture</li>
              <li>IBM Watson / WatsonX</li>
              <li>LangChain / LangGraph</li>
              <li>AutoGen</li>
              <li>NLP & Information Retrieval</li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-pink-400 font-semibold mb-2">Data Science & Analytics</h3>
            <ul className="space-y-2">
              <li>Pandas / NumPy</li>
              <li>Matplotlib / Seaborn</li>
              <li>Scikit-Learn / SciPy</li>
              <li>Predictive Analytics</li>
              <li>Image Analysis</li>
              <li>Data Visualization (D3.js)</li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-pink-400 font-semibold mb-2">Cloud & DevOps</h3>
            <ul className="space-y-2">
              <li>IBM Cloud</li>
              <li>Google Cloud (GCP)</li>
              <li>AWS (Basic)</li>
              <li>Docker / Kubernetes</li>
              <li>Ansible / Jenkins (CI/CD)</li>
              <li>Shell Scripting (Bash / PowerShell)</li>
              <li>Grafana / ELK Stack</li>
              <li>CHPC & Slurm Scripting</li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-pink-400 font-semibold mb-2">Databases & APIs</h3>
            <ul className="space-y-2">
              <li>IBM DB2</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Milvus DB</li>
              <li>REST / GraphQL APIs</li>
              <li>Distributed & Parallel Systems</li>
            </ul>
          </div>
        </div>

      </section> */}


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
              My core passion lies at the intersection of AI, reliability engineering, and impactful problem-solving. I aim to design intelligent systems that are not only robust and scalable but also meaningful in real-world applications, from healthcare innovations to cloud automation.
            </p>
            {/* <p className="mb-4">
              In the long run, I aspire to combine my expertise in machine learning, DevOps, and data-driven solutions to drive projects that improve both technology performance and human outcomes.
            </p> */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Certifications</h4>
              <ul className="space-y-3">
                <a
                  href="https://www.cloudskillsboost.google/public_profiles/27213532-65ff-4b9c-93af-a32b0b12d238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-[1.02] transition-transform duration-200"
                >
                  <li className="bg-white/10 p-3 rounded-lg flex items-center gap-4 hover:bg-white/20 transition">
                    <div className="bg-white p-2 rounded">
                      <Image src="/Google.png" alt="Google Certificate" width={32} height={32} />
                    </div>
                    <div>
                      <p className="font-semibold">Google Cloud (GCP) Badges</p>
                      <p className="text-sm text-gray-400">Focus: DevOps & Cloud Computing</p>
                    </div>
                  </li>
                </a>

                <a
                  href="https://www.coursera.org/account/accomplishments/verify/JPPKYSG4P7YT?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-[1.02] transition-transform duration-200"
                >
                  <li className="bg-white/10 p-3 rounded-lg flex items-center gap-4 hover:bg-white/20 transition">
                    <div className="bg-white p-2 rounded">
                      <Image src="/IBM.png" alt="IBM Certificate" width={32} height={32} />
                    </div>
                    <div>
                      <p className="font-semibold">IBM Intro to AI Certificate</p>
                      <p className="text-sm text-gray-400">Focus: AI & Data Science</p>
                    </div>
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/in/ananyaananth/details/certifications/1635548481993/single-media-viewer/?profileId=ACoAADFd36wBlckUBpdi4B-xi-N-l9UGqzh7Ziw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-[1.02] transition-transform duration-200"
                >
                  <li className="bg-white/10 p-3 rounded-lg flex items-center gap-4 hover:bg-white/20 transition">
                    <div className="bg-white p-2 rounded">
                      <Image src="/Amazon-Logo.png" alt="Amazon Certificate" width={32} height={32} />
                    </div>
                    <div>
                      <p className="font-semibold">Amazon ML Summer School</p>
                      <p className="text-sm text-gray-400">Focus: AI & ML</p>
                    </div>
                  </li>
                </a>

                <a
                  href="https://www.udemy.com/certificate/UC-92cb3522-edb1-4462-bc24-4c64a760bb18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-[1.02] transition-transform duration-200"
                >
                  <li className="bg-white/10 p-3 rounded-lg flex items-center gap-4 hover:bg-white/20 transition">
                    <div className="bg-white p-2 rounded">
                      <Image src="/Ansible-Logo.jpg" alt="Ansible Certificate" width={32} height={32} />
                    </div>
                    <div>
                      <p className="font-semibold">Ansible Hands-On Devops Certificate</p>
                      <p className="text-sm text-gray-400">Focus: Ansible & DevOps</p>
                    </div>
                  </li>
                </a>
              </ul>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-xl text-left">
              <p className="text-sm text-gray-400 mb-1">Jul 2023 – Jul 2024</p>
              <h4 className="font-semibold text-purple-300 mb-2">
                Software Engineer | IBM
              </h4>
              <p className="mt-3">
                Beyond code, I led with initiative, turning repetitive reporting and maintenance work into automated systems that saved my team hours weekly. My passion for building smarter tools turned into a culture of efficiency, inspiring teammates to embrace AI-driven development and continuous improvement. I learned to balance creativity with reliability, ensuring every automation not only worked but created measurable business impact across IBM’s enterprise platforms.
              </p>

            </div>

            <div className="bg-white/5 p-6 rounded-xl text-left">
              <p className="text-sm text-gray-400 mb-1">Feb 2023 – Jul 2023</p>
              <h4 className="font-semibold text-purple-300 mb-2">
                Software Engineer Intern | IBM
              </h4>
              <p className="mt-3">
                As an intern, I didn’t just learn, I built solutions that stuck. By developing an AI-powered SRE assistant and integrating it into Slack, I made problem-solving faster and collaboration more fun. I loved seeing how my automation cut the team’s manual work in half, turning me from “the intern who asked questions” into “the intern who automated answers.”
              </p>

            </div>

            <div className="bg-white/5 p-6 rounded-xl text-left">
              <p className="text-sm text-gray-400 mb-1">May 2025 – Present</p>
              <h4 className="font-semibold text-purple-300 mb-2">
                Research Assistant | University of Utah Health, Moran Eye Center
              </h4>
              <p className="mt-3">
                At the Moran Eye Center, I combine curiosity with code. Leading the development of deep learning models for early diabetic retinopathy detection, I bridge healthcare and AI to make diagnosis faster and more accurate. Every experiment feels like a step toward saving sight, and that keeps me pushing to innovate beyond the lab, where research meets real-world impact.
              </p>

            </div>
          </div>
        </div>
      </section>


      {/* Core Capabilities Section */}
      {/* <section id="projects" className="min-h-screen px-4 pt-32 pb-20 bg-black text-center">
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
      </section> */}
      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-4 pt-32 pb-20 bg-black text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-4">Projects</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-16">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering.
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Project 1 */}
          <div className="bg-white/5 p-4 rounded-xl text-left hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-full aspect-video rounded-md mb-4 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/KMuy8hWwoe0?autoplay=1&mute=1&loop=1&playlist=KMuy8hWwoe0&controls=0"
                title="YouTube video player"
                className="absolute top-0 left-0 w-full h-full rounded-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <h3 className="font-bold text-white text-lg mb-2">Travel Orb – Interactive Data Visualization Platform </h3>
            <div className="flex flex-wrap gap-2 text-xs text-white/80 mb-3">
              {["React.js", "D3.js", "Material UI", "Emotion", "TopoJSON/GeoJSON", "rc-slider", "React Router", "Python (Pandas, NumPy)", "Jest", "Web Vitals", "GitHub Pages"].map((tag, idx) => (
                <span key={idx} className="bg-white/10 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Travel Orb turns complex tourism data into a visual journey across the world. Using interactive maps, rotating globes, and animated charts, it lets users uncover how people move, spend, and impact the planet, bridging design, data, and storytelling in a single immersive experience.</p>
            <div className="flex gap-3">
              <a href="https://www.youtube.com/watch?v=KMuy8hWwoe0" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm text-white">Live Demo</a>
              <a href="https://github.com/ananyaananth29/travel-orb" className="bg-gray-800 px-4 py-2 rounded-full text-sm text-white">GitHub</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white/5 p-4 rounded-xl text-left hover:shadow-lg transition-shadow duration-300">
            <Image src="/IBMWatsonX.jpg" alt="Employee Management" width={600} height={300} className="rounded-md mb-4" />
            <h3 className="font-bold text-white text-lg mb-2">DBAoC SRE Assistant – AI-Powered Reliability Automation using IBM WatsonX</h3>
            <div className="flex flex-wrap gap-2 text-xs text-white/80 mb-3">
              {["IBM WatsonX", "Watson Assistant", "Milvus DB", "Python", "Slack API", "IBM Cloud", "RAG architecture", "GitHub knowledge base"].map((tag, idx) => (
                <span key={idx} className="bg-white/10 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Built an AI-powered assistant using LLMs, RAG, and Milvus DB to automate troubleshooting for Site Reliability Engineers. Integrated with Slack and IBM WatsonX, reducing manual incident resolution time by ~50% and enhancing operational efficiency.            </p>
            {/* <div className="flex gap-3">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm text-white">Live Demo</a>
              <a href="https://github.com/ananyaananth29?tab=repositories" className="bg-gray-800 px-4 py-2 rounded-full text-sm text-white">GitHub</a>
            </div> */}
          </div>

          {/* Project 3 */}
          <div className="bg-white/5 p-4 rounded-xl text-left hover:shadow-lg transition-shadow duration-300">

            <Image src="/IBMWatsonX.jpg" alt="Employee Management" width={600} height={300} className="rounded-md mb-4" />

            <h3 className="font-bold text-white text-lg mb-2">AI-Powered Data Insights Platform</h3>
            <div className="flex flex-wrap gap-2 text-xs text-white/80 mb-3">
              {["Python", "FastAPI", "ReactJS", "IBM WatsonX", "PandasAI", "LangChain", "IBM DB2", "JayDeBeAPI", "Axios", "HTML5", "CSS3", "Chart.js", "IBM Cloud", "GitHub", "Slack", "Mural", "ZenHub"].map((tag, idx) => (
                <span key={idx} className="bg-white/10 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <p className="text-sm text-gray-300 mb-4">
              This tool is an AI-powered analytics assistant built to turn everyday language into powerful business insights. Using IBM WatsonX and advanced LLMs (Granite-20B, Mixtral-8x7B), it transforms natural language queries into precise SQL commands, instantly generating interactive visual reports from DB2 or CSV data. Designed with FastAPI and ReactJS, the platform reimagines how organizations make data-driven decisions, cutting report generation time by 70% and boosting decision-making speed by 60%.
            </p>
            {/* <div className="flex gap-3">
            <a href="https://www.youtube.com/embed/FN8Gph6n9ms?autoplay=1&mute=1&controls=0&loop=1&playlist=FN8Gph6n9ms" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm text-white">Live Demo</a>
            <a href="https://github.com/ananyaananth29/UNYSIS" className="bg-gray-800 px-4 py-2 rounded-full text-sm text-white">GitHub</a>
          </div> */}
          </div>

          {/* Project 4 */}
          <div className="bg-white/5 p-4 rounded-xl text-left hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-full aspect-video rounded-md mb-4 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/FN8Gph6n9ms?autoplay=1&mute=1&controls=0&loop=1&playlist=FN8Gph6n9ms"
                title="YouTube video player"
                className="absolute top-0 left-0 w-full h-full rounded-md"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="font-bold text-white text-lg mb-2">AB Suite Canvas — No-Code Tool for Agile Website Development</h3>
            <div className="flex flex-wrap gap-2 text-xs text-white/80 mb-3">
              {["Node.js", "Express.js", "MongoDB", "Mongoose", "GrapesJS", "React.js", "Bootstrap 5", "jQuery", "Handlebars (HBS)", "HTML5", "CSS3", "SCSS", "JavaScript"].map((tag, idx) => (
                <span key={idx} className="bg-white/10 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Developed a no-code web development platform using Node.js, Express, MongoDB, and GrapesJS, enabling non-coders to design and deploy web applications 70% faster through a drag-and-drop interface with integrated Bootstrap 5 and dynamic template management for agile website development.            </p>
            <div className="flex gap-3">
              <a href="https://www.youtube.com/embed/FN8Gph6n9ms?autoplay=1&mute=1&controls=0&loop=1&playlist=FN8Gph6n9ms" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm text-white">Live Demo</a>
              <a href="https://github.com/ananyaananth29/UNYSIS" className="bg-gray-800 px-4 py-2 rounded-full text-sm text-white">GitHub</a>
            </div>
          </div>


        </div>
      </section >
      {/* Contact Section */}
      <section id="contact" className="min-h-screen px-4 pt-32 pb-20 bg-black text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-12">Let's connect</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="bg-white/5 p-6 rounded-xl text-left">
            <h3 className="text-2xl font-semibold mb-4">Summary</h3>
            <p className="mb-6">
              Turning ideas into intelligent, automated systems, I build technology that works hard, so teams don’t have to.
            </p>
            <p className="mb-6">
              Reach out if you’re hiring, I’ll make sure to add <span className="text-purple-300">value, energy, and innovation</span> to your team from day one.
            </p>

            {/* ✅ Use your new imported component */}
            <ContactInfo />
          </div>

          {/* Contact Form */}
          {/* <form className="bg-white/5 p-6 rounded-xl text-left space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="px-4 py-2 bg-black/30 border border-white/20 rounded" />
              <input type="text" placeholder="Last name" className="px-4 py-2 bg-black/30 border border-white/20 rounded" />
            </div>
            <input type="email" placeholder="Your email" className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded" />
            <div className="flex gap-2">
              {['Hiring', 'Collaboration', 'General Inquiry'].map((tag, i) => (
                <button key={i} type="button" className="px-4 py-1 bg-black/20 border border-white/20 rounded-full text-white/80 hover:text-purple-400">
                  {tag}
                </button>
              ))}
            </div>
            <textarea placeholder="Your message" className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded min-h-[120px]" />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full">
              Send Message ✈️
            </button>
          </form> */}
        </div>

        <footer className="mt-20 text-sm text-white/40 border-t border-white/10 pt-6">
          <p>© 2025 Ananya Ananth. All rights reserved.</p>
          <p className="text-xs">Built with ❤️ and ⌨️</p>
        </footer>
      </section >
    </div >
  );
}
