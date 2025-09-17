"use client"

import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import styles from "./project-card.module.css"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  demoUrl?: string
  repoUrl?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  demoUrl,
  repoUrl,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        {demoUrl && (
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
            <ExternalLink className={styles.buttonIcon} />
            Demo
          </Link>
        )}
        {repoUrl && (
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
            <Github className={styles.buttonIcon} />
            Code
          </Link>
        )}
      </div>
    </div>
  )
}
