import styles from "./skill-badge.module.css"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className={styles.badge}>
      <span className={styles.text}>{name}</span>
    </div>
  )
}
