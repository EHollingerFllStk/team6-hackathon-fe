import styles from "./ActionSetup.module.css"
import { useState } from "react"

// Create Actions From
function ActionsSetup(props) {
  const [form, setForm] = useState({
    name: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
    console.log(target.name, 'name')
    console.log(target.value, 'value')
  }

  const handleSubmit = ({ e }) => {
    e.preventDefault()
    console.log(form, 'form')
    props.handleAddAction(form)
  }

  return (
<>
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
</>

  )
}

export default ActionsSetup