import styles from './Garden.module.css'
import ProgressPlantContainer from '../../components/ProgressPlantContainer/ProgressPlantContainer'
import { useState, useEffect } from "react"
import * as plotsService from '../../services/plotsService'

export default function Garden({ user, profile }) {
  const [plots, setPlots] = useState([])

  useEffect(() => {
    const fetchPlots = async () => {
      const plotsData = await plotsService.getPlotsById(profile._id)
      setPlots(plotsData)
    }
    fetchPlots()
  }, [])

  if (!plots) return
  return (
    <div className={styles.container}>
      <ProgressPlantContainer plots={plots} />
    </div>
  )
}
