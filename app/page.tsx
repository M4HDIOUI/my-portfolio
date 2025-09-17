import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ExperienceItem from "@/components/experience-item"
import { ThemeToggle } from "@/components/theme-toggle"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link href="/">Mahdioui Omar</Link>
          </div>
          <nav className={styles.nav}>
            <Link href="#about" className={styles.navLink}>
              About
            </Link>
            <Link href="#skills" className={styles.navLink}>
              Skills
            </Link>
            <Link href="#projects" className={styles.navLink}>
              Projects
            </Link>
            <Link href="#contact" className={styles.navLink}>
              Contact
            </Link>
          </nav>
          <div className={styles.socialLinks}>
            <ThemeToggle />
            <Link
              href="https://github.com/M4HDIOUI"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <Github className={styles.icon} />
              <span className={styles.srOnly}>GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/omar-mahdioui/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <Linkedin className={styles.icon} />
              <span className={styles.srOnly}>LinkedIn</span>
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.profileImage}>
            <img src="/1740968794658.jpg" alt="Mahdioui Omar Profile" />
          </div>
          <h1 className={styles.heroTitle}>Mahdioui Omar</h1>
          <h2 className={styles.heroSubtitle}>Software Engineer & Full-Stack Developer</h2>
          <div className={styles.buttonGroup}>
            <Link href="#contact" className={`${styles.button} ${styles.primaryButton}`}>
              Get in Touch
            </Link>
            <Link href="#projects" className={`${styles.button} ${styles.outlineButton}`}>
              View Projects
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p className={styles.paragraph}>
              I'm a developer trained at 1337, where I learned through real-world projects and peer-based challenges. This experience shaped my problem-solving mindset and adaptability.
              </p>
              <p className={styles.paragraph}>
              My focus is on building clean, reliable, and user-centered web applications. I value code quality, performance, and accessibility in everything I create.
              </p>
              <p className={styles.paragraph}>
              I'm always exploring new technologies and enjoy turning ideas into practical digital solutions. I'm eager to join a team where I can grow, contribute, and build meaningful products.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
          <div className={styles.skillsGrid}>
            <SkillBadge name="JavaScript" />
            <SkillBadge name="TypeScript" />
            <SkillBadge name="React" />
            <SkillBadge name="Next.js" />
            <SkillBadge name="Node.js" />
            <SkillBadge name="Express" />
            <SkillBadge name="MongoDB" />
            <SkillBadge name="PostgreSQL" />
            <SkillBadge name="Gjango" />
            <SkillBadge name="REST API" />
            <SkillBadge name="CSS" />
            <SkillBadge name="Git" />
            <SkillBadge name="Docker" />
            <SkillBadge name="C" />
            <SkillBadge name="C++" />
            <SkillBadge name="java" />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectsGrid}>
          <ProjectCard
            title="Online Pong Game"
            description="Full-stack pong game built with React frontend and Django backend. Features user authentication, chat, and real-time notifications."
            technologies={["React", "Django", "WebSocket", "JWT"]}
            imageUrl="/pong-game.svg?height=200&width=300"
            repoUrl="https://github.com/USM4/ft_transcendence"
          />
          <ProjectCard
            title="ShellX"
            description="Unix-like shell supporting process management, pipelines, I/O redirection, built-in commands, signal handling, and optimized memory management."
            technologies={["C", "Linux", "System Programming"]}
            imageUrl="/bash.png"
            repoUrl="#"
          />
          <ProjectCard
            title="C++ journey"
            description="Developed a series of progressively complex C++ projects applying object-oriented design, memory management, inheritance, polymorphism, and exception handling — including modules like class-based warlocks, fixed-point arithmetic, abstract interfaces, and polymorphic collections."
            technologies={["C++"]}
            imageUrl="/Cpp-logo.png"
            // demoUrl="#"
            repoUrl="https://github.com/M4HDIOUI/cpp"
          />
          <ProjectCard
            title="IRC Server (C++)"
            description="IRC server with real-time chat, user authentication, private messaging, channel management, and admin commands like /kick and /join."
            technologies={["C++", "Networking", "Socket Programming"]}
            imageUrl="/irc-server.svg?height=200&width=300"
            // demoUrl="#"
            repoUrl="https://github.com/M4HDIOUI/Internet_relay_chat-IRC-"
          />
          <ProjectCard
            title="Dockmanager"
            description="Docker Compose infrastructure managing NGINX, WordPress, and MariaDB with SSL, automated deployment, and service isolation for security."
            technologies={["Docker", "NGINX", "WordPress", "MariaDB"]}
            imageUrl="/Docker.png"
            // demoUrl="#"
            repoUrl="https://github.com/M4HDIOUI/inception"
          />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <p className={styles.paragraph}>
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project
                in mind or just want to connect!
              </p>
              <div className={styles.contactLinks}>
                <div className={styles.contactLink}>
                  <Mail className={styles.contactIcon} />
                  <a href="mailto:mahdiouiomar@gmail.com">mahdiouiomar@gmail.com</a>
                </div>
                <div className={styles.contactLink}>
                  <Linkedin className={styles.contactIcon} />
                  <a href="https://www.linkedin.com/in/omar-mahdioui/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/omar-mahdioui/
                  </a>
                </div>
                <div className={styles.contactLink}>
                  <Github className={styles.contactIcon} />
                  <a href="https://github.com/M4HDIOUI" target="_blank" rel="noopener noreferrer">
                    github.com/M4HDIOUI
                  </a>
                </div>
              </div>
            </div>
            <form className={styles.contactForm}>
              <div className={styles.formGrid}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      Name
                    </label>
                    <input id="name" className={styles.formInput} placeholder="John Doe" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Email
                    </label>
                    <input id="email" type="email" className={styles.formInput} placeholder="hello@example.com" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>
                    Subject
                  </label>
                  <input id="subject" className={styles.formInput} placeholder="Project Inquiry" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Message
                  </label>
                  <textarea id="message" className={styles.formTextarea} placeholder="Your message here..." />
                </div>
              </div>
              <button type="submit" className={`${styles.button} ${styles.primaryButton} ${styles.fullWidth}`}>
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>© {new Date().getFullYear()} omar mahdioui.</p>
          <div className={styles.footerSocial}>
            <Link
              href="https://github.com/M4HDIOUI"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <Github className={styles.icon} />
              <span className={styles.srOnly}>GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/omar-mahdioui/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <Linkedin className={styles.icon} />
              <span className={styles.srOnly}>LinkedIn</span>
            </Link>
            <Link href="mailto:mahdiouiomar@gmail.com" className={styles.iconLink}>
              <Mail className={styles.icon} />
              <span className={styles.srOnly}>Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
