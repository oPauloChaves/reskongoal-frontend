import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from '../components/Header'

class DefaultLayout extends Component {

  render() {
    const { component: Component, appdata, ...rest } = this.props

    return (
      <Route {...rest} render={matchProps => (
        <div>
          <Header {...matchProps} />
          <div className='container'>
            <Component {...matchProps} appdata={appdata} />
          </div>
        </div>
      )} />
    )
  }
}

export default DefaultLayout
