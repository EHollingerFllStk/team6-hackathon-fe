import styles from "./Awards.module.css"
import { Link } from "react-router-dom"
import AwardsContainer from "../../components/AwardsContainer/AwardsContainer"



function Awards () {

  return (
    <div className={styles.container}>
        <AwardsContainer /> 
    </div>
  )
}

export default Awards
