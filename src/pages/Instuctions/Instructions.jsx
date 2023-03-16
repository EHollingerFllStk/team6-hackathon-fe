import styles from "./Instructions.module.css";
import { Link } from "react-router-dom";

function Instructions() {
  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <h1>Welcome to Plantivity</h1>
        <p><strong>Plantivity</strong> helps balance the top priorities in your life in a simple and fun way.
        </p>
        <p>
        List <strong>3 parts of life</strong> you want to improve, then  <strong>3 actions</strong> within each part to help you grow.
        </p>
        <p>
        When you complete an action, you’ll grow the plants in your garden, and also receive rewards and badges for your hard work.
        </p>
        <p>Follow the path to your garden!</p>
        <div id={styles.button}>
          <Link to="/plots-setup" >Let's Go!</Link>
        </div>
      </div>
    </div>
  )
}

export default Instructions
