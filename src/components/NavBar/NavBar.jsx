import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../assets/logo.png'


const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.container}>
      <div className={styles.top}>
        <img src="/public/favicon.ico" alt="user avatar" id={styles.avatar}/>
        <img src={logo} alt="logo" id={styles.logo}/>
        <Link to="profiles">Profiles</Link>
      </div>
      {user ?
        <ul>
          {/* <li>Welcome, {user.name}</li> */}
          {/* <li><Link to="/profiles">Profiles</Link></li> */}
          <li><Link to="/garden">Garden</Link></li>
          <li><Link to="/actions">Tasks</Link></li>
          <li><Link to="#">Badges</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link to="/change-password">Change Password</Link></li>
        </ul>
      :
        <ul>
          {/* <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li> */}
        </ul>
      }
    </nav>
  )
}

export default NavBar
