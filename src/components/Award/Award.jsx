import styles from './Award.module.css'

export default function Award(props) {
  const { image, title, balanced, grey } = props
  return (
    <div className={styles.container}>
      <img className={styles.grey} src={image} alt=""/>
      <p>{balanced}</p>
      <p>{title}</p>
    </div>
  )
}
