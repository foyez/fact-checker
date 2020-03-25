import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import HomePage from './pages/HomePage/HomePage'

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </Layout>
)

export default App
