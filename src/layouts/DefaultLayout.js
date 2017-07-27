import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from '../components/Header'

class DefaultLayout extends Component {

  render() {
    const { component: Component, ...rest } = this.props

    return (
      <Route {...rest} render={matchProps => (
        <div className='DefaultLayout'>
          <Header {...matchProps} />
          <div className="row">
            <Component {...matchProps} />
          </div>
        </div>
      )} />
    )
  }
}

export default DefaultLayout
