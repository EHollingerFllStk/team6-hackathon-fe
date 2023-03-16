import styles from './Plot.module.css'

export default function Plot({ plot }) {
  return (
    <div className={styles.container}>
      <p>{plot.name}</p>
    </div>
  )
}
