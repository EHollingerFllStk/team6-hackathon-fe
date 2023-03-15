import styles from "./Plots.module.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import * as plotsService from '../../services/plotsService'
import PlotsContainer from "../../components/PlotsContainer/PlotsContainer"

function Plots() {
  const [plots, setPlots] = useState([])

  useEffect(() => {
    const fetchPlots = async () => {
      const plotsData = await plotsService.getPlots()
      setPlots(plotsData)
    }
    fetchPlots()
  }, [])
  
  
  return (
    <div>
        <h1>Plots selector</h1>
        <PlotsContainer plots={plots}/> 
        <Link to="/plots/new">Create Custom Plot</Link>    
    </div>
  )
}

export default Plots
