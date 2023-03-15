import { Link, NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../assets/logo.png'


const NavBar = ({ user, handleLogout, profile }) => {
  return (
    <nav className={styles.container}>
      <div className={styles.top}>
        <div>
          <img src={profile.photo} alt="user avatar" id={styles.avatar}/>
        </div>
        <div>
          <img src={logo} alt="logo" id={styles.logo}/>
        </div>
        <Link to="" onClick={handleLogout}>LOG OUT</Link>
      </div>
      <div className={styles.bottom}>
        {user ?
          <>
            <NavLink to="/garden">Garden</NavLink>
            <NavLink to="/actions">Tasks</NavLink>
            <NavLink to="/awards">Badges</NavLink>
          </>
        :
          <>
          </>
        }
      </div>
    </nav>
  )
}

export default NavBar
