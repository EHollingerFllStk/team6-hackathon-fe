import styles from './Garden.module.css'
import ProgressPlantContainer from '../../components/ProgressPlantContainer/ProgressPlantContainer'
import { useState, useEffect } from "react"
import * as profileService from '../../services/profileService'

export default function Garden({ user }) {
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

  
  return (
    <div className={styles.container}>
      <ProgressPlantContainer profile={profile} />
    </div>
  )
}
