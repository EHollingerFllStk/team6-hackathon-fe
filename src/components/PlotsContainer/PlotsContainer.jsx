import styles from './PlotsContainer.module.css'
import Plot from '../Plot/Plot'

export default function PlotsContainer({ plots }) {
  
  return (
    <div>
      {plots.map((plot) =>
      <p key={plot._id}>{plot.name}</p>
      )}
    </div>
  )
}
