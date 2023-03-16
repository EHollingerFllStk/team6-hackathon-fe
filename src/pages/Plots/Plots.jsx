import styles from "./Plots.module.css"
import editPot from '../../assets/Pots _ Plants/mobile-editpot.png'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import * as profileService from '../../services/profileService'
// import * as plotsService from '../../services/plotsService'
import PlotsContainer from "../../components/PlotsContainer/PlotsContainer"
import corgi from '../../assets/Branding/mobile-corgi.png'

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
      <PlotsContainer plots={plots} />
      {plots.length < 3 ?
        <>
          <Link to="/plots/new" id={styles.new}><img src={editPot} alt="a pot with an edit icon" /></Link>
        </>
        :
        <></>
      }

      {plots.length === 3 ?
        <>
        <Link to={'/actions'} id={styles.link}>Let's set up your tasks!</Link>
        </>
        :
        <></>
      }
   <div className={styles.tooltip}>
          <div className={styles.textbox}>
            <p>Hi friend, any parts of your life need balance?</p>
            <p>Choose 3 pots to focus on.</p>
          </div>
          <div className={styles.corgi}>
          <img src={corgi} alt="corgi-logo" />
          </div>
        </div>
    </div>
  )
}

export default Plots
