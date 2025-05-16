import styles from "./experience-item.module.css"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export default function ExperienceItem({ title, company, period, description, technologies }: ExperienceItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.marker} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.meta}>
        <span className={styles.company}>{company}</span>
        <span className={styles.separator}>•</span>
        <span className={styles.period}>{period}</span>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.technologies}>
        {technologies.map((tech, index) => (
          <span key={index} className={styles.tag}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
