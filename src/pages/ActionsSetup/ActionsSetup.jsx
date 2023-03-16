import styles from "./ActionSetup.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as actionService from '../../services/actionService'

function ActionsSetup(props) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddAction(form, props.plot._id)
    navigate('/actions')
  }

  const handleUpdateSubmit = async (actionId) => {
    console.log(actionId, 'Id')
    const formData = {completed: true}
    console.log(formData, 'formData')
    await actionService.update(formData, actionId)
  }

  return (
    <>
      <h4>{props.plot.name}</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputcontainer}>
          <label
            htmlFor="name-input">
            Name
          </label>
          <input
            required
            id="name-input"
            autoComplete="off"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          >
          </input>
        </div>
        <button type="submit">Save</button>

      </form>
      {props.plot.actions.map((action) => {
        return (
          <div key={action._id}>
            <h4>Click the X to mark the form as complete</h4>
            <form onSubmit={(e) => {
              e.preventDefault()
              handleUpdateSubmit(action._id)
            }}>
              <label>{action.name}</label>
                <label>complete?</label>
              <button>X</button>
            </form>
          </div>
        )
      })
      }
    </>

  )
}

export default ActionsSetup
