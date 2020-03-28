import React, { useState, useEffect } from 'react'
import Navigation from '../components/Navigation/Navigation'
import { auth, createUserProfileDocument } from '../firebase/firebase.utils'

const Layout = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // setCurrentUser(user)
      // console.log(user)
      if (user) {
        const userRef = await createUserProfileDocument(user)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
        })
      } else {
        setCurrentUser(user)
      }
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
