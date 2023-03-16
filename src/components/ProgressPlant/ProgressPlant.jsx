import styles from './ProgressPlant.module.css';
import empty from '../../assets/Pots _ Plants/mobile-namelesspot.png'
import small from '../../assets/Pots _ Plants/ficus elastica tineke - small.png';
import medium from '../../assets/Pots _ Plants/ficus elastica tineke - medium.png';
import large from '../../assets/Pots _ Plants/ficus elastica tineke - large.png';
import { Link } from 'react-router-dom';


export default function ProgressPlant({ plot }) {
  const actionsCount = plot.actions.length
  const completeActions = plot.actions.filter((action) => action.completed === true)
  const completedActionCount = completeActions.length

  const pointsPerAction = 10
  const totalPoints = completedActionCount * pointsPerAction

  let percentComplete = completedActionCount / actionsCount

  console.log(completeActions, "complete actions")


  if (plot.actions.length === 0) return <p className={styles.redirect}><Link to="/actions">Add tasks to your "{plot.name}" pot</Link></p>

  return (
    <div className={styles.container}>
      <Link to={"/actions"}>
        {percentComplete === 0 ?
          <img src={empty} alt="empty pot" style={{ width: 80 }} />
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
        <p>Points: {totalPoints}</p>
      </Link>
    </div>
  )
}
