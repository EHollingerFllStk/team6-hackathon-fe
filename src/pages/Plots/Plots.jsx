import styles from "./Plots.module.css"
import editPot from '../../assets/Pots _ Plants/mobile-editpot.png'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import * as profileService from '../../services/profileService'
// import * as plotsService from '../../services/plotsService'
import PlotsContainer from "../../components/PlotsContainer/PlotsContainer"

function Plots({ user }) {
  // const [plots, setPlots] = useState([])
  const [profile, setProfile] = useState({
    plots: []
  })
  
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile(user.profile)
      setProfile(profileData)
    }
    fetchProfile()
  }, [user])
  
  const plots = profile.plots

  console.log(plots.length)


  return (

    <div className={styles.container}>
        <h1>Let's set some intentions</h1>
        <h3>What do you want to focus on?</h3>
        <h3>Choose 3 pots to focus on</h3>
        <PlotsContainer plots={plots}/> 
        {plots.length < 3 ?
        <>
          <Link to="/plots/new" id={styles.new}><img src={editPot} alt="a pot with an edit icon" /></Link>
        </>
        :
        <></>
        }
        <Link to={'/garden'} id={styles.link}>Go to Garden</Link>    
    </div>
  )
}

export default Plots
