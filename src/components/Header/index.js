import React, { Component } from 'react'

import classes from './Header.scss'

class Header extends Component {
  render() {
    return (
      <div className={`row ${classes.Header}`}>
        <p><a href="#">Reskongoal</a></p>
      </div>
    )
  }
}

export default Header
