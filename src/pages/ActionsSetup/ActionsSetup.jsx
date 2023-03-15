import styles from "./ActionSetup.module.css"

function ActionsSetup() {
  return (
    <form >
           <div className={styles.inputcontainer}>
            <label htmlFor="name-input" input type="text">Name</label>
            <input id="name-input" autoComplete="off" name="name" input type="text"></input>
           </div>
           <div className={styles.inputcontainer}>
            <label htmlFor="reflection-input" input type="text">Reflection</label>
            <input id="reflection-input" autoComplete="off" name="reflection" input type="text"></input>
           </div>
           {/* Possibly add state for checkbox feature */}
           <div className={styles.inputcontainer}>
            <label htmlFor="checkbox-input" type="checkbox">Completed</label>
            <input id="checkbox-input" autoComplete="off" name="checkbox" input type="checkbox"></input>
           </div>
           
            <button>Save</button>
        </form>
  )
}

export default ActionsSetup