import styles from "./AddPlot.module.css"

function AddPlot() {
  return (
    <div>
        <h1>AddPlot</h1>
        <form >
           <div className={styles.inputcontainer}>
            <label htmlFor="name-input" input type="text">Name</label>
            <input id="name-input" autoComplete="off" name="name" input type="text"></input>
           </div>
           <div className={styles.inputcontainer}>
            <label htmlFor="category-input">
           Category</label>
            <select id="category-input">
                <option value="finance">Finance</option>
                <option value="fitness">Fitness</option>
                <option value="family">Family</option>
                <option value="friends">Friends</option>
                <option value="other">Other</option>
            </select>
           </div>
            <button>Save</button>

        </form>
    </div>
  )
}

export default AddPlot