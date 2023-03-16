import styles from './ProgressPlant.module.css';
import empty from '../../assets/Pots _ Plants/mobile-namelesspot.png'
import small from '../../assets/Pots _ Plants/ficus elastica tineke - small.png';
import medium from '../../assets/Pots _ Plants/ficus elastica tineke - medium.png';
import large from '../../assets/Pots _ Plants/ficus elastica tineke - large.png';


export default function ProgressPlant({ plot }) {
  const actionsCount = plot.actions.length
  const completeActions = plot.actions.filter((action) => action.completed === true)
  const completedActionCount = completeActions.length

  let percentComplete = completedActionCount / actionsCount

  percentComplete = 1

  return (
    <div className={styles.container}>
      {percentComplete === 0 ?
      <img src={empty} alt="empty pot" />
      :
        percentComplete < .4 ?
        <img src={small} alt="small plant" />
        :
          percentComplete < .7 ?
          <img src={medium} alt="medium plant" />
          :
          <img src={large} alt="large plant" />
      }
      <p>{plot.name}</p>
    </div>
  )
}
