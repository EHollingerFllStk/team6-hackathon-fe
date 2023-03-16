import styles from "./ActionSetup.module.css"
import { useState } from "react"
import * as actionService from '../../services/actionService'
import check from '../../assets/Misc/Green check (complete task action).png'
import completed  from '../../assets/Misc/Completed_badge.png'
import add from '../../assets/Misc/Plus button (add task action).png'

function ActionsSetup(props) {
  const [form, setForm] = useState({
    name: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddAction(form, props.plot._id)
  }

  const handleUpdateSubmit = async (actionId) => {
    console.log(actionId, 'Id')
    const formData = {completed: true}
    console.log(formData, 'formData')
    await actionService.update(formData, actionId)
    window.location.reload()
  }

  return (
    <div className={styles.container}>
      <div className={styles.pot}>
        <p>{props.plot.name}</p>
      </div>
      <div className={styles.tasks}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputcontainer}>
            <input
              required
              id="name-input"
              autoComplete="off"
              name="name"
              type="text"
              placeholder="Type Task"
              value={form.name}
              onChange={handleChange}
            >
            </input>
          <button type="submit"><img src={add} alt="a red plus button" /></button>
          </div>

        </form>
        {props.plot.actions.map((action) => {
          return (
            <div key={action._id}>
              <form onSubmit={(e) => {
                e.preventDefault()
                handleUpdateSubmit(action._id)
              }}>
                <label>{action.name}</label>
                {action.completed ?
                <button><img src={check} alt="a green check mark" /></button>
                :
                <button><img src={completed} alt="a gold medal" /></button>
                }
              </form>
            </div>
          )
        })
        }
      </div>
    </div>

  )
}

export default ActionsSetup
