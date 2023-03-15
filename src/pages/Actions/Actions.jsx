import styles from "./Actions.module.css"
import * as actionService from '../../services/actionService'
import ActionsSetup from "../ActionsSetup/ActionsSetup"
import { useState } from "react"

function Actions(props) {
const [actions, setActions] = useState([])
  console.log(props, 'props')

  const handleAddAction = async (actionData) => {
    const newAction = await actionService.create(actionData)
    setActions([newAction, ...actions])
  }

  // useEffect(() => {
  //   const fetchAllActions = async () => {
  //     const data = await actionService.index()
  //     console.log('Action Data:', data)
  //   }
  //   fetchAllActions()
  // }, [])

  return (
    <div>
      <h1>Welcome to your actions page, {props.profile.name}</h1>
      <p>Plot Card Component</p>
      <ActionsSetup props={props.profile} handleAddAction={handleAddAction}/>
      <p>Update Action Form will go here</p>
      {/* <p>{props.profile.plot.action}</p> */}
    </div>
  )
}

export default Actions

