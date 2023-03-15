import styles from "./Plots.module.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import * as profileService from '../../services/profileService'
// import * as plotsService from '../../services/plotsService'
import PlotsContainer from "../../components/PlotsContainer/PlotsContainer"

function Plots({ user }) {
  // const [plots, setPlots] = useState([])
  const [profile, setProfile] = useState({})
  
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile(user.profile)
      setProfile(profileData)
    }
    fetchProfile()
  }, [user])
  
  const plots = profile.plots
  
  return (
    <div>
        <h1>Plots selector</h1>
        <PlotsContainer plots={plots}/> 
        <Link to="/plots/new">Create Custom Plot</Link>    
    </div>
  )
}

export default Plots
