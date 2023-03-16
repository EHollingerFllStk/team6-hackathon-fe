import styles from "./Actions.module.css"
import * as actionService from '../../services/actionService'
import ActionsSetup from "../ActionsSetup/ActionsSetup"
import { useState, useEffect } from "react"
import * as profileService from '../../services/profileService'

function Actions(props) {
  const user = props.user
  const [actions, setActions] = useState([])

  const handleAddAction = async (actionData, id) => {
    const newAction = await actionService.create(actionData, id)
    setActions([newAction, ...actions])
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
    <div>
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

