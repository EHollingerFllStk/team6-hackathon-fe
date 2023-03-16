import styles from './ProgressPlantContainer.module.css';
import ProgressPlant from '../ProgressPlant/ProgressPlant';

export default function ProgressPlantContainer({ plots }) {
  
  return (
    <div className={styles.container}>
      {plots.map((plot) => 
      <ProgressPlant key={plot._id} plot={plot}/>
      )}
    </div>
  )
}
