import styles from "./Actions.module.css"
import * as actionService from '../../services/actionService'
import ActionsSetup from "../ActionsSetup/ActionsSetup"
import { useState, useEffect } from "react"
import * as profileService from '../../services/profileService'
import { Link } from "react-router-dom"

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
      <h4>Get started by adding an equal number of tasks to each flower pot by typing in the form and clicking the red plus button.</h4>
      <h4>Once you complete a task, mark it complete by clicking on the gold medal next to it! See your progress in the <Link to="/garden" className={styles.link}>Garden</Link></h4>
      {profile.plots &&
        profile.plots.map((plot) => {
          return (
            <ActionsSetup key={plot._id} handleAddAction={handleAddAction} plot={plot} />
          )
        }
        )}
    </div>
  )
}
export default Actions
