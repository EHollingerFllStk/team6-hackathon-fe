import styles from "./Actions.module.css"
import * as actionService from '../../services/actionService'
import ActionsSetup from "../ActionsSetup/ActionsSetup"
import { useState, useEffect } from "react"
import * as profileService from '../../services/profileService'
import { Link } from "react-router-dom"
import corgi from '../../assets/Branding/mobile-corgi.png'

function Actions(props) {
  const user = props.user
  const [actions, setActions] = useState([])

  const handleAddAction = async (actionData, id) => {
    const newAction = await actionService.create(actionData, id)
    setActions([newAction, ...actions])
    window.location.reload()
  }

  const [profile, setProfile] = useState({})


  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile(user.profile)
      setProfile(profileData)
    }
    fetchProfile()
  }, [user])


  return (
    <div className={styles.container}>
      <h1>Add Your Tasks</h1>
      {profile.plots &&
        profile.plots.map((plot) => {
          return (
            <ActionsSetup key={plot._id} handleAddAction={handleAddAction} plot={plot} />
          )
        }
        )}
        <div className={styles.tooltip}>
          <div className={styles.textbox}>
            <p>Add tasks here! Mark them complete by clicking the grey check box to make your plants grow. See your progress in the <Link to="/garden" className={styles.link}>Garden.</Link></p>
          </div>
          <div className={styles.corgi}>
          <img src={corgi} alt="corgi-logo" />
          </div>
        </div>
    </div>
  )
}
export default Actions
