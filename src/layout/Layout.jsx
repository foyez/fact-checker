import React from 'react'
import Navigation from '../components/Navigation/Navigation'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navigation />

      {children}
    </div>
  )
}

export default Layout
