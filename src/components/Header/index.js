import React, { Component } from 'react'

import classes from './Header.scss'

class Header extends Component {
  render() {
    return (
      <div className={`row ${classes.Header}`}>
        <div className='col'>Search</div>
        <div className='col'>Logo</div>
        <div className='col'>Actions</div>
      </div>
    )
  }
}

export default Header
