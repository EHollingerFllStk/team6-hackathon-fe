import styles from "./Plots.module.css"
import { Link } from "react-router-dom"

function Plots() {
  return (
    <div>
        <h1>Plots selector</h1>
        <p>Plot Container</p> 
        <Link to="/plots/new">Create Custom Plot</Link>    
    </div>
  )
}

export default Plots
