// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Instructions from './pages/Instuctions/Instructions'
import Plots from './pages/Plots/Plots'
import AddPlot from "./pages/AddPlot/AddPlot"
import Actions from './pages/Actions/Actions'
import Garden from './pages/Garden/Garden'
import Awards from './pages/Awards/Awards'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile(user.profile)
      setProfile(profileData)
    }
    fetchProfile()
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }



  return (
    <>
      {user &&
        <NavBar user={user} handleLogout={handleLogout} profile={profile}/>
      }
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/instructions"
          element={<Instructions />}
        />
        <Route
          path="/plots-setup"
          element={
            <ProtectedRoute user={user}>
              <Plots profile={profile}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/plots/new"
          element={
            <ProtectedRoute user={user}>
              <AddPlot profile={profile}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/actions"
          element={
            <ProtectedRoute user={user}>
              <Actions profile={profile}/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/garden"
          element={
            <ProtectedRoute user={user}>
              <Garden profile={profile}/>
            </ProtectedRoute>
          }
          />
        <Route
          path="/awards"
          element={
            <ProtectedRoute user={user}>
              <Awards profile={profile}/>
            </ProtectedRoute>
          }
        />
      </Routes>

    </>
  )
}

export default App
