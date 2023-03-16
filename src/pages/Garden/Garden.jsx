import styles from './Garden.module.css'
import ProgressPlantContainer from '../../components/ProgressPlantContainer/ProgressPlantContainer'

export default function Garden({ profile }) {
  return (
    <div className={styles.container}>
      <ProgressPlantContainer profile={profile} />
    </div>
  )
}
