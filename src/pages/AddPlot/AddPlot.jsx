import styles from "./AddPlot.module.css"
import pot from '../../assets/Pots _ Plants/mobile-namelesspot.png'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as PlotsService from '../../services/plotsService'

function AddPlot() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    category: "other"
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await PlotsService.createPlot(form)
    navigate('/plots-setup')
  }
  
  return (
    <div className={styles.container}>
        <h1>Name Your Pot</h1>
        <img src={pot} alt="a pot with no label" />
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            {/* <label htmlFor="name-input" input type="text">Name</label> */}
            <input
              id="name-input"
              autoComplete="off"
              name="name"
              type="text"
              placeholder="Type Here"
              onChange={handleChange}
              ></input>
          </div>
          <div className={styles.inputContainer}>
            {/* <label htmlFor="category-input">Category</label> */}
            <select
              id="category-input"
              name="category"
              onChange={handleChange}
              >
                <option value="other">Select Category</option>
                <option value="finance">Finance</option>
                <option value="fitness">Fitness</option>
                <option value="family">Family</option>
                <option value="friends">Friends</option>
                <option value="other">Other</option>
            </select>
          </div>
          <button>Set New Pot</button>

        </form>
    </div>
  )
}

export default AddPlot
