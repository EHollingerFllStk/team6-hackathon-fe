import styles from './ProgressPlantContainer.module.css';
import ProgressPlant from '../ProgressPlant/ProgressPlant';

export default function ProgressPlantContainer({ profile }) {
  console.log(profile)
  
  return (
    <div className={styles.container}>
      {profile.plots.map((plot) => 
      <ProgressPlant key={plot._id} plot={plot}/>
      )}
    </div>
  )
}
