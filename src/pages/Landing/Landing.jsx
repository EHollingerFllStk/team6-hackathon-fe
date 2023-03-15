import styles from './Landing.module.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <img src={logo} alt="logo" />
      <Link to={'/login'}>Log In</Link>
      <Link to={'/signup'}>Sign Up</Link>
    </main>
  )
}

export default Landing
