import styles from './AwardsContainer.module.css'
import { useState, useEffect } from 'react'
import Award from '../Award/Award'
import completeBadge from '../../assets/Misc/Completed_badge.png'
import corgiLogo from '../../assets/Branding/mobile-corgi.png'


export default function AwardsContainer( ) {
  const [ progress, setProgress ] = useState(0)
  
  return (
    <div className={styles.container}>
      <img src={corgiLogo} alt="corgi logo"/>
      <div className={styles.progressContainer}>
        <div className={styles.bar}></div>
      </div>
      <h3>{progress}%</h3>
      <p>Current Progress</p>
      <div className={styles.awardsContainer}>
        <Award image={completeBadge} title={"1 day streak"}/>
        <Award image={completeBadge} title={"3 day streak"}/>
        <Award image={completeBadge} title={"7 day streak"}/>
        <Award image={completeBadge} title={"14 day streak"}/>
        <Award image={completeBadge} title={""} balanced={"All Pots Balanced"}/>
        <Award image={completeBadge} title={"3 day streak"} balanced={"All Pots Balanced"}/>
        <Award image={completeBadge} title={"7 day streak"} balanced={"All Pots Balanced"}/>
        <Award image={completeBadge} title={"14 day streak"} balanced={"All Pots balanced"}/>
      </div>
    </div>
  )
}
