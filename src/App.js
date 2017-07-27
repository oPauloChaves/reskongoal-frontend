import React, { Component } from 'react'
import { Switch } from 'react-router-dom'

import Header from './components/Header'
import NoMatch from './components/NoMatch'

import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './routes/Home'
import LoginPage from './routes/Login'
import BoardPage from './routes/Board'

import data from './data.json'

class App extends Component {
  render() {
    return (
      <Switch>
        <DefaultLayout exact path='/' component={HomePage} />
        <DefaultLayout path='/login' component={LoginPage} />
        <DefaultLayout path='/board' component={BoardPage} appdata={data} />
        <DefaultLayout component={NoMatch} />
      </Switch>
    )
  }
}

export default App
