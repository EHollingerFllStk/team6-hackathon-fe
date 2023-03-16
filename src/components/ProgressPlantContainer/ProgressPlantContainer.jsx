import styles from './ProgressPlantContainer.module.css';
import ProgressPlant from '../ProgressPlant/ProgressPlant';

export default function ProgressPlantContainer({ profile }) {
  return (
    <div>
        {profile.plots.map((plot) =>
        <ProgressPlant key={plot._id} plot={plot} />
        )}
    </div>
  )
}
