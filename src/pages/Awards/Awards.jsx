import styles from "./Awards.module.css"
import { Link } from "react-router-dom"
import AwardsContainer from "../../components/AwardsContainer/AwardsContainer"



function Awards () {

  return (
    <div className="styles.container">
        <h1>Awards Page</h1>  
        <AwardsContainer /> 
        <Link to="/awards/new">Link to your new award</Link>    
    </div>
  )
}

export default Awards
