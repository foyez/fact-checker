import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import ArticlePage from './pages/ArticlePage/ArticlePage'

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/article/:id" component={ArticlePage} />
    </Switch>
  </Layout>
)

export default App
