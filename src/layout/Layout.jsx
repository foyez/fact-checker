import React, { useState, useEffect } from 'react'
import Navigation from '../components/Navigation/Navigation'
import { auth } from '../firebase/firebase.utils'

const Layout = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <div className="container">
      <Navigation currentUser={currentUser} />

      {children}
    </div>
  )
}

export default Layout
