import styles from './PlotsContainer.module.css'
import Plot from '../Plot/Plot'

export default function PlotsContainer({ plots }) {
  
  return (
    <div className={styles.container}>
      {plots && plots.map((plot) =>
      <Plot key={plot._id} plot={plot}/>
      )}
    </div>
  )
}
