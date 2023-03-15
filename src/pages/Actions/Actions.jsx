import styles from "./Actions.module.css"
import * as actionService from '../../services/actionService'
import ActionsSetup from "../ActionsSetup/ActionsSetup"
import { useState} from "react"

function Actions(props) {
const [actions, setActions] = useState([])
  console.log(props, 'props')

  const handleAddAction = async (actionData) => {
    const newAction = await actionService.create(actionData)
    setActions([newAction, ...actions])
  }

  return (
    <div>
      <h1>Welcome to your actions page, {props.profile.name}</h1>

      <h1>Action Page Headline</h1>
      <p>Plot Card</p>
      <ActionsSetup props={props.profile} handleAddAction={handleAddAction}/>
      <p>Update Action Form</p>
    </div>
  )
}

export default Actions

