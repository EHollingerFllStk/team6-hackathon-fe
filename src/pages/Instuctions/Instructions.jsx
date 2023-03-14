import styles from "./Instructions.module.css";
import { Link } from "react-router-dom";

function Instructions() {
  return (
    <div>
        <h1>Instructions Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatum, culpa corporis explicabo repudiandae ad magnam, minus deserunt placeat vero iste quidem quia doloribus provident. Amet dolore adipisci labore architecto.</p>
        <Link to="/plots-setup">Get Started</Link>
    </div>
  )
}

export default Instructions
