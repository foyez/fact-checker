import React from 'react'

import { auth, facebookProvider } from '../../firebase/firebase.utils'

import './Navigation.scss'

const Navigation = ({ currentUser }) => {
  // console.log(currentUser)
  const signInWithFacebook = async () => {
    const user = await auth.signInWithPopup(facebookProvider)
    currentUser = user
  }

  return (
    <div className="d-flex justify-content-between align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">Fact Checker</h5>
      {!currentUser ? (
        <button className="btn btn-fb" onClick={signInWithFacebook}>
          Sign in with facebook
        </button>
      ) : (
        <>
          <strong className="mr-md-2">{currentUser.displayName}</strong>
          <button className="btn btn-danger" onClick={() => auth.signOut()}>
            Logout
          </button>
        </>
      )}
    </div>
  )
}

export default Navigation
